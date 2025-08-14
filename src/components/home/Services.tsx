// src/components/home/Services.tsx
import Reveal from "./Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiDiamondRing } from "react-icons/gi";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { IoCameraOutline } from "react-icons/io5";

export default function Services() {
  const services = [
    {
      icon: <GiDiamondRing className="w-10 h-10 text-yellow-500" />,
      title: "Bridal Makeup",
      desc: "Perfect bridal looks for your special day."
    },
    {
      icon: <LiaPaintBrushSolid className="w-10 h-10 text-pink-500" />,
      title: "Event Styling",
      desc: "Glamorous looks for parties & events."
    },
    {
      icon: <IoCameraOutline className="w-10 h-10 text-purple-500" />,
      title: "Photoshoot Makeup",
      desc: "Camera-ready looks for professional shoots."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <Reveal>
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <Card className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <CardHeader className="flex flex-col items-center pt-8">
                <div className="p-4 bg-gradient-to-br from-pink-100 to-yellow-50 rounded-full shadow-inner">
                  {service.icon}
                </div>
                <CardTitle className="mt-6 text-lg font-semibold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 pb-8 px-6">
                {service.desc}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
