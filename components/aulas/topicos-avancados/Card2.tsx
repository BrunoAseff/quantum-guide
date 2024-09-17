import { Card, CardTitle } from "@/components/ui/card";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Princípio da exclusão de Pauli</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O Princípio da Exclusão de Pauli é uma regra fundamental que governa o
          comportamento das partículas chamadas férmions, como elétrons, prótons
          e nêutrons.
        </p>
        <p>
          Segundo essa regra, dois férmions não podem ocupar o mesmo estado
          quântico ao mesmo tempo. Em outras palavras, em um átomo, dois
          elétrons não podem ter os mesmos quatro números quânticos.
        </p>

        <p>
          Esse princípio explica por que os elétrons se organizam em camadas ao
          redor do núcleo do átomo, e é crucial para a estrutura e estabilidade
          da matéria.
        </p>
        <p>
          Graças ao Princípio da Exclusão de Pauli, os átomos têm tamanhos e
          formas definidos, e a diversidade de elementos químicos é possível.
        </p>
      </div>
    </Card>
  );
}
