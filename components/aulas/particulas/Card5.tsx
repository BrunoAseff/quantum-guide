import { Card, CardTitle } from "@/components/ui/card";

export default function Card5() {
  return (
    <Card>
      <CardTitle>Elétron</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Não, elétrons não orbitam os átomos como planetas ao redor do Sol...
          Eu sei que foi assim que você aprendeu, mas a realidade é mais
          complexa.{" "}
        </p>
        <p>
          Elétrons apenas "existem" em regiões ao redor do núcleo chamadas de
          orbitais. Nesses orbitais, não podemos saber exatamente onde um
          elétron está em um dado momento; em vez disso, temos uma ideia das
          regiões onde ele tem mais chances de ser encontrado.{" "}
        </p>

        <p>
          Resumidamente, eles são pequenas partículas que "pulam" de um lado
          para outro, sem nunca passar pelo espaço entre eles.
        </p>
        <p>
          A quantidade e a disposição dos elétrons determinam as propriedades
          químicas de um átomo e como ele interage com outros átomos.
        </p>
      </div>
    </Card>
  );
}
