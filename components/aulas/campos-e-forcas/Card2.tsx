import { Card, CardTitle } from "@/components/ui/card";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Forças fundamentais</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          No universo, tudo é mantido junto e interage através de quatro forças
          fundamentais.
        </p>
        <p>
          1. Gravidade: A força que puxa você para o chão e mantém os planetas
          em órbita ao redor do Sol. É a mais fraca, mas atua em distâncias
          enormes.
        </p>

        <p>
          2. Eletromagnetismo: Esta força mantém os átomos juntos e é
          responsável por praticamente todas as interações do dia a dia, como a
          luz, a eletricidade e o magnetismo.
        </p>
        <p>
          3. Força Nuclear Forte: A poderosa cola que mantém os prótons e
          nêutrons juntos no núcleo dos átomos. É extremamente forte, mas atua
          apenas em distâncias muito pequenas.
        </p>
        <p>
          4. Força Nuclear Fraca: Essa força é responsável pela desintegração
          radioativa e por processos como a fusão nuclear no Sol. Ela é mais
          forte que a gravidade, mas só funciona em escalas subatômicas.
        </p>
      </div>
    </Card>
  );
}
