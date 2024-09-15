"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Tunelling() {
  const circleRef = useRef(null);

  useEffect(() => {
    anime({
      targets: circleRef.current,
      translateX: [
        { value: 100, duration: 1000 },
        { value: 0, duration: 1000 },
      ],
      easing: "spring(1, 80, 10, 0)",
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="relative w-px h-24 bg-white">
        <div
          ref={circleRef}
          className="relative w-5 h-5 bg-white rounded-full"
          style={{
            transform: "translate(-57px, 35px)",
            filter: "drop-shadow(0px 0px 13px rgba(255, 255, 255, 0.3))",
          }}
        ></div>
      </div>
    </div>
  );
}
