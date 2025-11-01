/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact name
      - `email` (text) - Contact email address
      - `phone` (text, nullable) - Optional phone number
      - `company` (text, nullable) - Optional company name
      - `message` (text) - Contact message content
      - `gdpr_consent` (boolean) - GDPR consent flag
      - `created_at` (timestamptz) - Submission timestamp
      - `ip_address` (text, nullable) - Optional IP address for spam prevention
      - `user_agent` (text, nullable) - Optional user agent for spam prevention

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anonymous inserts only
    - Add policy for authenticated admins to read submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  gdpr_consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (gdpr_consent = true);

CREATE POLICY "Allow authenticated users to read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
