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
        <div className="flex justify-between items-center">
          <Label className="font-semibold" htmlFor="password">
            Senha
          </Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Esqueceu a senha?
          </Link>
        </div>
        <Input
          className="bg-black text-white"
          type="password"
          name="password"
          placeholder="Sua senha"
          required
        />
        <SubmitButton
          className="bg-white border-2 border-black text-black font-semibold shadow-none hover:shadow-lg hover:bg-black hover:text-white"
          pendingText="Entrando..."
          formAction={signInAction}
        >
          Entrar
        </SubmitButton>
        <FormMessage message={searchParams} />
      </div>
    </form>
  );
}
