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
        <div className="logo-row">
          <div className="logo">PB</div>
        </div>
        <div className="name-block">
          <h1 className="hero-name">
            <span className="line">
              <span className="char">P</span><span className="char">A</span><span className="char">R</span><span className="char">T</span><span className="char">H</span>
            </span>
            <span className="line">
              <span className="char">B</span><span className="char">H</span><span className="char">A</span><span className="char">N</span><span className="char">U</span><span className="char">S</span><span className="char">H</span><span className="char">A</span><span className="char">L</span><span className="char">I</span>
            </span>
          </h1>
          <p className="hero-tagline">
            <span style={{ opacity: 1, fontWeight: 500 }}>
              Some engineers wait until they know everything before they build.
            </span>
            {' '}
            <span style={{ opacity: 0.85 }}>
              I build to find out. ML systems, full-stack products, hardware firmware —
            </span>
            {' '}
            <span style={{ opacity: 0.7, fontStyle: 'italic' }}>
              if it&apos;s new territory, I&apos;m already halfway through it.
            </span>
          </p>
        </div>
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
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAACQYI/8QAIRAAAQQCAgMBAAAAAAAAAAAAAQIDBBEFEiExQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aqr5qt1NeaH0MiC6aDnOeQ5zSSSTuT3JPJJJJJJJERERERf/9k="
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
