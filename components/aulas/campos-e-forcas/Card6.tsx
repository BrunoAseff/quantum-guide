import { Card, CardTitle } from "@/components/ui/card";

export default function Card6() {
  return (
    <Card>
      <CardTitle>Gravidade (Graviton?)</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A gravidade é a força que nos mantém no chão e faz os planetas
          orbitarem o sol. Todos sentimos a gravidade, mas ainda há muito que
          não entendemos sobre ela.
        </p>
        <p>
          Em teorias de física quântica, os cientistas propõem a existência de
          uma partícula chamada gráviton, que seria a responsável por "carregar"
          a força da gravidade, assim como os fótons carregam a força
          eletromagnética.
        </p>

        <p>
          Embora o gráviton ainda não tenha sido detectado, ele é uma peça
          importante em tentativas de unificar todas as forças fundamentais em
          uma única teoria.
        </p>
        <p>
          Por enquanto, a gravidade é um mistério parcialmente resolvido que
          continua a nos intrigar e desafiar nossa compreensão do universo.
        </p>
      </div>
    </Card>
  );
}
