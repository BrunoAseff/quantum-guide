import { Card, CardTitle } from "@/components/ui/card";

export default function Card3() {
  return (
    <Card>
      <CardTitle>Nêutron</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O nêutron é uma das partículas que formam o núcleo do átomo, junto com
          os prótons.
        </p>
        <p>
          Diferente dos prótons, os nêutrons não têm carga elétrica; eles são
          neutros. Isso ajuda a manter os prótons juntos no núcleo, já que os
          prótons, todos positivos, tendem a se repelir.
        </p>

        <p>
          Os nêutrons também são importantes em reações nucleares, como quando
          um átomo se divide e libera energia.
        </p>
        <p>
          Eles são como pacificadores no núcleo, ajudando a manter tudo unido e
          funcionando.
        </p>
      </div>
    </Card>
  );
}
