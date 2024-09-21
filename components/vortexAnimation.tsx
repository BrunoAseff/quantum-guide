import React, { useEffect, useState } from "react";
import { Vortex } from "./ui/vortex";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function VortexAnimation() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={230}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Você terminou o guia quântico!
        </h2>
        <div className="mt-24 min-h-20">
          {" "}
          {showButton && (
            <Button
              type="button"
              onClick={() => router.push("/inicio")}
              className="border-white/60 border-[2px] bg-transparent text-white/60 "
            >
              Voltar ao início
            </Button>
          )}
        </div>
      </Vortex>
    </div>
  );
}
