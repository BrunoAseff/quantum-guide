import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Card7() {
  return (
    <Card>
      <CardTitle>Resumo</CardTitle>

      <div className="flex justify-center">
        <Image src="/resumo.jpeg" width={700} height={100} alt="Resumo" />
      </div>
    </Card>
  );
}
