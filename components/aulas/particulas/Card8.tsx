import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card7() {
  return (
    <Card>
      <CardTitle>Resumo</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <Image src="/resumo.jpeg" width={500} height={500} alt="Resumo" />
      </div>
    </Card>
  );
}
