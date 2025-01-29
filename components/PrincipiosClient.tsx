"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import anime from "animejs";
import { getUser, updateProgress } from "@/app/actions";
import { MarkAsCompleteBtn } from "./MarkAsCompleteBtn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Card1 from "@/components/aulas/principios-fundamentais/Card1";
import Card2 from "@/components/aulas/principios-fundamentais/Card2";
import Card3 from "@/components/aulas/principios-fundamentais/Card3";
import Card4 from "@/components/aulas/principios-fundamentais/Card4";
import Card5 from "@/components/aulas/principios-fundamentais/Card5";
import Card6 from "@/components/aulas/principios-fundamentais/Card6";
import Card7 from "@/components/aulas/principios-fundamentais/Card7";
import Card8 from "@/components/aulas/principios-fundamentais/Card8";
import { MockCards } from "@/components/aulas/principios-fundamentais/Card3";
import { MockCardsProvider } from "@/components/aulas/principios-fundamentais/Card3";
import AutoHeight from "embla-carousel-auto-height";

export default function PrincipiosClient({ user }: { user: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTaskFinished, setTaskFinished] = useState(false);
  const totalSlides = 8;
  const buttonRef = useRef(null);
  const classNumber = 2;
  const nextClassHref = "/inicio/interpretacoes";
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
    <MockCardsProvider>
      <div>
        <div className="overflow-hidden text-black max-w-[50%] m-auto rounded-lg p-6 pb-1 bg-white">
          <Carousel
            plugins={[AutoHeight()]}
            opts={{
              align: "start",
              loop: false,
            }}
            setApi={setApi}
          >
            <CarouselContent className="transition-[height] duration-500 ease-in-out items-start">
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
              <CarouselItem>
                <Card8 />
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
                  className={
                    currentIndex === totalSlides - 1 ? "opacity-20" : ""
                  }
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
        <MockCards user={user} />
      </div>
    </MockCardsProvider>
  );
}
