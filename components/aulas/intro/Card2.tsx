import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card2() {
  return (
    <Card>
      <CardTitle>Por que física quântica é tão difícil de entender?</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Antes de ir para o conteúdo principal, eu vou precisar te dar um
          choque de realidade: <br />
          <br />
          <strong className="relative left-[35%] text-black">
            Física quântica não faz sentido!
          </strong>
        </p>

        <p>
          Não espere que o que você aprender vá "fazer sentido". Se você usar a
          lógica do seu dia a dia, não vai conseguir entender nada. Física
          quântica não segue essa lógica.
        </p>

        <p>
          O nosso cérebro só consegue visualizar situações similares às que já
          tivemos contato na nossa vida.
        </p>

        <p>
          Por isso, em alguns momentos, tentar imaginar alguma teoria da física
          quântica vai se parecer com tentar imaginar uma cor que não existe:{" "}
          <strong>Impossível!</strong>
        </p>

        <div className="mt-6 flex justify-center">
          <Image
            src="/intro-card2.gif"
            width={750}
            height={100}
            alt="Picture of the author"
          />
        </div>
      </div>
    </Card>
  );
}
