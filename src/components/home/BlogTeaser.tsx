// src/components/home/BlogTeaser.tsx
import Reveal from "./Reveal";
import Image from "next/image";

export default function BlogTeaser() {
  const blogs = [
    { title: "Top 5 Bridal Makeup Trends", img: "https://picsum.photos/400/300" },
    { title: "Pre-Wedding Skin Care Tips", img: "https://picsum.photos/401/300" },
    { title: "Choosing the Perfect Lipstick Shade", img: "https://picsum.photos/402/300" }
  ];

  return (
    <section className="py-16 px-4">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-10">From the Blog</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="rounded-lg overflow-hidden hover:scale-105 transition">
              <Image src={b.img} alt={b.title} width={400} height={300} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{b.title}</h3>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
