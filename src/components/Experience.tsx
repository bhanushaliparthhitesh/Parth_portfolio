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
            <span>AI / ML ENGINEER</span>
            <span className="exp-avail">AVAILABLE</span>
          </div>
          <div className="exp-logo">AI Engineer</div>
          <p className="exp-desc">I build intelligent systems that learn, adapt, and make decisions. From reinforcement learning agents to production ML pipelines — I care about models that actually ship.</p>
          <div className="exp-stack">Python · PyTorch · Scikit-learn · Stable-Baselines3 · MLflow</div>
        </div>
        
        <div className="card">
          <div className="exp-header">
            <span>FULL STACK DEVELOPER</span>
            <span className="exp-avail">AVAILABLE</span>
          </div>
          <div className="exp-logo">Full Stack Dev</div>
          <p className="exp-desc">I build complete products — from database schema to pixel-perfect UI. Fast, scalable, and clean on both ends of the stack.</p>
          <div className="exp-stack">Next.js · React · Node.js · FastAPI · MongoDB · PostgreSQL</div>
        </div>

        <div className="card">
          <div className="exp-header">
            <span>AI AGENT ENGINEER</span>
            <span className="exp-avail">AVAILABLE</span>
          </div>
          <div className="exp-logo">Agent Builder</div>
          <p className="exp-desc">I design and build autonomous AI agents that reason, use tools, and complete multi-step tasks without hand-holding. LLMs that actually do things.</p>
          <div className="exp-stack">LangChain · OpenAI API · Sarvam AI · MCP · RAG</div>
        </div>

        <div className="card">
          <div className="exp-header">
            <span>PYTHON DEVELOPER</span>
            <span className="exp-avail">AVAILABLE</span>
          </div>
          <div className="exp-logo">Python Dev</div>
          <p className="exp-desc">Python is my sharpest tool. I use it across ML, backend APIs, data pipelines, automation scripts, and anything in between.</p>
          <div className="exp-stack">Python · FastAPI · NumPy · Pandas · Docker · Railway</div>
        </div>
      </div>
    </section>
  );
}
