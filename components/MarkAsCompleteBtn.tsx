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
import { useState, useEffect } from "react";
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
  const [localProgress, setLocalProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const percentageProgress = (classNumber / 6) * 100;
  const router = useRouter();

  useEffect(() => {
    // Initialize local progress from localStorage
    const storedProgress = localStorage.getItem("quantumProgress");
    setLocalProgress(storedProgress ? parseInt(storedProgress) : 0);

    // Show the button after a small delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLocalProgress = () => {
    const currentProgress = localStorage.getItem("quantumProgress");
    const newProgress = Math.max(
      classNumber,
      currentProgress ? parseInt(currentProgress) : 0
    );
    localStorage.setItem("quantumProgress", newProgress.toString());
    setLocalProgress(newProgress);
  };

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

  const isButtonDisabled = userData
    ? isTaskFinished
    : localProgress >= classNumber;

  const handleClick = () => {
    if (userData) {
      handleMarkAsCompleted();
    } else {
      handleLocalProgress();
    }
  };

  const canShowButton = userData
    ? userData.progress >= classNumber - 1
    : localProgress >= classNumber - 1 || classNumber === 1;

  return (
    <Dialog onOpenChange={handleDialogOpen}>
      <DialogTrigger className="z-50">
        <div className="flex justify-center mt-4">
          {canShowButton && (
            <Button
              disabled={isButtonDisabled}
              onClick={handleClick}
              ref={buttonRef}
              className={`bg-black mb-10 disabled:bg-zinc-800 text-white px-4 py-2 rounded transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {isButtonDisabled ? "Tarefa concluída" : "Marcar como concluído"}
            </Button>
          )}
        </div>
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
          </DialogClose>
          <Button className="btn-primary">
            <Link className="flex items-center gap-2" href={nextClassHref}>
              <p>Ir para próxima aula</p>
              <ArrowRight size={20} color="white" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
