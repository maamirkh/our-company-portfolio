import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { TechStack } from "@/sections/TechStack";
import { Projects } from "@/sections/Projects";
import { Process } from "@/sections/Process";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </main>
  );
}
