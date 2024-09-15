// @ts-nocheck

"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

const colors = ["#52525B", "#E4E4E7", "#A1A1AA", "#F4F4F5"];

export default function Uncertanty() {
  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle) => {
      anime({
        targets: circle,
        translateX: [
          {
            value: 80 + Math.random() * 50,
            duration: 1000 + Math.random() * 500,
          },
          { value: 0, duration: 1000 + Math.random() * 500 },
        ],
        translateY: [
          { value: Math.random() * 20, duration: 500 + Math.random() * 500 },
          { value: -Math.random() * 20, duration: 500 + Math.random() * 500 },
        ],
        easing: "spring(1, 80, 10, 0)",
        loop: true,
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="relative h-24 w-0">
        {colors.map((color, index) => (
          <div
            key={index}
            ref={(el) => (circleRefs.current[index] = el)}
            className="absolute w-5 h-5 rounded-full shadow-[0_0_13px_rgba(255,255,255,0.3)]"
            style={{
              backgroundColor: color,
              top: `${20 + index * 20}%`,
              left: "-80px",
            }}
          />
        ))}
      </div>
    </div>
  );
}
