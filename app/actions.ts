"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString(); // Add name from formData
  const supabase = createClient();
  const origin = headers().get("origin");

  if (!email || !password || !name) {
    return { error: "Email, senha e nome são obrigatórios" };
  }

  // Sign up the user with Supabase Auth
  const { error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (authError) {
    console.error(authError.code + " " + authError.message);
    return encodedRedirect("error", "/sign-up", authError.message);
  }

  // Insert user data into the `users` table
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
    "/sign-up",
    "Obrigado por se cadastrar! Confira seu e-mail para obter um link de verificação."
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
