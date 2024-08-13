
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://uwzshpsezrpsvqmrfvto.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3enNocHNlenJwc3ZxbXJmdnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczNDMyNzYsImV4cCI6MjAzMjkxOTI3Nn0.2T1IYa2Yyhp63ZN5lY-z4KpKfsjiDC65drUDaE21zYA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase