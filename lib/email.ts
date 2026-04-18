import { Resend } from "resend";
import { env, isResendConfigured } from "./env";
import { CLINICS, DOCTOR } from "./constants";

let resend: Resend | null = null;

function getResend(): Resend | null {
  if (!isResendConfigured) return null;
  if (resend) return resend;
  resend = new Resend(env.resendApiKey!);
  return resend;
}

const CONDITION_LABELS: Record<string, string> = {
  "knee-pain": "Knee pain / knee replacement",
  "hip-pain": "Hip pain / hip replacement",
  "sports-injury": "Sports injury",
  trauma: "Fracture / trauma",
  "spine-joint": "Spine / joint pain",
  other: "Other",
};

const CLINIC_LABELS: Record<string, string> = Object.fromEntries(
  CLINICS.map((c) => [c.id, c.name])
);
CLINIC_LABELS.either = "Either clinic";

interface BookingEmailData {
  name: string;
  phone: string;
  email?: string | null;
  condition: string;
  preferred_clinic: string;
  preferred_date?: string | null;
  message?: string | null;
}

export async function sendClinicNotification(data: BookingEmailData) {
  const client = getResend();
  if (!client) return { ok: false, reason: "not-configured" as const };

  const conditionLabel = CONDITION_LABELS[data.condition] ?? data.condition;
  const clinicLabel =
    CLINIC_LABELS[data.preferred_clinic] ?? data.preferred_clinic;

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="font-family: Georgia, serif; color: #0F766E;">New appointment request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #737373; width: 140px;">Name</td><td style="padding: 8px 0;">${escape(data.name)}</td></tr>
        <tr><td style="padding: 8px 0; color: #737373;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escape(data.phone)}">${escape(data.phone)}</a></td></tr>
        ${data.email ? `<tr><td style="padding: 8px 0; color: #737373;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escape(data.email)}">${escape(data.email)}</a></td></tr>` : ""}
        <tr><td style="padding: 8px 0; color: #737373;">Condition</td><td style="padding: 8px 0;">${escape(conditionLabel)}</td></tr>
        <tr><td style="padding: 8px 0; color: #737373;">Preferred clinic</td><td style="padding: 8px 0;">${escape(clinicLabel)}</td></tr>
        ${data.preferred_date ? `<tr><td style="padding: 8px 0; color: #737373;">Preferred date</td><td style="padding: 8px 0;">${escape(data.preferred_date)}</td></tr>` : ""}
        ${data.message ? `<tr><td style="padding: 8px 0; color: #737373; vertical-align: top;">Message</td><td style="padding: 8px 0; white-space: pre-line;">${escape(data.message)}</td></tr>` : ""}
      </table>
      <p style="color: #737373; font-size: 13px; margin-top: 24px;">Submitted at ${new Date().toLocaleString("en-IN")}</p>
    </div>
  `;

  return client.emails.send({
    from: env.clinicFromEmail,
    to: env.clinicNotificationEmail!,
    subject: `New booking — ${data.name} (${conditionLabel})`,
    html,
    replyTo: data.email ?? undefined,
  });
}

export async function sendPatientConfirmation(data: BookingEmailData) {
  const client = getResend();
  if (!client || !data.email) return { ok: false, reason: "skipped" as const };

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="font-family: Georgia, serif; color: #0F766E;">We&rsquo;ve received your request</h2>
      <p>Hi ${escape(data.name)},</p>
      <p>Thank you for reaching out to ${escape(DOCTOR.name)}&rsquo;s clinic. We&rsquo;ve received your appointment request and someone from our team will call or message you within one working day to confirm.</p>
      <p>If you need us sooner, please WhatsApp or call us directly.</p>
      <p style="margin-top: 32px; color: #737373; font-size: 13px;">This is an automated confirmation — replies to this address reach the clinic team.</p>
    </div>
  `;

  return client.emails.send({
    from: env.clinicFromEmail,
    to: data.email,
    subject: "Your appointment request — Dr. Pradeep Kumar Sahoo",
    html,
  });
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
