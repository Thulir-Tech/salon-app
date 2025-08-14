// src/components/home/AboutSnippet.tsx
import Reveal from "./Reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSnippet() {
  return (
    <section className="py-16 px-4">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <Image src="https://picsum.photos/500/500" alt="About Us" width={500} height={500} className="rounded-lg shadow-lg" />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 mb-6">
              I am a passionate makeup artist with years of experience creating stunning looks for weddings, events, and photoshoots.
            </p>
            <Button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">Read More</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
