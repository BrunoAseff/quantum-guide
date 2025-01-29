"use client";

import { useEffect, useRef, useState } from "react";
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
import Card1 from "@/components/aulas/campos-e-forcas/Card1";
import Card2 from "@/components/aulas/campos-e-forcas/Card2";
import Card3 from "@/components/aulas/campos-e-forcas/Card3";
import Card4 from "@/components/aulas/campos-e-forcas/Card4";
import Card5 from "@/components/aulas/campos-e-forcas/Card5";
import Card6 from "@/components/aulas/campos-e-forcas/Card6";
import Card7 from "@/components/aulas/campos-e-forcas/Card7";
import autoHeight from "embla-carousel-auto-height";
import AutoHeight from "embla-carousel-auto-height";

export default function CamposForcas() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7;
  const buttonRef = useRef(null);
  const classNumber = 5;
  const nextClassHref = "/inicio/topicos-avancados";
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
        // Continue without user data
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
    <div className="overflow-hidden text-black max-w-[50%] m-auto rounded-lg p-6 pb-1 bg-white">
      <Carousel
        plugins={[AutoHeight()]}
        opts={{
          align: "start",
          loop: false,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <Card1 />
          </CarouselItem>
          <CarouselItem>
            <Card2 />
          </CarouselItem>
          <CarouselItem>
            <Card3 />
          </CarouselItem>
          <CarouselItem>
            <Card4 />
          </CarouselItem>
          <CarouselItem>
            <Card5 />
          </CarouselItem>
          <CarouselItem>
            <Card6 />
          </CarouselItem>
          <CarouselItem>
            <Card7 />
          </CarouselItem>
        </CarouselContent>

        <div className="flex gap-6 mb-10 w-full items-center justify-center mt-auto">
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

        {currentIndex === totalSlides - 1 && (
          <div className="w-full flex items-center justify-center">
            <MarkAsCompleteBtn
              nextClassHref={nextClassHref}
              classNumber={classNumber}
              isTaskFinished={isTaskFinished}
              handleMarkAsCompleted={handleMarkAsCompleted}
              buttonRef={buttonRef}
              userData={userData}
            />
          </div>
        )}
      </Carousel>
    </div>
  );
}
