"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title Animation
    gsap.to('.experience .char', {
      y: '0%',
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.section-title-wrapper',
        start: "top 80%",
      }
    });

    // Cards
    gsap.utils.toArray('.experience .card').forEach(card => {
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
    <section ref={containerRef} className="experience container">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="line title-en">
            {Array.from("I work as").map((char, i) => (
              <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
          <span className="line title-hi">
            <span className="char">·</span>
            <span className="">&nbsp;</span>
            {["इं", "जी", "नि", "य", "र"].map((char, i) => (
              <span key={`hi-${i}`} className="char">{char}</span>
            ))}
          </span>
        </h2>
      </div>
      
      <div className="exp-grid">
        <div className="card">
          <div className="exp-header">
            <span>AI/ML Engineer</span>
            <span>Jun 2026</span>
          </div>
          <div className="exp-logo">HACKPRIX</div>
          <p className="exp-desc">Built Kaizen-ml: AI data center cooling optimizer using SAC RL agent, physics-based digital twin (XGBoost), LSTM load forecaster.</p>
          <div className="exp-stack">FastAPI · Next.js · Railway · Sarvam AI</div>
        </div>
        
        <div className="card">
          <div className="exp-header">
            <span>Full-Stack + Product</span>
            <span>Apr 2026</span>
          </div>
          <div className="exp-logo">SOLOMESH</div>
          <p className="exp-desc">Client portal BaaS for India's independent consultants — tax, legal, trademark. Built pitch deck + MVP.</p>
          <div className="exp-stack">React · Node.js · MongoDB</div>
        </div>

        <div className="card">
          <div className="exp-header">
            <span>CS Research</span>
            <span>2022 - Pres</span>
          </div>
          <div className="exp-logo">SAKEC</div>
          <p className="exp-desc">DAA, IoT, Python, Arduino/ESP32 firmware, algorithms.</p>
          <div className="exp-stack">Academics · Research</div>
        </div>

        <div className="card">
          <div className="exp-header">
            <span>Org Lead</span>
            <span>2026 - Pres</span>
          </div>
          <div className="exp-logo">KAIZEN-ML</div>
          <p className="exp-desc">Open-source AI org. Data center optimization, women's safety analytics.</p>
          <div className="exp-stack">Open Source · Leadership</div>
        </div>
      </div>
    </section>
  );
}
