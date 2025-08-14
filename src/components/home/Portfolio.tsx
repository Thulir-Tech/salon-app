"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Reveal from "./Reveal";

export default function OurWorks() {
  const works = [
    {
      quote: "Bridal Look – Elegant & Timeless - Saree",
      name: "Aishwarya",
      designation: "Bride",
      src: "/assets/works/bridal1.jpg",
    },
    {
      quote: "Photoshoot Glam – Bold & Beautiful",
      name: "Priya",
      designation: "Model",
      src: "/assets/works/model1.jpg",
    },
    {
      quote: "Bridal Look – Lehenga",
      name: "Neha",
      designation: "Bride",
      src: "/assets/works/bridal2.jpg",
    },
  ];

  return (
      <section className="py-20 bg-transparent">
        <Reveal>
          <h2 className="text-center text-4xl font-bold">
            Our Works
          </h2>
          <AnimatedTestimonials testimonials={works} />
        </Reveal>
      </section>
  );
}