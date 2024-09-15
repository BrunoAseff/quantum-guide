import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message;
}) {
  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Trocar senha</h1>
      <p className="text-sm text-foreground/60">
        Insira a sua nova senha abaixo.
      </p>
      <Label htmlFor="password">Nova senha</Label>
      <Input
        type="password"
        name="password"
        placeholder="Nova senha"
        required
      />
      <Label htmlFor="confirmPassword">Confirmar senha</Label>
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar senha"
        required
      />
      <SubmitButton formAction={resetPasswordAction}>Trocar senha</SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
