import { Card, CardTitle } from "@/components/ui/card";

export default function Card1() {
  return (
    <Card>
      <CardTitle>Átomo</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O átomo é a menor unidade da matéria que mantém as propriedades de um
          elemento químico.
        </p>
        <p>
          Pense no átomo como um minúsculo sistema solar. No centro, temos o
          núcleo, que é como o sol, composto de prótons e nêutrons.
        </p>

        <p>
          Ao redor do núcleo, giram os elétrons, como planetas em órbita. Mas,
          diferente dos planetas, os elétrons não seguem trajetórias fixas; eles
          ocupam regiões chamadas orbitais, onde é mais provável encontrá-los.
        </p>
        <p>
          O curioso é que, mesmo que o átomo pareça sólido, ele é formado em sua
          maior parte por espaço vazio.
        </p>
      </div>
    </Card>
  );
}
