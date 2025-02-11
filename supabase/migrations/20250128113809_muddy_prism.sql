/*
  # Create jobs table

  1. New Tables
    - `jobs`
      - `id` (uuid, primary key)
      - `title` (text, job title)
      - `description` (text, job description)
      - `company` (text, company name)
      - `location` (text, job location)
      - `salary_range` (text, salary range)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `jobs` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  company text NOT NULL,
  location text NOT NULL,
  salary_range text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to jobs
CREATE POLICY "Jobs are viewable by everyone" 
  ON jobs
  FOR SELECT 
  TO public
  USING (true);