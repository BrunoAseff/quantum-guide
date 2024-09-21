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
import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { useRouter } from "next/navigation";

interface ProgressDialogProps {
  classNumber: number;
  handleMarkAsCompleted: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  isTaskFinished: boolean;
  userData: {
    email: string;
    progress: number;
  } | null;
  nextClassHref: string;
  isLastClass?: boolean;
}

export const MarkAsCompleteBtn: React.FC<ProgressDialogProps> = ({
  classNumber,
  userData,
  buttonRef,
  isTaskFinished,
  handleMarkAsCompleted,
  nextClassHref,
  isLastClass,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const percentageProgress = (classNumber / 6) * 100;
  const router = useRouter();

  const handleDialogOpen = (isOpen: boolean) => {
    if (isLastClass) {
      router.push("/course-finished");
    }

    if (isOpen) {
      setAnimatedProgress(0);
      const timer = setTimeout(
        () => setAnimatedProgress(percentageProgress),
        500
      );

      return () => clearTimeout(timer);
    }
  };

  return (
    <Dialog onOpenChange={handleDialogOpen}>
      <DialogTrigger className="z-50">
        <div className="flex justify-center mt-4">
          {userData && userData.progress >= classNumber - 1 && (
            <Button
              disabled={isTaskFinished}
              onClick={handleMarkAsCompleted}
              ref={buttonRef}
              className="bg-black mb-10  disabled:bg-zinc-800 text-white px-4 py-2 rounded opacity-0"
            >
              {isTaskFinished ? "Tarefa concluída" : "Marcar como concluído"}
            </Button>
          )}
        </div>{" "}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Progresso atualizado!</DialogTitle>
        </DialogHeader>
        <div className="my-4">
          <h1 className="mb-1 text-lg font-semibold">{classNumber} de 6</h1>
          <ProgressAnimation value={animatedProgress} className="w-full" />
        </div>
        <div className="flex justify-end gap-4">
          <DialogClose>
            <Button className="btn-primary">Continuar aqui</Button>
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
