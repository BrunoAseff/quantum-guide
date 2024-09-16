"use client";

import { SignOut } from "phosphor-react";
import { Button } from "./button";

export default function LogoutButton() {
  return (
    <Button
      className="text-black flex items-center gap-2"
      type="submit"
      variant={"outline"}
    >
      <SignOut size={20} />
      Sair{" "}
    </Button>
  );
}
