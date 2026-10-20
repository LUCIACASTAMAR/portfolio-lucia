-- Run this script in Supabase Dashboard > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.client_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  type text not null check (type in ('quote', 'meeting')),
  locale text not null check (locale in ('es', 'en', 'fr', 'de', 'it', 'pt', 'nl', 'ru')),
  name text not null,
  email text not null,
  company text not null default '',
  service text not null default '',
  budget text not null default '',
  message text not null,
  meeting_date date,
  meeting_time time,
  status text not null default 'new' check (status in ('new', 'in_progress', 'quoted', 'accepted', 'closed'))
);

create index if not exists client_requests_created_at_idx on public.client_requests (created_at desc);
create index if not exists client_requests_status_idx on public.client_requests (status);

alter table public.client_requests enable row level security;

-- No policies are intentionally created. The public client cannot read the table;
-- server routes use the Supabase service-role key, stored only in server environment variables.
