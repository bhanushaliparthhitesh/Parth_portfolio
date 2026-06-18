"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [timeString, setTimeString] = useState("");
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Kolkata', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true 
      };
      setTimeString(new Intl.DateTimeFormat('en-US', timeOptions).format(now) + ' IST');
      
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      };
      setDateString(new Intl.DateTimeFormat('en-GB', dateOptions).format(now).toUpperCase());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const heroChars = document.querySelectorAll('.hero-name .char');
    gsap.to(heroChars, {
      y: '0%',
      duration: 1,
      ease: "power4.out",
      stagger: 0.05,
      delay: 0.2
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="logo">PB</div>
        <div className="hero-tagline">Building AI systems that ease, optimize, and delight.</div>
        <h1 className="hero-name">
          <span className="line">
            <span className="char">P</span><span className="char">A</span><span className="char">R</span><span className="char">T</span><span className="char">H</span>
          </span>
          <span className="line">
            <span className="char">B</span><span className="char">H</span><span className="char">A</span><span className="char">N</span><span className="char">U</span><span className="char">S</span><span className="char">H</span><span className="char">A</span><span className="char">L</span><span className="char">I</span>
          </span>
        </h1>
        <div className="hero-meta">
          <span>MUMBAI, INDIA</span>
          <span>{dateString}</span>
          <span id="clock">{timeString}</span>
        </div>
      </div>
      <div className="hero-right">
        <Image
          src="/parth-hero.jpg"
          alt="Parth Bhanushali"
          fill
          priority
          quality={100}
          style={{
            objectFit: 'cover',
            objectPosition: '42% top',
            filter: 'contrast(1.12) brightness(0.93) saturate(1.2)',
          }}
        />
      </div>
    </section>
  );
}
