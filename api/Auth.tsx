import { supabase } from "./Supabase.tsx";


export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) return { error: error }
  return {data: data}
}

async function signUpWithEmail(email: string, password: string) {
  const {
    data: { session },
    error
  } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) console.log(error.message);
  if (!session) console.log("E-mail não verificado");
}
