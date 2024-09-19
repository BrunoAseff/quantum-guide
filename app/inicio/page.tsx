import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { getUser } from "../actions";
import { ProgressDialog } from "@/components/progressDialog";

export default async function ProtectedPage() {
  const texts = [
    { x: "8%", y: "35%", content: "Introdução" },
    { x: "18%", y: "1%", content: "Princípios Fundamentais" },
    { x: "28%", y: "45%", content: "Interpretações" },
    { x: "38%", y: "30%", content: "Partículas" },
    { x: "48%", y: "5%", content: "Campos e Forças" },
    { x: "58%", y: "50%", content: "Tópicos Avançados" },
  ];

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userData = await getUser();

  const percentageProgress = (userData?.progress / 6) * 100;

  return (
    <>
      <div className="flex ml-20 text-xl mt-4 text-white flex-col gap-6">
        {userData && (
          <>
            {" "}
            <h1 className="font-semibold">Olá, {userData.name}!</h1>
            <div className="flex   flex-col gap-2">
              {" "}
              <h2>
                <strong> Progresso:</strong> {userData.progress} de 6{" "}
              </h2>
              <Progress className="max-w-[500px]" value={percentageProgress} />
            </div>
          </>
        )}
      </div>
      <div className=" min-w-[140vw] min-h-[60vh] overflow-hidden relative">
        <svg className="absolute  w-full h-full">
          <line
            x1="10%"
            y1="30%"
            x2="20%"
            y2="10%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="20%"
            y1="10%"
            x2="30%"
            y2="40%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="30%"
            y1="40%"
            x2="40%"
            y2="25%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="40%"
            y1="25%"
            x2="50%"
            y2="15%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
          <line
            x1="50%"
            y1="15%"
            x2="60%"
            y2="45%"
            style={{ stroke: "white", strokeWidth: 2 }}
          />
        </svg>
        <svg className="absolute w-full h-full">
          {/* Definição de filtro para sombra */}
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="white" />
            </filter>
          </defs>
          {/* Estrelas */}
          <Link href="/inicio/intro">
            <circle
              cx="10%"
              cy="30%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
          <Link href="/inicio/principios-fundamentais">
            <circle
              cx="20%"
              cy="10%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
          <Link href="/inicio/interpretacoes">
            <circle
              cx="30%"
              cy="40%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
          <Link href="/inicio/particulas">
            <circle
              cx="40%"
              cy="25%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
          <Link href="/inicio/campos-e-forcas">
            <circle
              cx="50%"
              cy="15%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
          <Link href="/inicio/topicos-avancados">
            <circle
              cx="60%"
              cy="45%"
              r="5"
              className="fill-white transition-transform duration-300 hover:cursor-pointer hover:filter-shadow hover:r-7"
            />
          </Link>
        </svg>
        {texts.map((text, index) => (
          <div
            key={index}
            className="absolute text-white"
            style={{ left: text.x, top: text.y }}
          >
            {text.content}
          </div>
        ))}
      </div>
    </>
  );
}
