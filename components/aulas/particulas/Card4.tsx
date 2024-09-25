import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card4() {
  return (
    <Card>
      <CardTitle>Quarks</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Prótons e nêutrons, por sua vez, são formados por partículas ainda
          menores chamadas quarks.{" "}
        </p>
        <p>
          Existem seis tipos de quarks com nomes esquisitos: up, down, charm,
          strange, top e bottom. No dia a dia, encontramos principalmente os
          quarks up e down, que formam os prótons e nêutrons.
        </p>

        <p>
          Os quarks nunca estão sozinhos; eles sempre se juntam em grupos de
          dois ou três, ligados por uma força chamada força forte.
        </p>
        <p>
          Pense nos quarks como pequenos blocos de LEGO que se combinam para
          formar as peças maiores que, por sua vez, constroem o núcleo dos
          átomos.
        </p>
        <div className="w-full flex justify-center">
          {" "}
          <Image src="/quarks.png" width={220} height={200} alt="Quarks" />
        </div>
      </div>
    </Card>
  );
}
