// components/main-icon.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CosmicIcon() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ 
        opacity: 1, 
        transition: { delay: 0.7,
          duration: 0.7 }
      }}
      className="relative  flex flex-col item-center justify-center"
    >
      {/* Pulsing Core */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.04, 1],
          transition: {
            delay: 2.8, // Starts pulsing after appearance
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <Image 
          src="/icon.webp" 
          alt="Cosmic AI Icon" 
          width={200} 
          height={200}
          className="relative opacity-75 z-10 drop-shadow-[0_0_20px_rgba(100,200,255,0.7)] mx-auto"
        />
      </motion.div>

      <span className="text-xl metallic-gradient-text font-normal tracking-tighter">
                What topic do you want to chat about?
            </span>
    </motion.div>
  );
}