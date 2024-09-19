"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { ProgressAnimation } from "./ui/progressAnimation";
import { ArrowRight } from "phosphor-react";
import Link from "next/link";

interface ProgressDialogProps {
  progress: number;
}

export const ProgressDialog: React.FC<ProgressDialogProps> = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const handleDialogOpen = (isOpen: boolean) => {
    if (isOpen) {
      setAnimatedProgress(0);
      const timer = setTimeout(() => setAnimatedProgress(progress), 500);
      return () => clearTimeout(timer);
    }
  };

  return (
    <Dialog onOpenChange={handleDialogOpen}>
      <DialogTrigger className="z-50">
        <Button className="bg-white text-black">Trigger</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Progresso atualizado!</DialogTitle>
        </DialogHeader>
        <div className="my-4">
          <h1 className="mb-1 text-lg font-semibold">{progress} de 6</h1>
          <ProgressAnimation value={animatedProgress} className="w-full" />
        </div>
        <div className="flex justify-end gap-4">
          <DialogClose>
            <Button className="btn-primary"> Continuar aqui</Button>
          </DialogClose>{" "}
          <Button className="btn-primary">
            <Link className="flex items-center gap-2" href={nextClassHref}>
              <p> Ir para próxima aula</p>
              <ArrowRight size={20} color="white" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
