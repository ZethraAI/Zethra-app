import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zrfjvlbactriorxzysam.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZmp2bGJhY3RyaW9yeHp5c2FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyNTcwMTgsImV4cCI6MjA3MzgzMzAxOH0.BoyVPEll2XVr6SRQocjbbQX-qNaXe8FvCRwbw2pUqxA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  }
});
