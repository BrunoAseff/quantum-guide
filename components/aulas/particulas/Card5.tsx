import { Card, CardTitle } from "@/components/ui/card";

export default function Card5() {
  return (
    <Card>
      <CardTitle>Elétron</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O elétron é uma partícula subatômica que orbita o núcleo do átomo.
        </p>
        <p>
          Os elétrons têm carga negativa e são muito menores que os prótons e
          nêutrons no núcleo. Eles se movem rapidamente em torno do núcleo,
          ocupando regiões chamadas orbitais.
        </p>

        <p>
          A quantidade e a disposição dos elétrons determinam as propriedades
          químicas de um átomo e como ele interage com outros átomos.
        </p>
        <p>
          Pense nos elétrons como as abelhas em torno de uma colmeia, zumbindo
          em torno do núcleo e definindo o comportamento químico do átomo.
        </p>
      </div>
    </Card>
  );
}
