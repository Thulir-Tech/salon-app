// src/components/home/Testimonials.tsx
import Reveal from "./Reveal";

export default function Testimonials() {
  const testimonials = [
    { name: "Aishwarya", text: "Absolutely loved my bridal look! Perfect in every way." },
    { name: "Priya", text: "Professional, friendly, and super talented!" },
    { name: "Neha", text: "She made me look stunning for my photoshoot!" }
  ];

  return (
    <section className="py-16 px-4 text-center">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">What Clients Say</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="p-6 border border-purple-300/40 rounded-lg bg-transparent hover:shadow-lg transition">
              <p className="italic text-black mb-4">"{t.text}"</p>
              <span className="font-semibold text-pink-700">- {t.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
