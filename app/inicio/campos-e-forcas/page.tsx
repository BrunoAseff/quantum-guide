"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useCallback, useState, useEffect, useRef } from "react";
import Card1 from "@/components/aulas/campos-e-forcas/Card1";
import Card2 from "@/components/aulas/campos-e-forcas/Card2";
import Card3 from "@/components/aulas/campos-e-forcas/Card3";
import Card4 from "@/components/aulas/campos-e-forcas/Card4";
import Card5 from "@/components/aulas/campos-e-forcas/Card5";
import Card6 from "@/components/aulas/campos-e-forcas/Card6";
import Card7 from "@/components/aulas/campos-e-forcas/Card7";

import { Button } from "@/components/ui/button";
import anime from "animejs";
import { getUser, updateProgress } from "@/app/actions";

export default function CamposForcas() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7;
  const buttonRef = useRef(null);
  const classNumber = 5;
  const [isTaskFinished, setTaskFinished] = useState(false);
  const [userData, setUserData] = useState<{
    email: string;
    progress: number;
  } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();

      if (data && data.progress >= classNumber) {
        setTaskFinished(true);
      }
      setUserData(data);
    };
    fetchUserData();
  }, []);

  const handleMarkAsCompleted = async () => {
    if (userData && userData.progress < classNumber) {
      const success = await updateProgress(
        userData.email,
        userData.progress,
        classNumber
      );
      if (success) {
        setTaskFinished(true);
      }
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (currentIndex === totalSlides - 1 && buttonRef.current) {
      anime({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: "easeOutExpo",
      });
    }
  }, [currentIndex]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      className="overflow-hidden text-black max-w-[50%] m-auto rounded-lg p-6 pb-1 bg-white"
      ref={emblaRef}
    >
      <div className="flex">
        <div className="min-w-0  flex-[0_0_100%]">
          <Card1 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card2 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card3 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card4 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card5 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card6 />
        </div>
        <div className="min-w-0 flex-[0_0_100%]">
          <Card7 />
        </div>
      </div>

      <div className="flex gap-6 mb-10 w-full items-center justify-center mt-auto">
        <button className="rounded-full" onClick={scrollPrev}>
          <ArrowCircleLeft size={32} weight="fill" />
        </button>
        <button className="rounded-full" onClick={scrollNext}>
          <ArrowCircleRight size={32} weight="fill" />
        </button>
      </div>

      {currentIndex === totalSlides - 1 && (
        <div className="flex justify-center mt-4">
          {userData && userData.progress >= classNumber - 1 && (
            <Button
              disabled={isTaskFinished}
              onClick={handleMarkAsCompleted}
              ref={buttonRef}
              className="bg-black mb-10 disabled:bg-zinc-800 text-white px-4 py-2 rounded opacity-0"
            >
              {isTaskFinished ? "Tarefa concluída" : "Marcar como concluído"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
