"use client";

import { useState } from "react";
import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Logo from "@/components/Logo";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup({ searchParams }: { searchParams: Message }) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    await signUpAction(formData);
  };

  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col min-w-64 bg-white p-8 rounded-xl mix-blend-screen "
      >
        <Logo />

        <h1 className="text-2xl font-semibold">Criar conta</h1>
        <p className="text-sm text text-foreground">
          Já tem uma conta?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Entrar
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label className="font-semibold" htmlFor="name">
            Nome
          </Label>
          <Input
            minLength={1}
            className="bg-black min-w-96 text-white"
            name="name"
            placeholder="Seu nome"
            required
          />
          <Label className="font-semibold" htmlFor="email">
            Email
          </Label>
          <Input
            className="bg-black min-w-96 text-white"
            name="email"
            placeholder="voce@exemplo.com"
            required
          />

          <SubmitButton
            className="bg-white border-2 mt-4 border-black text-black font-semibold shadow-none hover:shadow-lg hover:bg-black hover:text-white"
            pendingText="Criando conta..."
          >
            Criar conta
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
