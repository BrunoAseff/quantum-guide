import { Card, CardTitle } from "@/components/ui/card";

export default function Card1() {
  return (
    <Card>
      <CardTitle>Teoria quântica de campos</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A Teoria Quântica de Campos é como um grande palco onde partículas e
          campos atuam juntos.
        </p>
        <p>
          Nesta teoria, as partículas são excitações ou "pulos" em campos
          subjacentes que permeiam todo o espaço. Pense nos campos como um
          oceano invisível e as partículas como ondas que se formam nele.
        </p>

        <p>
          Ela combina a mecânica quântica e a relatividade restrita, permitindo
          descrever como as partículas nascem, interagem e se aniquilam.
        </p>
        <p>
          É a base para o Modelo Padrão da física de partículas, a teoria que
          explica a maioria das partículas e forças conhecidas.
        </p>
      </div>
    </Card>
  );
}
