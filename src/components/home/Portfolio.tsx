// src/components/home/Portfolio.tsx
import Reveal from "./Reveal";
import Image from "next/image";

export default function Portfolio() {
  const images = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/600/40${i}`);

  return (
    <section className="py-16 px-4">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-10">Our Works</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
              <Image src={src} alt={`Portfolio ${i}`} width={600} height={400} className="object-cover w-full h-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
