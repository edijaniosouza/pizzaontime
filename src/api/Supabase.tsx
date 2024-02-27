import { createClient } from "@supabase/supabase-js";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
import 'react-native-url-polyfill/auto';
import { AppState } from "react-native";

const supabaseUrl = "https://xcyuympifksqcspwmwny.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjeXV5bXBpZmtzcWNzcHdtd255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NDg3NTcsImV4cCI6MjAyNDEyNDc1N30.n4AH0tsTr_D-YHSqyjvlJAYBWQ14sb8F8mI9xq4N4EY"
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  }
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})
