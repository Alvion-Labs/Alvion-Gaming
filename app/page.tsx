import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/sections/About";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { JoinUs } from "@/sections/JoinUs";
import { Merchandise } from "@/sections/Merchandise";
import { Teams } from "@/sections/Teams";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Teams />
        <About />
        <Achievements />
        <Merchandise />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
