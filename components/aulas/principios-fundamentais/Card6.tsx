import { Card, CardTitle } from "@/components/ui/card";

export default function Card6() {
  return (
    <Card>
      <CardTitle>Decoerência</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
      <p>Mas, por que não vemos esses fenômenos no dia a dia?</p>
          <p>
            A resposta está no conceito de decoerência que explica como o
            comportamento quântico de partículas individuais se perde quando
            essas partículas interagem com o ambiente.
          </p>

          <p>
            No nível quântico, partículas podem existir em estados de
            superposição. Mas, quando essas partículas interagem com inúmeras
            outras partículas à sua volta, a superposição se desfaz.
          </p>
          <p>
            É como tentar manter uma onda em um lago perfeitamente calmo
            enquanto centenas de pedras são jogadas na água.
          </p>
          <p>
            Essas interações fazem com que as propriedades quânticas se
            decoerem, ou seja, se dissipem.
          </p>
          <p>
            No mundo macroscópico, onde há muitas partículas interagindo, a
            decoerência é extremamente rápida.
          </p>
          <p>
            Isso faz com que os objetos ao nosso redor se comportem de maneira
            previsível e clássica.
          </p>
          <p>
            Por isso, você nunca vê gatos vivos e mortos ao mesmo tempo por aí.
          </p>
      </div>
    </Card>
  );
}
