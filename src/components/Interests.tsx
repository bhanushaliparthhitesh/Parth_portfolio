"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Interests() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const marquees = document.querySelectorAll('.interests .scroll-marquee');
    marquees.forEach((marquee) => {
      const direction = marquee.getAttribute('data-direction') === '-1' ? 1 : -1;
      
      gsap.to(marquee, {
        xPercent: direction * 30,
        ease: "none",
        scrollTrigger: {
          trigger: marquee.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="interests container">
      {/* Music */}
      <div className="interest-sub">
        <div className="section-title-wrapper">
          <h2 className="section-title scroll-marquee">
            <span className="title-en">I live for music</span>
            <span className="title-hi">· संगीत</span>
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
          <h2 className="section-title scroll-marquee" data-direction="-1">
            <span className="title-en">Switch is my podium</span>
            <span className="title-hi">· रेस</span>
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
          <h2 className="section-title scroll-marquee">
            <span className="title-en">I trek</span>
            <span className="title-hi">· पहाड़</span>
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
