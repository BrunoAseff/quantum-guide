import { Card, CardTitle } from "@/components/ui/card";

export default function Card1() {
  return (
    <Card>
      <CardTitle>Interpretação de Many-Worlds</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A interpretação de Many-Worlds propõe que todos os resultados
          possíveis de um evento quântico realmente ocorrem, mas em universos
          paralelos diferentes.
        </p>
        <p>
          Cada vez que ocorre uma escolha quântica, o universo se "divide" em
          múltiplos universos, cada um com um resultado diferente.
        </p>

        <p>
          Isso significa que não há "colapso da função de onda"; todos os
          estados possíveis coexistem em realidades paralelas.
        </p>
        <p>
          Essa interpretação nos dá uma visão fascinante de um multiverso
          infinito onde todas as possibilidades acontecem simultaneamente!
        </p>
      </div>
    </Card>
  );
}
