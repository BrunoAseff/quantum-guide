"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import anime from "animejs";
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

export default function PrincipiosClient({ email }: { email: string | null }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const buttonRef = useRef(null);

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
    <MockCardsProvider>
      <div>
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
            <div className="min-w-0 flex-[0_0_100%]">
              <Card8 />
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
              <Button
                ref={buttonRef}
                className="bg-black mb-10 text-white px-4 py-2 rounded opacity-0"
              >
                Marcar como concluído
              </Button>
            </div>
          )}
        </div>
        <MockCards user={email} />
      </div>
    </MockCardsProvider>
  );
}
