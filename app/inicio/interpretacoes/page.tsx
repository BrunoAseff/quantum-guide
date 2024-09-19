"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useCallback, useState, useEffect, useRef } from "react";
import Card1 from "@/components/aulas/interpretacoes/Card1";
import Card2 from "@/components/aulas/interpretacoes/Card2";
import Card3 from "@/components/aulas/interpretacoes/Card3";
import { Button } from "@/components/ui/button";
import anime from "animejs";
import { getUser, updateProgress } from "@/app/actions";
import { MarkAsCompleteBtn } from "@/components/MarkAsCompleteBtn";

export default function Interpretacoes() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;
  const buttonRef = useRef(null);
  const classNumber = 3;
  const nextClassHref = "/inicio/particulas";
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
        <div className="w-full flex items-center justify-center">
          {currentIndex === totalSlides - 1 && (
            <MarkAsCompleteBtn
              nextClassHref={nextClassHref}
              classNumber={classNumber}
              isTaskFinished={isTaskFinished}
              handleMarkAsCompleted={handleMarkAsCompleted}
              buttonRef={buttonRef}
              userData={userData}
            />
          )}
        </div>
      )}
    </div>
  );
}
