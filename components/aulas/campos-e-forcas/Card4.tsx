import { Card, CardTitle } from "@/components/ui/card";

export default function Card4() {
  return (
    <Card>
      <CardTitle>Força nuclear forte (Glúon)</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A força nuclear forte é o que mantém os prótons e nêutrons juntos no
          núcleo dos átomos, uma tarefa nada fácil!
        </p>
        <p>
          Essa força é carregada por partículas chamadas glúons. Pense nos
          glúons como pequenos "cola-tudo" que unem as partículas do núcleo com
          uma força inacreditável.
        </p>

        <p>
          Ao contrário da gravidade ou do magnetismo, a força nuclear forte é
          super forte, mas só age em distâncias muito curtas, como dentro de um
          núcleo atômico.
        </p>
        <p>
          Sem essa força, os núcleos dos átomos simplesmente se desintegrariam.
          Os glúons são, portanto, os heróis invisíveis que garantem que tudo ao
          nosso redor continue existindo!
        </p>
      </div>
    </Card>
  );
}
