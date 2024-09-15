import { Card, CardTitle } from "@/components/ui/card";

export default function Card3() {
  return (
    <Card>
      <CardTitle> Mas por que isso acontece?</CardTitle>
      <p>A física quântica estuda corpos em escalas muuuito pequenas.</p>

      <p>
        Tão pequenas, que o comportamento e as propriedades dessas partículas
        são contraintuitivos ao que experimentamos no mundo macroscópico.
      </p>

      <p className="mt-4">
        <strong> Um elétron tem cheiro? </strong> <br></br>
        Óbvio que não - o cheiro é mostrado pelos nossos sentidos a partir de
        moléculas gigantescas.
      </p>
      <p className="mt-4">
        {" "}
        <strong>Ele tem cor? </strong> <br></br>
        Também não, os elétrons são muito muito menores que a frequência de onda
        da luz visível.
      </p>
      <p>
        E a mesma coisa pra outras propriedades do dia a dia - elétrons não têm
        textura, sabor, som, etc.{" "}
      </p>
      <br></br>
      <p>
        E até mesmo propriedades que consideramos óbvias, como posição. Ou seja,
        partículas podem estar em múltiplas posições e atravessar múltiplos
        caminhos ao mesmo tempo.
      </p>
    </Card>
  );
}
