// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rnnyqyevlecouudctifl.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJubnlxeWV2bGVjb3V1ZGN0aWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MDQ5MTcsImV4cCI6MjA1NDI4MDkxN30.4XsYzfna_LpJRdwtemFY-3O20rikwV61_zIG8TO032I";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);