import { Card, CardTitle } from "@/components/ui/card";

export default function Card6() {
  return (
    <Card>
      <CardTitle>Múon e Tau</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O múon e o tau são partículas bem parecidas com o elétron, mas muito
          mais pesadas.
        </p>
        <p>
          O múon é cerca de 200 vezes mais pesado que o elétron, enquanto o tau
          é ainda mais pesado, aproximadamente 3.500 vezes mais que o elétron.
        </p>

        <p>
          Assim como os elétrons, os múons e taus têm carga negativa. Eles
          aparecem brevemente, mas rapidamente se desintegram em outras
          partículas menores, e por isso, não fazem parte da matéria estável que
          conhecemos.
        </p>
      </div>
    </Card>
  );
}
