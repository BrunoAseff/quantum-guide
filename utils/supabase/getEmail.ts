import { createClient } from "@/utils/supabase/server";

export default async function getEmail() {
  "use server";
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return user?.email?.toString() || null;
}
