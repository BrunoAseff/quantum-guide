"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import anime from "animejs";
import { getUser, updateProgress } from "@/app/actions";
import { MarkAsCompleteBtn } from "@/components/MarkAsCompleteBtn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Card1 from "@/components/aulas/particulas/Card1";
import Card2 from "@/components/aulas/particulas/Card2";
import Card3 from "@/components/aulas/particulas/Card3";
import Card4 from "@/components/aulas/particulas/Card4";
import Card5 from "@/components/aulas/particulas/Card5";
import Card6 from "@/components/aulas/particulas/Card6";
import Card7 from "@/components/aulas/particulas/Card7";
import Card8 from "@/components/aulas/particulas/Card8";
import AutoHeight from "embla-carousel-auto-height";

export default function Particulas() {
  const [api, setApi] = useState<CarouselApi>();
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
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser();
        if (data && data.progress >= classNumber) {
          setTaskFinished(true);
        }
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

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

  return (
    <div className="overflow-hidden text-black max-w-[55%] m-auto rounded-lg p-6 pb-1 bg-white">
      <Carousel
        plugins={[AutoHeight()]}
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full relative"
        setApi={setApi}
      >
        <CarouselContent className="w-full">
          <CarouselItem className="w-full h-auto pt-0">
            <Card1 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card2 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card3 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card4 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card5 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card6 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card7 />
          </CarouselItem>
          <CarouselItem className="w-full h-auto pt-0">
            <Card8 />
          </CarouselItem>
        </CarouselContent>

        <div className="flex gap-6 z-50 mb-10 w-full items-center justify-center mt-4">
          <button
            className="rounded-full"
            onClick={() => api?.scrollPrev()}
            disabled={currentIndex === 0}
          >
            <ArrowCircleLeft
              size={32}
              weight="fill"
              className={currentIndex === 0 ? "opacity-20" : ""}
            />
          </button>

          <button
            className="rounded-full"
            onClick={() => api?.scrollNext()}
            disabled={currentIndex === totalSlides - 1}
          >
            <ArrowCircleRight
              size={32}
              weight="fill"
              className={currentIndex === totalSlides - 1 ? "opacity-20" : ""}
            />
          </button>
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
      </Carousel>
    </div>
  );
}
