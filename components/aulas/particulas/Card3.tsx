import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card3() {
  return (
    <Card>
      <CardTitle>Nêutron</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Os nêutrons também ficam no núcleo e, como o nome sugere, não têm
          carga elétrica, sendo neutros.{" "}
        </p>
        <p>
          Eles são quase tão pesados quanto os prótons e têm um papel importante
          na estabilidade do átomo. Em núcleos com muitos prótons, os nêutrons
          agem como "moderadores", ajudando a reduzir a repulsão elétrica entre
          os prótons, que têm a mesma carga e, portanto, se repelem. Sem os
          nêutrons, o núcleo poderia se desintegrar (e nada existiria
          consequentemente).
        </p>
        <div className="mt-2 w-full italic flex justify-center">
          <small>Já agradeceu um Nêutron hoje por estar vivo?</small>
        </div>
        <div className="w-full flex justify-center">
          {" "}
          <Image src="/neutron.png" width={270} height={200} alt="Neutron" />
        </div>
      </div>
    </Card>
  );
}
