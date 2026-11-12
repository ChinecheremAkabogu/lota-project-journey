CREATE TABLE public.project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  country_of_residence text,
  project_category text NOT NULL,
  project_location text NOT NULL,
  project_description text,
  estimated_budget text,
  start_timeline text,
  contact_consent boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.project_enquiries TO service_role;
ALTER TABLE public.project_enquiries ENABLE ROW LEVEL SECURITY;