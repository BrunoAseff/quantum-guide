import { Card, CardTitle } from "@/components/ui/card";

export default function Card7() {
  return (
    <Card>
      <CardTitle>Incerteza de Heisenberg</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Uma das ideias mais intrigantes da física quântica é o Princípio da
          Incerteza de Heisenberg.
        </p>
        <p>
          Em termos simples, ele diz que é impossível conhecer simultaneamente a
          posição exata e a velocidade exata de uma partícula.
        </p>

        <p>
          Se medirmos a posição de um elétron com precisão, sua velocidade se
          torna incerta, e vice-versa.
        </p>
        <p>
          Este princípio mostra que o mundo quântico é probabilístico, não
          determinístico.
        </p>
        <p>
          Ele nos lembra que, no nível quântico, não existem certezas absolutas.
          E que a realidade é, em parte, indeterminada.
        </p>
      </div>
    </Card>
  );
}
