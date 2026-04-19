function readEnv(key: string): string | null {
  const v = process.env[key];
  return v && v.length > 0 ? v : null;
}

export const env = {
  supabaseUrl: readEnv("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseServiceKey: readEnv("SUPABASE_SERVICE_ROLE_KEY"),
  resendApiKey: readEnv("RESEND_API_KEY"),
  clinicNotificationEmail: readEnv("CLINIC_NOTIFICATION_EMAIL"),
  clinicFromEmail:
    readEnv("CLINIC_FROM_EMAIL") ?? "appointments@drpradeepsahoo.com",
  plausibleDomain: readEnv("NEXT_PUBLIC_PLAUSIBLE_DOMAIN"),
  clarityId: readEnv("NEXT_PUBLIC_CLARITY_ID"),
};

export const isSupabaseConfigured = Boolean(
  env.supabaseUrl && env.supabaseServiceKey
);
export const isResendConfigured = Boolean(
  env.resendApiKey && env.clinicNotificationEmail
);
