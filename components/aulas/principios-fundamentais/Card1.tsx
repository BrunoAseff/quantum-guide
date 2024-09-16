// @ts-nocheck

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import anime from "animejs";

const generateSineWavePath = (width, height, frequency, amplitude, phase) => {
  const points = [];
  for (let x = 0; x <= width; x += 1) {
    const y =
      height / 2 +
      amplitude * Math.sin((2 * Math.PI * frequency * x) / width + phase);
    points.push(`${x},${y}`);
  }
  return `M${points.join(" L")}`;
};

function SinWaveAnimation() {
  const width = 600;
  const height = 200;
  const frequency = 60;
  const amplitude = 70;
  const phase = 0;

  useEffect(() => {
    anime({
      targets: "#sine-wave path",
      translateX: ["0%", "-90%"],
      easing: "linear",
      duration: 15000,
      loop: true,
    });
  }, [width]);

  const pathData = generateSineWavePath(
    width * 4,
    height,
    frequency,
    amplitude,
    phase
  );

  return (
    <div className="w-full h-[100px] relative overflow-hidden">
      <svg
        viewBox={`0 0 ${width * 2} ${height}`}
        preserveAspectRatio="none"
        className="absolute w-[200%] h-full"
        id="sine-wave"
      >
        <path d={pathData} stroke="black" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
}

const colors = ["black", "black", "black", "black", "black"];

function ParticleAnimation() {
  const circleRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle) => {
      anime({
        targets: circle,
        translateX: [
          {
            value: 1000 + Math.random() * 50,
            duration: 1000 + Math.random() * 500,
          },
          { value: 0, duration: 1000 + Math.random() * 500 },
        ],
        translateY: [
          { value: Math.random() * 20, duration: 500 + Math.random() * 500 },
          { value: -Math.random() * 20, duration: 500 + Math.random() * 500 },
        ],
        easing: function (el, i, total) {
          return function (t) {
            return Math.pow(Math.sin(t * (i + 2)), total);
          };
        },
        loop: true,
      });
    });
  }, []);

  return (
    <div className="flex justify-start items-center h-[10vh] relative">
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => (circleRefs.current[index] = el)}
          className="absolute w-5 h-5 rounded-full"
          style={{
            backgroundColor: color,
            top: `${20 + index * 20}%`,
            left: "-80px",
          }}
        />
      ))}
    </div>
  );
}

export default function Card1() {
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);

  const toggleAnimation = () => {
    setIsFirstAnimation(!isFirstAnimation);
  };

  return (
    <Card>
      <CardTitle>Dualidade onda-partícula</CardTitle>

      <div className="grid grid-cols-2 gap-4 text-gray-700 leading-relaxed">
        <section>
          <p>Luz é onda ou partícula? A resposta é: ambos!</p>
          <p>
            A luz pode se comportar como uma onda, se espalhando e interferindo
            consigo mesma, como quando você joga duas pedras em um lago e vê as
            ondas se encontrando.
          </p>
          <p>
            Mas, em outras situações, a luz se comporta como partículas chamadas
            fótons, pequenas bolinhas de energia que colidem e interagem com a
            matéria.
          </p>
        </section>
        <section>
          <p>
            É como se a luz tivesse uma identidade dupla, dependendo de como a
            observamos.
          </p>
          {isFirstAnimation ? <SinWaveAnimation /> : <ParticleAnimation />}
          <Button
            className="bg-black mb-10 mt-6 ml-auto mr-auto text-white px-4 py-2 rounded"
            onClick={toggleAnimation}
          >
            Mudar comportamento da luz
          </Button>
        </section>
      </div>
    </Card>
  );
}
