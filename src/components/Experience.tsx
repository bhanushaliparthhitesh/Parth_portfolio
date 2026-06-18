"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Marquee
    const marquee = document.querySelector('.experience .scroll-marquee');
    if (marquee && marquee.parentElement) {
      gsap.to(marquee, {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: marquee.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }

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
        <h2 className="section-title scroll-marquee">
          <span className="title-en">I work as</span>
          <span className="title-hi">· इंजीनियर</span>
          <span className="title-en" style={{ marginLeft: "2rem" }}>I work as</span>
          <span className="title-hi">· इंजीनियर</span>
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
