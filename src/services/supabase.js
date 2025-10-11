import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ilsqosskcwailsnqgtdt.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsc3Fvc3NrY3dhaWxzbnFndGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNzIyNTcsImV4cCI6MjA3Mzc0ODI1N30.GYLqKr3XgeG6MngtIapcuRJ-DDuV_lvnXJQ0iKgtBOA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;