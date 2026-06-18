"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function QA() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.utils.toArray('.qa .qa-item').forEach(card => {
      gsap.from(card as Element, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card as Element,
          start: "top 90%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="qa container">
      <h2 className="qa-title">Q&A</h2>
      
      <div className="qa-container">
        <div className="qa-list">
          <div className="qa-item">
            <div className="qa-q">What makes a good engineer, in your opinion?</div>
            <div className="qa-a">One who understands the problem before touching the keyboard. Code is just the medium — clarity is the craft.</div>
          </div>
          
          <div className="qa-item">
            <div className="qa-q">What do you do when you're not coding?</div>
            <div className="qa-a">Trekking Maharashtra's Western Ghats, tracking F1 standings, eating my mom's Gujarati food, and taking care of my daily amla + chia seed ritual.</div>
          </div>
          
          <div className="qa-item">
            <div className="qa-q">What's a natural talent you've always had?</div>
            <div className="qa-a">Connecting dots across domains. I can read a research paper on cooling systems and see a product in it.</div>
          </div>
          
          <div className="qa-item">
            <div className="qa-q">What keeps you up at night?</div>
            <div className="qa-a">AI systems being built fast without being built right. I'm trying to be one of the people who builds them right.</div>
          </div>
          
          <div className="qa-item">
            <div className="qa-q">What are you into recently?</div>
            <div className="qa-a">Deploying ML backends on Railway, integrating regional language AI (Sarvam AI), and learning how real data centers actually operate.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
