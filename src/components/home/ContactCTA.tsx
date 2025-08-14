// src/components/home/ContactCTA.tsx
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiTodoFill } from "react-icons/ri";

const mobileNumber = "+917540088390";
const whatsappNumber = "+917540088390"

export default function ContactCTA() {
  return (
    <section className="py-16 px-4 text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">Book Your Session <span className="text-pink-600">Today !</span></h2>
        <p className="text-lg text-gray-600 mb-4">
          Ready to transform your look? Contact us now for bookings and inquiries.
        </p>
        <div className=" flex justify-center space-x-4">
          <Button
            onClick={() => { window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank'); }}
            className="bg-pink-100 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl"
          >
            <FaWhatsapp className="inline-block w-2xl" /> WhatsApp
          </Button>
          <Button
            onClick={() => { window.location.href = `tel:${mobileNumber}`; }}
            className="bg-pink-100 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl"
          >
            <FiPhoneCall className="inline-block w-2xl" /> Call Now
          </Button>

        </div>
        <Button
          onClick={() => { window.location.href = '/contact'; }}
          className="bg-pink-100 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-xl mt-3 w-74"
        >
          <RiTodoFill className="inline-block mr-2 w-50 h-50" /> Book Consultation
        </Button>
      </Reveal>
    </section>
  );
}
