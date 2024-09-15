"use client";
import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

import { Card, CardTitle } from "@/components/ui/card";

function CardAnimation() {
  const electron1Ref = useRef(null);
  const electron2Ref = useRef(null);
  const electron3Ref = useRef(null);

  useEffect(() => {
    // Electron 1 animation
    anime({
      targets: electron1Ref.current,
      keyframes: [
        { left: "50%", top: "60%", scale: 1, opacity: 1 },
        { left: "85%", top: "58%" },
        { left: "90%", top: "55%" },
        { left: "95%", top: "50%", scale: 0.9, opacity: 1 },
        { left: "90%", top: "45%" },
        { left: "85%", top: "42%" },
        { left: "50%", top: "40%", scale: 0.8, opacity: 1 },
        { left: "10%", top: "42%" },
        { left: "5%", top: "45%" },
        { left: "0%", top: "50%", scale: 0.9, opacity: 1 },
        { left: "5%", top: "55%" },
        { left: "10%", top: "58%" },
      ],
      easing: "linear",
      duration: 1500,
      loop: true,
    });

    // Electron 2 animation
    anime({
      targets: electron2Ref.current,
      keyframes: [
        { left: "15.5%", top: "83.5%", scale: 0.9 },
        { left: "14%", top: "80%" },
        { left: "18%", top: "60%" },
        { left: "35%", top: "35%", scale: 0.8, opacity: 1 },
        { left: "60%", top: "18%" },
        { left: "80%", top: "14%" },
        { left: "83.5%", top: "15.5%", scale: 0.9, opacity: 1 },
        { left: "84%", top: "21%" },
        { left: "82%", top: "38%" },
        { left: "65%", top: "65%", scale: 1 },
        { left: "38%", top: "82%" },
        { left: "21%", top: "84%" },
      ],
      easing: "linear",
      duration: 1500,
      loop: true,
    });

    // Electron 3 animation
    anime({
      targets: electron3Ref.current,
      keyframes: [
        { left: "15.5%", top: "15.5%", scale: 0.9 },
        { left: "18%", top: "19%" },
        { left: "25%", top: "37%" },
        { left: "47%", top: "58%", scale: 0.8 },
        { left: "63%", top: "69%" },
        { left: "79%", top: "80%" },
        { left: "83.5%", top: "83.5%", scale: 0.9, opacity: 1 },
        { left: "80%", top: "79%" },
        { left: "69%", top: "63%" },
        { left: "58%", top: "47%", scale: 1, opacity: 1 },
        { left: "37%", top: "25%" },
        { left: "19%", top: "18%" },
      ],
      easing: "linear",
      duration: 1500,
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center  h-auto m-0 p-0 box-border drop-shadow-[0px_0px_13px_rgba(255,255,255,0.1)]">
      <div className="relative w-[130px] h-[130px] cursor-pointer">
        <div className="absolute w-[50px] h-[50px] left-1/2 top-1/2 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
        <div
          ref={electron1Ref}
          className="absolute w-2 h-2 rounded-full bg-black"
          style={{ left: "50%", top: "60%" }}
        ></div>
        <div
          ref={electron2Ref}
          className="absolute w-2 h-2 rounded-full bg-black"
          style={{ left: "15.5%", top: "83.5%" }}
        ></div>
        <div
          ref={electron3Ref}
          className="absolute w-2 h-2 rounded-full bg-black"
          style={{ left: "15.5%", top: "15.5%" }}
        ></div>
      </div>
    </div>
  );
}

export default function Card1() {
  return (
    <Card>
      <CardTitle>Introdução</CardTitle>
      <CardAnimation />
      <p>
        Quando mergulhamos no mundo das partículas subatômicas, descobrimos que
        elas se comportam de maneiras muito diferentes da física convencional.
      </p>
      <p>
        Tão diferente que foi necessário criar um ramo da física só pra estudar
        essa escala: <br></br> <br></br>
        <strong style={{ position: "relative", left: "40%" }}>
          A física Quântica!
        </strong>
      </p>
      <p>
        {" "}
        Então, resumindo, a Física quântica é o estudo do comportamento das
        menores partículas do universo, como átomos e fótons.
      </p>{" "}
    </Card>
  );
}
