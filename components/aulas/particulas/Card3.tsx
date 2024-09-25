import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Equals, Plus } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Card3() {
  const [removeNeutrons, setRemoveNeutrons] = useState(false);
  const [parentAnimation, setParentAnimation] = useState(false);

  const handleRemoveNeutrons = () => {
    setRemoveNeutrons(true);
    setTimeout(() => {
      setParentAnimation(true);
    }, 1000); // Inicia a animação de blur e transparência após 1 segundo.
  };

  return (
    <Card>
      <CardTitle>Nêutron</CardTitle>

      <div className="text-gray-700 leading-relaxed space-y-4">
        <p>
          Os nêutrons também ficam no núcleo e, como o nome sugere, não têm
          carga elétrica, sendo neutros.
        </p>
        <p>
          Eles são quase tão pesados quanto os prótons e têm um papel importante
          na estabilidade do átomo. Em núcleos com muitos prótons, os nêutrons
          agem como "moderadores", ajudando a reduzir a repulsão elétrica entre
          os prótons, que têm a mesma carga e, portanto, se repelem.
        </p>
        <div className="mt-2 w-full italic flex justify-center">
          <small>Já agradeceu um Nêutron hoje por estar vivo?</small>
        </div>

        <div className="w-full flex justify-center">
          <motion.div
            className="w-[170px] relative h-[170px] mt-2 flex flex-wrap gap-3 rounded-full bg-black p-6"
            animate={
              parentAnimation
                ? { filter: "blur(200px)", opacity: 0 }
                : { filter: "blur(0px)", opacity: 1 }
            }
            transition={{ duration: 1.5 }}
          >
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] top-4 left-20 absolute h-[25px] rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] top-10 left-5 absolute rounded-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-10 left-16 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-2 left-12 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-16 left-10 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <div className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] hover:cursor-pointer w-[25px] h-[25px] rounded-full top-20 left-2 absolute bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center font-bold text-5xl">
              <Plus weight="bold" color="white" size={32} />
            </div>
            <AnimatePresence>
              {!removeNeutrons && (
                <>
                  {/* Switching top with bottom and left with right */}
                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-4 right-20 hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>

                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-10 right-5 hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>

                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-10 right-16  hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>

                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-2 right-12 hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>

                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-16 right-10 hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>

                  <motion.div
                    className="hover:shadow-[0_0_40px_rgba(99,102,241,1)] bottom-20 right-2 hover:cursor-pointer w-[25px] h-[25px] rounded-full absolute bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center font-bold text-5xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Equals weight="bold" color="black" size={32} />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="w-full flex justify-center">
          <Button
            className="bg-black mb-10 mt-6 text-white px-4 py-2 rounded"
            onClick={handleRemoveNeutrons}
          >
            Remover Nêutrons
          </Button>
        </div>
      </div>
    </Card>
  );
}
