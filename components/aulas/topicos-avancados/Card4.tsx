import { Card, CardTitle } from "@/components/ui/card";

export default function Card4() {
  return (
    <Card>
      <CardTitle>Computação quântica</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          A computação quântica é uma nova e revolucionária forma de computação
          que utiliza as leis da física quântica para processar informações.
        </p>
        <p>
          Em vez dos bits tradicionais usados nos computadores clássicos, que
          podem ser 0 ou 1, a computação quântica usa qubits, que podem estar em
          uma superposição de ambos 0 e 1 ao mesmo tempo.
        </p>

        <p>
          Eles são especialmente promissores para resolver problemas complexos,
          como simulações de moléculas para descobrir novos medicamentos ou
          otimização de grandes sistemas.
        </p>
        <p>
          Embora ainda estejam em desenvolvimento e não substituam os
          computadores clássicos em breve, os computadores quânticos têm o
          potencial de transformar muitas áreas da ciência e da tecnologia.
        </p>
      </div>
    </Card>
  );
}
