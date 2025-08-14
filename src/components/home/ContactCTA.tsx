// src/components/home/ContactCTA.tsx
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-16 px-4 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">Book Your Session Today</h2>
        <Button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 text-lg rounded-full">
          Contact Me
        </Button>
      </Reveal>
    </section>
  );
}
