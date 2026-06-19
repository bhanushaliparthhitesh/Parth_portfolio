"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Interests() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350; // card width + gap approximation
      scrollContainerRef.current.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

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
        <div className="h-scroll-container music-scroll-bleed" ref={scrollContainerRef}>
          {[
            { title: "ALL TIME FAVORITE", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700" },
            { title: "SOUNDTRACK MODE", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2" },
            { title: "LOVE VIBIN", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4" },
            { title: "WORK TUNES", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1" },
            { title: "IN THE BACKGROUND", subtitle: "YOUTUBE", logo: "youtube", color: "#1E90FF" },
            { title: "LOFI GIRL", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500" },
            // Duplicated to create the infinity scroll effect
            { title: "ALL TIME FAVORITE", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700" },
            { title: "SOUNDTRACK MODE", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2" },
            { title: "LOVE VIBIN", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4" },
            { title: "WORK TUNES", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1" },
            { title: "IN THE BACKGROUND", subtitle: "YOUTUBE", logo: "youtube", color: "#1E90FF" },
            { title: "LOFI GIRL", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500" },
            // Duplicated again to ensure smooth endless feel
            { title: "ALL TIME FAVORITE", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700" },
            { title: "SOUNDTRACK MODE", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2" },
            { title: "LOVE VIBIN", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4" },
            { title: "WORK TUNES", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1" },
            { title: "IN THE BACKGROUND", subtitle: "YOUTUBE", logo: "youtube", color: "#1E90FF" },
            { title: "LOFI GIRL", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500" },
          ].map((playlist, idx) => (
            <div key={idx} className="music-card">
              <div className="music-art" style={{ background: `linear-gradient(135deg, ${playlist.color}22, ${playlist.color}88)` }}>
                {/* Visual placeholder for the album circle */}
              </div>
              <div className="music-info">
                <span className="music-title">{playlist.title}</span>
                <span className="music-subtitle">{playlist.subtitle}</span>
              </div>
              {playlist.logo === "apple" ? (
                <svg className="apple-logo" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              ) : (
                <svg className="youtube-logo" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              )}
            </div>
          ))}
        </div>
        <div className="music-scroll-controls">
          <button className="scroll-btn" onClick={() => handleScroll("left")} aria-label="Scroll left">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className="scroll-btn" onClick={() => handleScroll("right")} aria-label="Scroll right">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
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
