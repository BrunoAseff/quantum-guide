import PrincipiosClient from "@/components/PrincipiosClient";
import { getUser } from "@/app/actions";

export default async function Principios() {
  const userData = await getUser();

  const user = userData?.name;

  return <PrincipiosClient user={user} />;
}
