import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { createContext, useContext, useEffect, useState } from "react";

const MockCardsContext = createContext({
  isVisible: false,
  handleStopClick: () => {},
  handleBackClick: () => {},
});

export function MockCardsProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleStopClick = () => {
    setIsVisible(true);
  };

  const handleBackClick = () => {
    setIsVisible(false);
  };

  return (
    <MockCardsContext.Provider
      value={{ isVisible, handleStopClick, handleBackClick }}
    >
      {children}
    </MockCardsContext.Provider>
  );
}

export function useMockCards() {
  return useContext(MockCardsContext);
}
function Mock1() {
  return (
    <div>
      <div className="bg-white min-h-[300px] max-w-[600px] shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">量子物理学とは何ですか?</h1>
        <div>
          <p>
            ファインダーで事が違う物理学的な尺度では、物理学的な通常とは非常に異なる方法で事が進みます。それほど異なるので、この尺度を研究するために物理学の分野を作る必要がありました：量子物理学です！したがって、量子物理学は、原子や光子などの宇宙の最も小さな粒子の振る舞いの研究です。
          </p>
        </div>
      </div>
    </div>
  );
}

function Mock2() {
  return (
    <div className="max-w-[600px]">
      <div className="bg-white shadow-lg rounded-lg p-8">
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
  );
}

function Mock3() {
  return (
    <div className=" max-w-[600px]">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Curiosidades Sobre o Espaço</h1>
        <div>
          <ol className="list-decimal ml-6">
            <li>
              A Lua está se afastando da Terra a uma taxa de aproximadamente 3,8
              centímetros por ano.
            </li>
            <li>
              Um dia em Vênus é mais longo que um ano em Vênus, devido à sua
              lenta rotação.
            </li>
            <li>
              Existem mais estrelas no universo observável do que grãos de areia
              em todas as praias da Terra.
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
  );
}

function Mock4() {
  return (
    <div className="max-w-[600px] ">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">
          Carta de Demissão do Universo
        </h1>
        <div>
          <p>Prezados,</p>
          <br />
          <p>
            Venho por meio desta informar que estou solicitando minha demissão
            do cargo de "realidade oficial" a partir de hoje. Tenho feito o
            possível para manter a gravidade, as leis da termodinâmica e os
            fusos horários em ordem, mas a demanda por universos paralelos tem
            sido maior do que o esperado.
          </p>
          <p>
            Sugiro que vocês considerem viver no Universo B, onde todos os
            semáforos são azuis e as pombas dominam a economia. Boa sorte com a
            entropia.
          </p>
          <p>Atenciosamente,</p>
          <p>O Universo</p>
        </div>
      </div>
    </div>
  );
}

function Mock5({ user }: { user: any }) {
  if (!user) return null;

  return (
    <div className="max-w-[600px] ">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Mensagem para {user}</h1>
        <div>
          <p>
            Oi, aqui é você de outra dimensão. Só passando para avisar que aqui
            o curso deu certo, mas o bolo queimou. Boa sorte aí!
          </p>
        </div>
      </div>
    </div>
  );
}

function Mock6() {
  return (
    <div className="max-w-[300px] ">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Curiosidade</h1>
        <div>
          <p>
            Na vastidão do universo, há uma dimensão onde impressoras sempre
            funcionam sem problemas. Infelizmente, essa não é a nossa.
          </p>
        </div>
      </div>
    </div>
  );
}

function Mock7() {
  return (
    <div className="max-w-[600px] ">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">
          Como conversar com plantas invisíveis
        </h1>
        <div className="flex flex-col gap-2">
          <p>
            {" "}
            <strong> Se apresente:</strong> Elas podem não ter nome, mas adoram
            boas apresentações. Seja educado, ou elas podem começar a crescer em
            sentido anti-horário...
          </p>
          <p>
            {" "}
            <strong> Fale sobre o clima:</strong> Plantas invisíveis preferem
            discussões profundas sobre nuvens que nunca existiram. Evite falar
            sobre o vento. Elas consideram rude.
          </p>
          <p>
            <strong> Regue com mistério:</strong> Elas não precisam de água, mas
            de incerteza. Quanto mais você se questionar se elas estão lá, mais
            elas crescem.
          </p>
        </div>
      </div>
    </div>
  );
}

export function MockCards({ user }: { user: any }) {
  const { isVisible, handleBackClick } = useMockCards();
  const [cardVisibility, setCardVisibility] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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

      return () => timers.forEach((timer) => clearTimeout(timer));
    } else {
      setCardVisibility([false, false, false, false, false, false, false]);
    }
  }, [isVisible]);

  return (
    <div className={`relative w-full h-screen ${isVisible ? "" : "hidden"}`}>
      <div
        className={`absolute top-[-15%] left-0 transition-opacity duration-300 ${cardVisibility[0] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock1 />
      </div>
      <div
        className={`absolute top-[-15%] right-[20%] transition-opacity duration-300 ${cardVisibility[1] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock2 />
      </div>
      <div
        className={`absolute top-[-75%] right-0 transition-opacity duration-300 ${cardVisibility[2] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock3 />
      </div>
      <div
        className={`absolute top-[-50%] left-[2%] transition-opacity duration-300 ${cardVisibility[3] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock4 />
      </div>
      <div
        className={`absolute top-[-30%] right-[0%] transition-opacity duration-300 ${cardVisibility[4] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock5 user={user} />
      </div>
      <div
        className={`absolute top-[-5%] right-[0%] transition-opacity duration-300 ${cardVisibility[5] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock6 />
      </div>
      <div
        className={`absolute top-[-80%] left-[0%] transition-opacity duration-300 ${cardVisibility[6] ? "opacity-100" : "opacity-0"}`}
      >
        <Mock7 />
      </div>
      <div
        className={`flex absolute left-[35%] top-[-50%]  w-[500px] justify-center items-center ${cardVisibility[3] ? "opacity-100" : "opacity-0"}`}
      >
        <div className="bg-white border-red-600 border-2 z-50 shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-2xl text-red-500 font-bold mb-4">Erro</h1>
          <p>Ops…Acho que você quebrou o site.</p>
          <p>
            Agora o Guia Quântico está em superposição, ou seja, em todos seus
            possíveis estados ao mesmo tempo.
          </p>
          <Button
            className="bg-red-600 mb-10 mt-6 ml-auto mr-auto text-white px-4 py-2 rounded"
            onClick={handleBackClick}
          >
            Voltar a observar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Card3() {
  const { handleStopClick } = useMockCards();

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
          <br />
          <br />
          <div className="w-full flex">
            <Button
              className="bg-black mb-10  mt-6 ml-auto mr-auto text-white px-4 py-2 rounded"
              onClick={handleStopClick}
            >
              Parar de observar
            </Button>
          </div>
        </p>
      </div>
    </Card>
  );
}
