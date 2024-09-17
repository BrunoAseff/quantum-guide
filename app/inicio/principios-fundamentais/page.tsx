import PrincipiosClient from "@/components/PrincipiosClient";

import getEmail from "@/utils/supabase/getEmail";

export default async function Principios() {
  const email = await getEmail();

  return <PrincipiosClient email={email} />;
}
