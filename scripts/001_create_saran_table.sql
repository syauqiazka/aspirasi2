-- Create saran table for storing aspirations
CREATE TABLE IF NOT EXISTS public.saran (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nama TEXT NOT NULL,
  pesan TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS for security
ALTER TABLE public.saran ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view all saran
CREATE POLICY "Allow public to view saran" 
  ON public.saran 
  FOR SELECT 
  USING (true);

-- Allow anyone to insert saran
CREATE POLICY "Allow public to insert saran" 
  ON public.saran 
  FOR INSERT 
  WITH CHECK (true);
