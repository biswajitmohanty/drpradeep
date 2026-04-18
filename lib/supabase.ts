import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env, isSupabaseConfigured } from "./env";

let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;
  if (client) return client;
  client = createClient(env.supabaseUrl!, env.supabaseServiceKey!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}

export interface BookingRecord {
  name: string;
  phone: string;
  email: string | null;
  condition: string;
  preferred_clinic: string;
  preferred_date: string | null;
  message: string | null;
  source: string;
}

export async function insertBooking(record: BookingRecord) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    throw new Error("Supabase is not configured");
  }
  const { data, error } = await supabase
    .from("bookings")
    .insert({ ...record, status: "new" })
    .select()
    .single();
  if (error) throw error;
  return data;
}
