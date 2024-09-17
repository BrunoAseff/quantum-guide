import { Card, CardTitle } from "@/components/ui/card";

export default function Card5() {
  return (
    <Card>
      <CardTitle>Força nuclear fraca (Bósons W e Z)</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Essa força é mediada por partículas chamadas bósons W e Z. Imagine
          esses bósons como mensageiros que podem mudar a identidade das
          partículas, transformando prótons em nêutrons e vice-versa.
        </p>
        <p>
          Embora seja chamada de "fraca", essa força é poderosa o suficiente
          para permitir reações nucleares que alimentam o sol, liberando a
          energia que nos aquece e ilumina.
        </p>

        <p>
          Sem a força nuclear fraca, não teríamos a luz do sol nem a variedade
          de elementos químicos que conhecemos!
        </p>
      </div>
    </Card>
  );
}
