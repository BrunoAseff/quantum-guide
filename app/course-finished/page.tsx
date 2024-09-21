"use client";
import { VortexAnimation } from "@/components/vortexAnimation";
import { motion } from "framer-motion";

export default function CourseFinished() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <VortexAnimation />
    </motion.div>
  );
}
