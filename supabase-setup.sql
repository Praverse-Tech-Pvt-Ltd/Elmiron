-- ───  Supabase Database Setup ──────────────────────────────────────
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Round Table Registrations
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  specialty TEXT,
  hospital TEXT,
  city TEXT,
  event_id TEXT DEFAULT 'roundtable-2026',
  status TEXT DEFAULT 'pending'
);

-- Contact Form Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  source TEXT  -- 'elmiron' or 'missed-bladder'
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (server-side only via SUPABASE_SERVICE_KEY)
CREATE POLICY "Service role full access on registrations"
  ON registrations FOR ALL
  TO service_role
  USING (true);

CREATE POLICY "Service role full access on contact_submissions"
  ON contact_submissions FOR ALL
  TO service_role
  USING (true);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS registrations_event_id_idx ON registrations(event_id);
CREATE INDEX IF NOT EXISTS registrations_status_idx ON registrations(status);
CREATE INDEX IF NOT EXISTS registrations_created_at_idx ON registrations(created_at DESC);

