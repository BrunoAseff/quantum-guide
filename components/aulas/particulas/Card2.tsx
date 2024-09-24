import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Próton</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Os prótons são partículas que ficam no núcleo e têm carga positiva.
        </p>
        <p>
          Eles são essenciais para determinar qual elemento o átomo será. Se o
          núcleo tem apenas um próton, o átomo será hidrogênio; se tiver seis,
          será carbono, e assim por diante.{" "}
        </p>

        <p>
          Os prótons são um dos principais responsáveis pela massa do átomo, e a
          quantidade deles (chamada de número atômico) define as propriedades
          químicas do elemento.
        </p>
        <div className="w-full flex justify-center">
          {" "}
          <Image src="/proton.png" width={270} height={200} alt="Proton" />
        </div>
      </div>
    </Card>
  );
}
