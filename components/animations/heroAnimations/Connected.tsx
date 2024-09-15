"use client";

import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Connected() {
  const square1Ref = useRef(null);
  const square2Ref = useRef(null);

  useEffect(() => {
    anime({
      targets: square1Ref.current,
      translateY: [
        { value: -40, duration: 1000 },
        { value: 40, duration: 1000 },
      ],
      borderRadius: ["0%", "50%"],
      backgroundColor: "#71717A",
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });

    anime({
      targets: square2Ref.current,
      translateY: [
        { value: 40, duration: 1000 },
        { value: -40, duration: 1000 },
      ],
      borderRadius: ["0%", "50%"],
      backgroundColor: "#71717A",
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        ref={square1Ref}
        className="m-8 relative w-5 h-5 bg-white shadow-[0_0_13px_rgba(255,255,255,0.1)]"
        style={{ top: "-5%" }}
      ></div>
      <div
        ref={square2Ref}
        className="m-8 relative w-5 h-5 bg-white shadow-[0_0_13px_rgba(255,255,255,0.1)]"
        style={{ top: "-5%" }}
      ></div>
    </div>
  );
}
