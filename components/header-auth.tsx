"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import WhiteLogo from "./WhiteLogo";
import { LineSegments } from "phosphor-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const renderButton = () => {
    // Home page
    if (pathname === "/") {
      return (
        <Button
          className="ml-auto p-5 cursor-pointer"
          asChild
          size="sm"
          variant="outline"
        >
          <Link href="/inicio">Entrar</Link>
        </Button>
      );
    }

    // Inside a lesson page
    if (pathname.startsWith("/inicio/")) {
      return (
        <Button
          className="text-black ml-auto mr-4 flex gap-2 items-center"
          variant="outline"
          asChild
        >
          <Link href="/inicio">
            <LineSegments size={20} />
            Voltar à trilha
          </Link>
        </Button>
      );
    }

    // On /inicio page, return null to show no button
    return null;
  };

  return (
    <div className="w-full justify-between items-center flex mt-10 gap-4">
      <WhiteLogo />
      {renderButton()}
    </div>
  );
}
