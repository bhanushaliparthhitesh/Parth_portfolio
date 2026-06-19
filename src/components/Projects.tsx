"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title Animation
    gsap.to('.projects .char', {
      y: '0%',
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.projects .section-title-wrapper',
        start: "top 80%",
      }
    });

    gsap.utils.toArray('.projects .project-card').forEach(card => {
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
    <section id="projects" ref={containerRef} className="projects container">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="line title-en">
            {Array.from("I love building").map((char, i) => (
              <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
          <span className="line title-hi">
            <span className="char">·</span>
            <span className="">&nbsp;</span>
            {["प्रो", "जे", "क्ट्", "स"].map((char, i) => (
              <span key={`hi-${i}`} className="char">{char}</span>
            ))}
          </span>
        </h2>
      </div>

      <div className="h-scroll-container">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-img" style={{ backgroundColor: "#008B8B" }}>
            [ KAIZEN-ML IMAGE ]
          </div>
          <div className="project-meta">
            <div className="project-title">Kaizen-ml Cooling System</div>
            <div className="project-tag">RL · AI</div>
          </div>
          <p className="project-desc">SAC agent optimizing PUE + WUE in data centers with a digital twin and LSTM load forecaster.</p>
        </div>
        
        {/* Project 2 */}
        <div className="project-card">
          <div className="project-img" style={{ backgroundColor: "#D2691E" }}>
            [ SOLOMESH IMAGE ]
          </div>
          <div className="project-meta">
            <div className="project-title">SoloMesh</div>
            <div className="project-tag">SAAS</div>
          </div>
          <p className="project-desc">BaaS platform for India's 50M+ independent consultants.</p>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-img" style={{ backgroundColor: "#8B0000" }}>
            [ WOMEN'S SAFETY IMAGE ]
          </div>
          <div className="project-meta">
            <div className="project-title">Women's Safety Analytics</div>
            <div className="project-tag">CV · AI</div>
          </div>
          <p className="project-desc">CCTV behavioral anomaly detection system for public spaces (SIH 2024 PS 1605).</p>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-img" style={{ backgroundColor: "#2E8B57" }}>
            [ HEALTHCARE IMAGE ]
          </div>
          <div className="project-meta">
            <div className="project-title">Healthcare Allocator</div>
            <div className="project-tag">ALGO</div>
          </div>
          <p className="project-desc">LaTeX academic paper replacing Bipartite Matching with Backtracking for pandemic resource allocation.</p>
        </div>
      </div>
      
      <div style={{ marginTop: "2rem" }}>
        <a href="https://github.com/bhanushaliparthhitesh" className="btn btn-dark" target="_blank" rel="noreferrer">See all on GitHub</a>
      </div>
    </section>
  );
}
