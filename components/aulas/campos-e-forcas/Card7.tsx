import { Card, CardTitle } from "@/components/ui/card";

export default function Card6() {
  return (
    <Card>
      <CardTitle>Bóson de Higgs</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          O bóson de Higgs é conhecido como a "partícula de Deus" porque ajuda a
          explicar por que as partículas têm massa.
        </p>
        <p>
          No universo, existe um campo invisível chamado campo de Higgs. Pense
          nesse campo como uma espécie de "gel" que permeia todo o espaço.
        </p>

        <p>
          Quando as partículas se movem através desse campo, elas interagem com
          ele e ganham massa, como se estivessem se movendo através de um
          líquido pegajoso.
        </p>
        <p>
          O bóson de Higgs é a partícula que prova a existência desse campo. Sem
          o bóson de Higgs, as partículas não teriam massa, e o universo como
          conhecemos seria muito diferente!
        </p>
      </div>
    </Card>
  );
}
