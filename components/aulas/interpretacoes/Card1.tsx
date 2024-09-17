import { Card, CardTitle } from "@/components/ui/card";

export default function Card1() {
  return (
    <Card>
      <CardTitle>Interpretação de Copenhague</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A física quântica não apenas descreve o comportamento das partículas
          subatômicas, mas também levanta profundas questões sobre a natureza da
          realidade.
        </p>
        <p>
          Por isso, existem várias interpretações para explicar os conceitos
          fundamentais da física quântica.
        </p>

        <p>
          A interpretação de Copenhague é uma das mais antigas e amplamente
          aceitas. Tão aceita que foi usada como base para explicar a maioria
          dos conceitos deste guia.
        </p>
        <p>
          A interpretação de Copenhague postula que a realidade quântica é
          probabilística e indeterminada até ser observada.{" "}
        </p>
        <p>
          Ou seja, ela vai contra os conceitos determinísticos de que destino e
          que o futuro do universo já foi escrito. É tudo aleatório e
          imprevisível!
        </p>
      </div>
    </Card>
  );
}
