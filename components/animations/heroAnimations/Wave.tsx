"use client";

import React, { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Wave() {
  const pathRef = useRef(null);

  useEffect(() => {
    const animateSineWave = () => {
      anime({
        targets: pathRef.current,
        easing: "easeOutElastic(1, .6)",
        direction: "alternate",
        duration: 2000,
        loop: true,
        keyframes: [
          { d: "M 0 50 Q 25 0 50 50 T 100 50 T 150 50 T 200 50" },
          { d: "M 0 50 Q 25 100 50 50 T 100 50 T 150 50 T 200 50" },
        ],
      });
    };

    animateSineWave();
  }, []);

  return (
    <svg width="200" height="100">
      <path
        ref={pathRef}
        fill="none"
        stroke="white"
        strokeWidth="2"
        d="M 0 50 Q 25 0 50 50 T 100 50 T 150 50 T 200 50"
      />
    </svg>
  );
}
