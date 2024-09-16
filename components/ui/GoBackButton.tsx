"use client";

import { LineSegments } from "phosphor-react";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";

export default function GoBackButton() {
  const pathname = usePathname();
  const router = useRouter();

  const shouldShowButton =
    pathname.startsWith("/inicio/") && pathname !== "/inicio";

  const handleClick = () => {
    router.push("/inicio");
  };

  return (
    <>
      {shouldShowButton && (
        <Button
          className="text-black ml-auto mr-4 flex gap-2 items-center"
          variant={"outline"}
          onClick={handleClick}
        >
          <LineSegments size={20} />
          Voltar à trilha
        </Button>
      )}
    </>
  );
}
