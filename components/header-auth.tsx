import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./ui/LogoutButton";
import GoBackButton from "./ui/GoBackButton";
import Logo from "./Logo";
import WhiteLogo from "./WhiteLogo";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (!hasEnvVars) {
    return (
      <div className="flex gap-4 items-center">
        <div>
          <Badge
            variant={"default"}
            className="font-normal pointer-events-none"
          >
            Please update .env.local file with anon key and url
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            asChild
            size="sm"
            variant={"outline"}
            disabled
            className="opacity-75 cursor-none pointer-events-none"
          >
            <Link href="/sign-in">Entrar</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant={"default"}
            disabled
            className="opacity-75 bg-transparent border-[1px] border-white cursor-none pointer-events-none"
          >
            <Link href="/sign-up">Criar conta</Link>
          </Button>
        </div>
      </div>
    );
  }
  return user ? (
    <div className="w-full flex text-white font-semibold text-lg items-center justify-between mt-10">
      <WhiteLogo />

      <GoBackButton />
      <form action={signOutAction}>
        <LogoutButton />
      </form>
    </div>
  ) : (
    <div className="w-full flex mt-10 gap-4">
      <Button
        className="ml-auto p-5 cursor-pointer"
        asChild
        size="sm"
        variant={"outline"}
      >
        <Link href="/sign-in">Entrar</Link>
      </Button>
      <Button
        asChild
        size="sm"
        className="bg-transparent border-[1px] p-5 border-white cursor-pointer"
        variant={"default"}
      >
        <Link href="/sign-up">Criar conta</Link>
      </Button>
    </div>
  );
}
