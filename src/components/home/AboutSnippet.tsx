// src/components/home/AboutSnippet.tsx
import Reveal from "./Reveal";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSnippet() {
  return (
    <section className="py-16 px-4">
      <div className="grid md:grid-cols-2 gap-5 items-center">
        <Reveal>
          <Image src="/assets/artists/artist.png" alt="About Us" width={450} height={450} className="rounded-lg shadow-lg justify-center" />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-black mb-6">
              I am a passionate makeup artist with years of experience creating stunning looks for weddings, events, and photoshoots. 
              Skilled in enhancing natural beauty while adapting to each client’s unique style, I offer professional, 
              long-lasting makeup that looks flawless both in person and on camera. Ready to travel to your location, 
              I ensure a comfortable and personalized experience from start to finish. Whether it’s a glamorous bridal look, 
              a soft natural glow, or a bold editorial style, I bring creativity, precision, and a friendly touch to every session.
            </p>
            <Button onClick={() => window.location.href = "/about"} className="bg-gradient-to-r from-pink-400 to-purple-400 text-white">Read More</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
