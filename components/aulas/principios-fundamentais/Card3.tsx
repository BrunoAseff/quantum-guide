import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

function Mock1() {
  return (
    <div className="fixed max-w-[40vw] z-50 bottom-1/2 left-0">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">量子物理学とは何ですか?</h1>
          <div>
            <p>
              ファインダーで事が違う物理学的な尺度では、物理学的な通常とは非常に異なる方法で事が進みます。それほど異なるので、この尺度を研究するために物理学の分野を作る必要がありました：量子物理学です！したがって、量子物理学は、原子や光子などの宇宙の最も小さな粒子の振る舞いの研究です。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mock2() {
  return (
    <div className="fixed max-w-[100vw] z-50 left-[9%] top-[41%] bottom-0">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Receita de Bolo Quântico</h1>
          <div>
            <p>Ingredientes:</p>
            <ul className="list-disc ml-6">
              <li>2 xícaras de neutrinos</li>
              <li>1 pitada de incerteza</li>
              <li>3 colheres de sopa de bóson de higgs</li>
              <li>4 ovos de probabilidades</li>
              <li>5 xícaras de matéria escura</li>
              <li>6 colheres de chá de interação quântica</li>
              <li>7 gotas de intuição</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mock3() {
  return (
    <div className="fixed z-50 max-w-[33vw] left-[8.5%] bottom-[28%]">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">
            Curiosidades Sobre o Espaço
          </h1>
          <div>
            <ol className="list-decimal ml-6">
              <li>
                A Lua está se afastando da Terra a uma taxa de aproximadamente
                3,8 centímetros por ano.
              </li>
              <li>
                Um dia em Vênus é mais longo que um ano em Vênus, devido à sua
                lenta rotação.
              </li>
              <li>
                Existem mais estrelas no universo observável do que grãos de
                areia em todas as praias da Terra.
              </li>
              <li>
                O maior vulcão do sistema solar está em Marte e se chama Olympus
                Mons.
              </li>
              <li>
                Em 2022, a NASA conseguiu desviar o curso de um asteroide pela
                primeira vez em um teste de defesa planetária.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mock4() {
  return (
    <div className="fixed z-50 max-w-[40vw] top-[35%] left-0">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Como tudo terminou</h1>
          <div>
            <p>
              O fim da humanidade ocorreu ao longo do século XXI devido a uma
              combinação de mudanças climáticas extremas, escassez de recursos e
              falhas tecnológicas.
            </p>
            <p>
              Ondas de calor, secas e tempestades devastaram a agricultura,
              enquanto conflitos armados e crises migratórias desestabilizaram
              sociedades.
            </p>
            <p>
              A inteligência artificial fora de controle causou falhas
              sistêmicas na sociedade. No final do século, a civilização
              colapsou, deixando pequenas comunidades isoladas lutando para
              sobreviver em um planeta inóspito, até que a extinção humana se
              tornou inevitável e a Terra começou a se recuperar sem nós.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Card3() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleStopClick = () => {
    setIsVisible(true);
  };

  const handleBackClick = () => {
    setIsVisible(false);
    setCardVisibility([false, false, false, false]);
  };

  useEffect(() => {
    if (isVisible) {
      const timers = cardVisibility.map((_, index) =>
        setTimeout(() => {
          setCardVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, index * 100)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isVisible]);

  return (
    <Card>
      <CardTitle>Superposição</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Esse efeito que a observação causa no experimento da dupla fenda é
          explicado por um fenômeno chamado superposição.
        </p>
        <p>
          Superposição significa que uma partícula pode existir em múltiplos
          estados ao mesmo tempo.
        </p>
        <p>
          No experimento da dupla fenda, antes de observarmos, os elétrons ou
          fótons estão em um estado de superposição.
        </p>
        <p>Eles passam pelas duas fendas simultaneamente, como ondas.</p>
        <p>
          Mas quando observamos, a superposição colapsa. A partícula é forçada a
          escolher um caminho, comportando-se como uma bolinha de tinta.
        </p>
        <p>
          É como se a realidade só decidisse o que fazer quando estamos olhando.
        </p>
        <p>
          Quer ver como a realidade fica quando não observamos? Clique aqui
          embaixo:
          <div
            className={`absolute w-screen h-screen z-50 ${isVisible ? "" : "hidden"}`}
          >
            <div
              className={`transition-opacity duration-300 ${cardVisibility[0] ? "opacity-100" : "opacity-0"}`}
            >
              <Mock1 />
            </div>
            <div
              className={`transition-opacity duration-300 ${cardVisibility[1] ? "opacity-100" : "opacity-0"}`}
            >
              <Mock2 />
            </div>
            <div
              className={`transition-opacity duration-300 ${cardVisibility[2] ? "opacity-100" : "opacity-0"}`}
            >
              <Mock3 />
            </div>
            <div
              className={`transition-opacity duration-300 ${cardVisibility[3] ? "opacity-100" : "opacity-0"}`}
            >
              <Mock4 />
            </div>

            <div className="flex justify-center items-center">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <h1
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#F31260" }}
                >
                  Erro
                </h1>
                <p>Ops…Acho que você quebrou o site.</p>
                <p>
                  Agora o Guia Quântico está em superposição, ou seja, em todos
                  seus possíveis estados ao mesmo tempo.
                </p>
                <Button
                  className="mx-5 mt-4 bg-white text-black text-sm font-light px-6 py-3 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
                  onClick={handleBackClick}
                >
                  Voltar a observar
                </Button>
              </div>
            </div>
          </div>
        </p>
        <Button
          className="bg-black mb-10 mt-6 ml-auto mr-auto text-white px-4 py-2 rounded"
          onClick={handleStopClick}
        >
          Parar de observar
        </Button>
      </div>
    </Card>
  );
}
