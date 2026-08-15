import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import FloatingCTA from "@/components/FloatingCTA";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Interests = dynamic(() => import("@/components/Interests"), { ssr: true });
const QA = dynamic(() => import("@/components/QA"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <FloatingCTA />
      <main>
        <Hero />
        <About />
        <Experience />
        <Interests />
        <QA />
        <Footer />
      </main>
    </>
  );
}
