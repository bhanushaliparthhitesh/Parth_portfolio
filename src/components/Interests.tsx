"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Interests() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title Animations
    gsap.utils.toArray('.interests .section-title-wrapper').forEach(wrapper => {
      gsap.to((wrapper as Element).querySelectorAll('.char'), {
        y: '0%',
        duration: 1,
        ease: "power4.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: wrapper as Element,
          start: "top 80%",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="interests container">
      {/* Music */}
      <div className="interest-sub">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <span className="line title-en">
              {Array.from("I live for music").map((char, i) => (
                <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </span>
            <span className="line title-hi">
              <span className="char">·</span>
              <span className="">&nbsp;</span>
              {["सं", "गी", "त"].map((char, i) => (
                <span key={`hi-${i}`} className="char">{char}</span>
              ))}
            </span>
          </h2>
        </div>
        <div className="h-scroll-container">
          <div className="music-card">[ Bollywood ]</div>
          <div className="music-card">[ Lo-Fi ]</div>
          <div className="music-card">[ F1 Soundtracks ]</div>
          <div className="music-card">[ AR Rahman ]</div>
          <div className="music-card">[ Arijit Singh ]</div>
        </div>
      </div>

      {/* F1 */}
      <div className="interest-sub">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <span className="line title-en">
              {Array.from("Switch is my podium").map((char, i) => (
                <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </span>
            <span className="line title-hi">
              <span className="char">·</span>
              <span className="">&nbsp;</span>
              {["रे", "स"].map((char, i) => (
                <span key={`hi-${i}`} className="char">{char}</span>
              ))}
            </span>
          </h2>
        </div>
        <div className="h-scroll-container">
          <div className="music-card" style={{ backgroundColor: "#1A1A1A", borderLeft: "8px solid #CC0000" }}>[ Max Verstappen ]</div>
          <div className="music-card" style={{ backgroundColor: "#1A1A1A", borderLeft: "8px solid #00D2BE" }}>[ Lewis Hamilton ]</div>
          <div className="music-card" style={{ backgroundColor: "#1A1A1A" }}>[ Current Season 2026 ]</div>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", fontWeight: 600 }}>Verstappen vs Hamilton — the rivalry that defined an era</p>
      </div>

      {/* Trekking */}
      <div className="interest-sub">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <span className="line title-en">
              {Array.from("I trek").map((char, i) => (
                <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </span>
            <span className="line title-hi">
              <span className="char">·</span>
              <span className="">&nbsp;</span>
              {["प", "हा", "ड़"].map((char, i) => (
                <span key={`hi-${i}`} className="char">{char}</span>
              ))}
            </span>
          </h2>
        </div>
        <div className="h-scroll-container">
          <div className="project-img" style={{ backgroundColor: "#333", minWidth: "350px" }}>[ Rajmachi Image ]</div>
          <div className="project-img" style={{ backgroundColor: "#333", minWidth: "350px" }}>[ Harishchandragad Image ]</div>
          <div className="project-img" style={{ backgroundColor: "#333", minWidth: "350px" }}>[ Next Summit TBD ]</div>
        </div>
      </div>
    </section>
  );
}
