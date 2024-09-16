import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Dupla fenda</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Um exemplo prático para demonstrar esse fenômeno é o experimento da
          dupla fenda.
        </p>
        <p>
          Imagine lançar pequenas{" "}
          <strong style={{ color: "#9353d3" }}> bolinhas de tinta</strong>{" "}
          contra uma parede com duas aberturas. Você esperaria ver duas faixas
          de tinta na parede atrás das fendas, certo?
        </p>

        <p>
          Mas, se usarmos partículas subatômicas a história muda: Se não os
          observarmos as partículas, eles formam um padrão de interferência,
          como se fossem ondas se sobrepondo. Isso sugere que eles se comportam
          como ondas e não como partículas.
        </p>

        <p>
          Mas aqui está a parte mais intrigante: Se tentarmos observar por qual
          fenda cada partícula passa, o padrão de interferência desaparece!
        </p>
        <p>
          Elas começam a agir como partículas novamente, criando duas faixas
          distintas, como bolas de tinta.
        </p>
        <p>
          Ou seja, a natureza das partículas pode mudar dependendo de como as
          observamos.
        </p>
        <Image
          src="/duplafenda.png"
          width={750}
          height={100}
          alt="Picture of the author"
        />
      </div>
    </Card>
  );
}
