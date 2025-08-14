import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import AboutSnippet from "@/components/home/AboutSnippet";
import Testimonials from "@/components/home/Testimonials";
import BlogTeaser from "@/components/home/BlogTeaser";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="bg-white text-white">
      <Hero />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <Portfolio />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <Services />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <AboutSnippet />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <Testimonials />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <BlogTeaser />
      <div className="h-[1px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300" />
      <ContactCTA />
    </main>
  );
}
