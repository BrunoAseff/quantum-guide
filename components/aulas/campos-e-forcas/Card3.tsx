import { Card, CardTitle } from "@/components/ui/card";

export default function Card3() {
  return (
    <Card>
      <CardTitle>Força eletromagnética (Fóton)</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A força eletromagnética é a força que lida com a interação entre
          partículas carregadas eletricamente.
        </p>
        <p>
          Ela é responsável por praticamente todas as interações do dia a dia:
          luz, eletricidade, magnetismo, e as ligações químicas que formam
          moléculas.
        </p>

        <p>
          O mensageiro dessa força é o fóton, uma partícula sem massa que viaja
          à velocidade da luz. Pense no fóton como uma pequena bola de luz que
          carrega energia e informação entre partículas carregadas.
        </p>
        <p>
          Quando você liga uma lâmpada, os elétrons nos fios interagem através
          de fótons, criando luz.
        </p>
        <p>
          A força eletromagnética é crucial para a vida e a tecnologia, mantendo
          os átomos juntos e permitindo que nossos dispositivos eletrônicos
          funcionem.
        </p>
      </div>
    </Card>
  );
}
