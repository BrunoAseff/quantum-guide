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
          Assim como os elétrons, os múons e taus têm carga negativa. Porém, não
          fazem parte dos átomos comuns, pois são instáveis e se desintegram
          rapidamente em outras partículas.
        </p>
        <p>
          Pense no múon e no tau como primos pesados do elétron, existindo
          apenas por um breve momento antes de se transformarem em algo mais
          leve.
        </p>
      </div>
    </Card>
  );
}
