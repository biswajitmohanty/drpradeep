-- Bookings table
-- Run in Supabase SQL editor or via the Supabase CLI.

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text,
  condition text not null,
  preferred_clinic text not null,
  preferred_date date,
  message text,
  status text not null default 'new',
  source text not null default 'website'
);

create index if not exists bookings_created_at_idx
  on public.bookings (created_at desc);
create index if not exists bookings_status_idx
  on public.bookings (status);

-- Lock down the table: only the service role (used server-side) can read/write.
alter table public.bookings enable row level security;

-- No policies for authenticated or anon — this forces all access through the
-- service role key used in the Next.js API route.
