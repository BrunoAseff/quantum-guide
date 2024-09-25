import { Card, CardTitle } from "@/components/ui/card";
import { Plus } from "phosphor-react";

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
        <div className="w-full  flex mt-2 justify-center">
          <div className="w-[170px] relative h-[170px] mt-2 flex flex-wrap gap-3 rounded-full bg-black p-6">
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] top-4 left-20 absolute h-[25px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] top-10 left-5 absolute rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-10 left-16 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-2 left-12 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-16 left-10 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-20 left-2 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
