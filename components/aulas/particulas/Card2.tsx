import { Card, CardTitle } from "@/components/ui/card";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Próton</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>O próton é uma das partículas que formam o núcleo do átomo.</p>
        <p>
          Cada próton carrega uma carga elétrica positiva. Essa carga positiva é
          o que ajuda a manter os elétrons, que têm carga negativa, em órbita ao
          redor do núcleo, graças à atração elétrica.
        </p>

        <p>
          Os prótons, junto com os nêutrons, definem o núcleo atômico e,
          portanto, determinam a identidade de um elemento. Por exemplo, um
          átomo de hidrogênio tem um próton, enquanto um átomo de carbono tem
          seis.
        </p>
        <p>
          Em resumo, os prótons são como tijolos fundamentais que, junto com
          outras partículas, constroem o núcleo do átomo e dão identidade aos
          elementos químicos.
        </p>
      </div>
    </Card>
  );
}
