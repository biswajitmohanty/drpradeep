import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/schema-forms";
import { insertBooking } from "@/lib/supabase";
import { sendClinicNotification, sendPatientConfirmation } from "@/lib/email";
import { isResendConfigured, isSupabaseConfigured } from "@/lib/env";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = bookingSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  // Honeypot — silently drop if filled
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { website, ...data } = parsed.data;
  void website;

  const record = {
    name: data.name,
    phone: data.phone,
    email: data.email && data.email.length > 0 ? data.email : null,
    condition: data.condition,
    preferred_clinic: data.clinic,
    preferred_date:
      data.preferredDate && data.preferredDate.length > 0
        ? data.preferredDate
        : null,
    message: data.message && data.message.length > 0 ? data.message : null,
    source: "website",
  };

  // Persist to Supabase if configured; otherwise log so the request isn't lost.
  if (isSupabaseConfigured) {
    try {
      await insertBooking(record);
    } catch (err) {
      console.error("[booking] supabase insert failed", err);
      // Don't fail the request — we still try to notify + return success
    }
  } else {
    console.info("[booking] (no supabase) new request", {
      ...record,
      receivedAt: new Date().toISOString(),
    });
  }

  // Email the clinic, and optionally the patient, if Resend is configured.
  if (isResendConfigured) {
    try {
      await sendClinicNotification(record);
      if (record.email) await sendPatientConfirmation(record);
    } catch (err) {
      console.error("[booking] email send failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Use POST to submit a booking" },
    { status: 405 }
  );
}
