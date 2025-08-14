// src/components/home/Services.tsx
import Reveal from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Brush, Camera } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Sparkles className="w-8 h-8 text-pink-400" />, title: "Bridal Makeup", desc: "Perfect bridal looks for your special day." },
    { icon: <Brush className="w-8 h-8 text-purple-400" />, title: "Event Styling", desc: "Glamorous looks for parties & events." },
    { icon: <Camera className="w-8 h-8 text-pink-300" />, title: "Photoshoot Makeup", desc: "Camera-ready looks for professional shoots." }
  ];

  return (
    <section className="py-16 px-4">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <Card className="bg-transparent border border-pink-300/40 hover:shadow-lg transition">
              <CardHeader className="flex flex-col items-center">
                {service.icon}
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-300">{service.desc}</CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
