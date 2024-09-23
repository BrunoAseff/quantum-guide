import { Card, CardTitle } from "@/components/ui/card";

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
        <small className="mt-2 italic ml-auto mr-auto">
          Já agradeceu um Nêutron hoje por estar vivo?
        </small>
      </div>
    </Card>
  );
}
