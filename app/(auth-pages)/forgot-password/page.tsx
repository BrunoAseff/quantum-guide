import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <>
      <form className="flex-1 flex flex-col min-w-64 bg-white p-8 rounded-xl mix-blend-screen">
        <Logo />
        <div>
          <h1 className="text-2xl font-medium">Trocar senha</h1>
          <p className="text-sm text-foreground">
            Não tem uma conta?{" "}
            <Link
              className="text-foreground font-medium underline"
              href="/sign-up"
            >
              Criar conta
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label className="font-semibold" htmlFor="email">
            Email
          </Label>
          <Input name="email" placeholder="voce@exemplo.com" required />
          <SubmitButton formAction={forgotPasswordAction}>
            Trocar senha
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </>
  );
}
