"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        In every touch and every reflection, we create<br />{" "}
        <Highlight className="text-black dark:text-white">
          a glow that is yours, truly yours.
        </Highlight>
        <div className="flex gap-4 mt-10 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-white"
          >
            View Portfolio
          </Button>

          <Button
            size="lg"
            className="bg-gradient-to-r from-white/20 via-white/40 to-white/20 border border-white text-white hover:from-white hover:via-white hover:to-white hover:text-black"
          >
            Book a Session
          </Button>

        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
