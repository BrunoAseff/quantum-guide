import { Card, CardTitle } from "@/components/ui/card";

export default function Card1() {
  return (
    <Card>
      <CardTitle>Interpretação de Bohm</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Segundo a interpretação de Bohm, as partículas quânticas, como
          elétrons, têm posições e trajetórias definidas, mas são governadas por
          uma espécie de "guia" chamada função de onda piloto.
        </p>
        <p>
          Essa função de onda piloto influencia o movimento das partículas, mas
          não é diretamente observável. Portanto, a física quântica de Bohm
          mantém uma realidade objetiva e determinística, em contraste com a
          aleatoriedade da interpretação de Copenhague.
        </p>

        <p>
          Essa interpretação é bem controversa e mal vista no campo da física de
          maneira geral.
        </p>
      </div>
    </Card>
  );
}
