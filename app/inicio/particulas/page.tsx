"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useCallback, useState, useEffect, useRef } from "react";
import Card1 from "@/components/aulas/particulas/Card1";
import Card2 from "@/components/aulas/particulas/Card2";
import Card3 from "@/components/aulas/particulas/Card3";
import Card4 from "@/components/aulas/particulas/Card4";
import Card5 from "@/components/aulas/particulas/Card5";
import Card6 from "@/components/aulas/particulas/Card6";
import Card7 from "@/components/aulas/particulas/Card7";
import Card8 from "@/components/aulas/particulas/Card8";
import anime from "animejs";
import { getUser, updateProgress } from "@/app/actions";
import { MarkAsCompleteBtn } from "@/components/MarkAsCompleteBtn";

export default function Particulas() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 8;
  const buttonRef = useRef(null);
  const classNumber = 4;
  const nextClassHref = "/inicio/campos-e-forcas";
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
      className="overflow-hidden text-black max-w-[55%] m-auto rounded-lg p-6 pb-1 bg-white"
      ref={emblaRef}
    >
      <div className="flex ">
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
        <div className="min-w-0 flex-[0_0_100%]">
          <Card8 />
        </div>
      </div>

      <div className="flex gap-6 z-50 mb-10 w-full items-center justify-center mt-auto">
        {/* Previous Slide Button */}
        <button className="rounded-full" onClick={scrollPrev}>
          <ArrowCircleLeft size={32} weight="fill" />
        </button>

        {/* Next Slide Button */}
        {currentIndex === totalSlides - 1 ? (
          <button className="rounded-full opacity-20" disabled>
            <ArrowCircleRight size={32} weight="fill" />
          </button>
        ) : (
          <button className="rounded-full" onClick={scrollNext}>
            <ArrowCircleRight size={32} weight="fill" />
          </button>
        )}
      </div>
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
    </div>
  );
}
