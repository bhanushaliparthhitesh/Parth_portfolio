import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
