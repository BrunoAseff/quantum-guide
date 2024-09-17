import { Card, CardTitle } from "@/components/ui/card";

export default function Card4() {
  return (
    <Card>
      <CardTitle>O Gato de Schrödinger</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Para ilustrar a estranheza da superposição, o físico Erwin Schrödinger
          propôs um experimento mental famoso: o Gato de Schrödinger.
        </p>
        <p>
          Imagine um gato em uma caixa, junto com um mecanismo que tem 50% de
          chance de matá-lo baseado na decaída de uma partícula radioativa.
        </p>

        <p>
          Até que a caixa seja aberta, o gato está em uma superposição de
          estados – tanto vivo quanto morto.
        </p>
        <p>
          A situação só se resolve quando observamos o gato. Antes disso, ele
          está em uma superposição de "vivo" e "morto".
        </p>
        <p>
          Um estado que não faz sentido em nosso mundo macroscópico, mas é
          fundamental no mundo quântico.
        </p>
      </div>
    </Card>
  );
}
