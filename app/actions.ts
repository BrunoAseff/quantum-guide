"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function updateProgress(
  userEmail: string,
  currentProgress: number,
  classNumber: number
) {
  const supabase = createClient();

  if (currentProgress < classNumber) {
    const { error } = await supabase
      .from("users")
      .update({ progress: currentProgress + 1 })
      .eq("email", userEmail);

    if (error) {
      console.error("Error updating user progress:", error);
      return false;
    }

    return true;
  }

  return false;
}

export async function getUser() {
  const supabase = createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error("Error fetching user from auth:", authError);
    return null;
  }

  const { data, error: dbError } = await supabase
    .from("users")
    .select("name, email, progress")
    .eq("email", user.email)
    .single();

  if (dbError) {
    console.error("Error fetching user data from users table:", dbError);
    return null;
  }

  return data;
}

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString(); // Get name from formData
  const supabase = createClient();
  const origin = headers().get("origin");

  if (!email || !name) {
    return { error: "Email e nome são obrigatórios" };
  }

  // Send magic link to the user's email for sign-in
  const { error: authError } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/auth/callback`, // Where the user will be redirected after verifying their email
    },
  });

  if (authError) {
    console.error(authError.code + " " + authError.message);
    return encodedRedirect("error", "/sign-up", authError.message);
  }

  // Optionally, insert user data into the `users` table
  const { error: insertError } = await supabase
    .from("users")
    .insert([{ email, name }]); // Insert name and email into users table

  if (insertError) {
    console.error(insertError.code + " " + insertError.message);
    return encodedRedirect(
      "error",
      "/sign-up",
      "Houve um erro ao salvar seus dados. Tente novamente."
    );
  }

  return encodedRedirect(
    "success",
    "/verify-email",
    "Obrigado por se cadastrar! Confira seu e-mail para obter o link mágico de verificação."
  );
};


export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/inicio");
};

export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/inicio/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Não foi possível redefinir a sua senha."
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Verifique seu e-mail para obter um link para redefinir sua senha."
  );
};

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/inicio/reset-password",
      "Senha e confirmação de senha são necessárias"
    );
  }

  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/inicio/reset-password",
      "As senhas não são iguais"
    );
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    encodedRedirect(
      "error",
      "/inicio/reset-password",
      "Falha na atualização da senha"
    );
  }

  encodedRedirect("success", "/inicio/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
