import Hero from "@/components/hero";
import Connected from "@/components/animations/heroAnimations/Connected";
import Wave from "@/components/animations/heroAnimations/Wave";
import Uncertainty from "@/components/animations/heroAnimations/Uncertainty";
import Tunelling from "@/components/animations/heroAnimations/Tunelling";

export default async function Index() {
  return (
    <>
      <div className="w-full overflow-hidden max-w-full  flex-col items-center flex justify-center gap-4">
        <Hero />
        <div className=" items-center flex justify-center gap-4 ">
          <div className="max-w-52 max-h-52 m-16 pt-5 text-center text-white flex items-center justify-center text-sm border border-white rounded-lg bg-transparent flex-col">
            Princípio da incerteza
            <Uncertainty />
          </div>
          <div className="max-w-52 max-h-52 m-16 pt-5 text-center text-white flex items-center justify-center text-sm border border-white rounded-lg bg-transparent flex-col">
            Tunelamento Quântico
            <Tunelling />
          </div>
          <div className="max-w-52 max-h-52 m-16 pt-5 text-center text-white flex items-center justify-center text-sm border border-white rounded-lg bg-transparent flex-col">
            <p className="mb-16">Dualidade onda-partícula</p>
            <Wave />
          </div>
          <div className="max-w-52 max-h-52 m-16 pt-5 text-center text-white flex items-center justify-center text-sm border border-white rounded-lg bg-transparent flex-col">
            Emaranhamento Quântico
            <Connected />
          </div>
        </div>
      </div>
    </>
  );
}
