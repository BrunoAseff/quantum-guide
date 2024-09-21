import Image from "next/image";

export default function VerifyEmail() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="mx-auto mix-blend-screen mb-32 flex flex-col gap-2 items-center  p-10 max-w-[30rem] rounded-xl  bg-white">
        {" "}
        <h1 className="text-4xl font-semibold text-center mb-4">
          Verifique o seu email!
        </h1>
        <p className="text-lg text-center">
          Um email de verificação foi enviado para o seu email. Verifique para
          começar o curso.
        </p>
        <Image src="/envelope.svg" alt="Envelope" width={170} height={200} />
      </div>
    </div>
  );
}
