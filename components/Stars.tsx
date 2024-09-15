// @ts-nocheck

"use client";

import React, { useEffect, useRef } from "react";

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const maxStars = 4500;
  const stars: Star[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvas2 = document.createElement("canvas");
    const ctx2 = canvas2.getContext("2d");
    if (!ctx2) return;

    canvas2.width = 100;
    canvas2.height = 100;
    const half = canvas2.width / 2;
    const gradient2 = ctx2.createRadialGradient(
      half,
      half,
      0,
      half,
      half,
      half
    );
    gradient2.addColorStop(0.025, "#fff");
    gradient2.addColorStop(0.1, `hsl(250, 61%, 3%)`);
    gradient2.addColorStop(0.25, `hsl(250, 64%, 0%)`);
    gradient2.addColorStop(1, "transparent");

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min: number, max?: number): number {
      if (max === undefined) {
        max = min;
        min = 0;
      }

      if (min > max) {
        [min, max] = [max, min]; // Swap min and max
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function maxOrbit(x: number, y: number): number {
      const max = Math.max(x, y);
      const diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
    }

    class Star {
      orbitRadius: number;
      radius: number;
      orbitX: number;
      orbitY: number;
      timePassed: number;
      speed: number;
      alpha: number;

      constructor() {
        this.orbitRadius = random(
          maxOrbit(window.innerWidth, window.innerHeight)
        );
        this.radius = random(60, this.orbitRadius) / 12;
        this.orbitX = window.innerWidth / 2;
        this.orbitY = window.innerHeight / 2;
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 800000;
        this.alpha = random(2, 10) / 10;
      }

      draw() {
        const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
        const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
        const twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius
        );
        this.timePassed += this.speed;
      }
    }

    function createStars() {
      stars.length = 0;
      for (let i = 0; i < maxStars; i++) {
        stars.push(new Star());
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    resizeCanvas();

    function animation() {
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      ctx.fillStyle = `hsla(250, 30%, 3%, 10)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";
      stars.forEach((star) => star.draw());

      requestAnimationFrame(animation);
    }

    animation();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-screen h-screen p-0 m-0 fixed top-0 left-0 z-[-1] overflow-hidden"
    />
  );
};

export default Stars;
