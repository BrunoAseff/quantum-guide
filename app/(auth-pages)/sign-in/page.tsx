import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Login({ searchParams }: { searchParams: Message }) {
  return (
    <form className="flex-1 flex flex-col min-w-64 bg-white  p-8 rounded-xl mix-blend-screen">
      <Logo />
      <h1 className="text-2xl font-bold">Entrar</h1>
      <p className="text-sm text-foreground">
        Não tem uma conta?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Criar conta
        </Link>
      </p>
      <div className="flex flex-col gap-4 [&>input]:mb-3 mt-8">
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
          className="bg-white border-2 border-black text-black font-semibold shadow-none hover:shadow-lg hover:bg-black hover:text-white"
          pendingText="Entrando..."
          formAction={signInAction} // Modify this to handle magic link
        >
          Entrar com link mágico
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
