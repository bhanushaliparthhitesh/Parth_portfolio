import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import QA from "@/components/QA";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <FloatingCTA />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Interests />
        <QA />
        <Footer />
      </main>
    </>
  );
}
