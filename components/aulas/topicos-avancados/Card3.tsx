import { Card, CardTitle } from "@/components/ui/card";

export default function Card3() {
  return (
    <Card>
      <CardTitle>Simetrias quânticas</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Simetrias quânticas são princípios que dizem que certas propriedades
          dos sistemas quânticos permanecem invariáveis, mesmo quando fazemos
          algumas transformações.
        </p>
        <p>
          Essas simetrias são como regras de simetria em geometria, mas
          aplicadas ao comportamento das partículas subatômicas e suas
          interações.
        </p>

        <p>
          Existem vários tipos de simetrias quânticas, como a simetria de
          paridade (inversão espacial), simetria de tempo (reversão temporal) e
          simetria de carga (troca de partículas por antipartículas).
        </p>
        <p>
          Essas simetrias ajudam os físicos a entender e prever como as
          partículas se comportam e interagem, e são fundamentais para formular
          as leis da física.
        </p>
      </div>
    </Card>
  );
}
