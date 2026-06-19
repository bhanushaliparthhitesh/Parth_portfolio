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
            { title: "The Crux", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700", link: "https://music.apple.com/in/library/albums/l.Hz4Snjc", image: "/image copy.png" },
            { title: "The Indian Odyssey", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2", link: "https://music.apple.com/in/library/albums/l.dIgi2kh", image: "/image copy 2.png" },
            { title: "Scaled And Icy", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4", link: "https://music.apple.com/in/library/albums/l.tRxQcL7", image: "/image copy 3.png" },
            { title: "Yellow Paper Daisy", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1", link: "https://music.apple.com/us/album/yellow-paper-daisy/1584302048?i=1584302051", image: "/image copy 5.png" },
            { title: "Bad", subtitle: "APPLE MUSIC", logo: "apple", color: "#1E90FF", link: "https://music.apple.com/in/album/bad/559334659", image: "/image copy 4.png" },
            { title: "Dracula", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500", link: "https://music.apple.com/in/album/dracula/1842444456?i=1842444457", image: "/image.png" },
            // Duplicated to create the infinity scroll effect
            { title: "The Crux", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700", link: "https://music.apple.com/in/library/albums/l.Hz4Snjc", image: "/image copy.png" },
            { title: "The Indian Odyssey", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2", link: "https://music.apple.com/in/library/albums/l.dIgi2kh", image: "/image copy 2.png" },
            { title: "Scaled And Icy", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4", link: "https://music.apple.com/in/library/albums/l.tRxQcL7", image: "/image copy 3.png" },
            { title: "Yellow Paper Daisy", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1", link: "https://music.apple.com/us/album/yellow-paper-daisy/1584302048?i=1584302051", image: "/image copy 5.png" },
            { title: "Bad", subtitle: "APPLE MUSIC", logo: "apple", color: "#1E90FF", link: "https://music.apple.com/in/album/bad/559334659", image: "/image copy 4.png" },
            { title: "Dracula", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500", link: "https://music.apple.com/in/album/dracula/1842444456?i=1842444457", image: "/image.png" },
            // Duplicated again to ensure smooth endless feel
            { title: "The Crux", subtitle: "APPLE MUSIC", logo: "apple", color: "#FFD700", link: "https://music.apple.com/in/library/albums/l.Hz4Snjc", image: "/image copy.png" },
            { title: "The Indian Odyssey", subtitle: "APPLE MUSIC", logo: "apple", color: "#8A2BE2", link: "https://music.apple.com/in/library/albums/l.dIgi2kh", image: "/image copy 2.png" },
            { title: "Scaled And Icy", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF69B4", link: "https://music.apple.com/in/library/albums/l.tRxQcL7", image: "/image copy 3.png" },
            { title: "Yellow Paper Daisy", subtitle: "APPLE MUSIC", logo: "apple", color: "#00CED1", link: "https://music.apple.com/us/album/yellow-paper-daisy/1584302048?i=1584302051", image: "/image copy 5.png" },
            { title: "Bad", subtitle: "APPLE MUSIC", logo: "apple", color: "#1E90FF", link: "https://music.apple.com/in/album/bad/559334659", image: "/image copy 4.png" },
            { title: "Dracula", subtitle: "APPLE MUSIC", logo: "apple", color: "#FF4500", link: "https://music.apple.com/in/album/dracula/1842444456?i=1842444457", image: "/image.png" },
          ].map((playlist, idx) => (
            <a key={idx} href={playlist.link} target="_blank" rel="noopener noreferrer" className="music-card">
              <div className="music-art" style={{ background: `linear-gradient(135deg, ${playlist.color}22, ${playlist.color}88)` }}>
                {playlist.image && (
                  <img src={playlist.image} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
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
            </a>
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


      {/* Reading */}
      <div className="interest-sub">
        <div className="section-title-wrapper">
          <h2 className="section-title">
            <span className="line title-en">
              {Array.from("I love reading book").map((char, i) => (
                <span key={`en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </span>
            <span className="line title-hi">
              <span className="char">·</span>
              <span className="">&nbsp;</span>
              {["कि", "ता", "ब"].map((char, i) => (
                <span key={`hi-${i}`} className="char">{char}</span>
              ))}
            </span>
          </h2>
        </div>
        <div className="h-scroll-container music-scroll-bleed">
          {[
            { title: "Karmabhoomi", subtitle: "(कर्मभूमि)", author: "Munshi Premchand", pages: "454 pages", date: "Read: Jun 2026", rating: "4.0", color: "#D29864", image: "/books/karmabhoomi.png" },
            { title: "Too Good to Be True", subtitle: "", author: "Prajakta Koli", pages: "320 pages", date: "Read: Jun 2026", rating: "4.0", color: "#8DBCE0", image: "/books/toogoodtobetrue.jpg" },
            { title: "The Kite Runner", subtitle: "", author: "Khaled Hosseini", pages: "340 pages", date: "Read: May 2026", rating: "5.0", color: "#E88D41", image: "/books/kiterunner.jpg" },
            { title: "The Palace of Illusions", subtitle: "", author: "Chitra Banerjee Divakaruni", pages: "360 pages", date: "Read: Feb 2026", rating: "2.0", color: "#527E5A", image: "/books/palaceofillusions.png" },
            { title: "Lallan Sweets", subtitle: "", author: "Srishti Chaudhary", pages: "301 pages", date: "Read: Jan 2026", rating: "4.5", color: "#87AECF", image: "/books/lallansweets.png" },
            { title: "Norwegian Wood", subtitle: "", author: "Haruki Murakami", pages: "400 pages", date: "Read 3x", rating: "4.25", color: "#CC2729", image: "/books/norwegianwood.png" },
            { title: "The Forest of Enchantments", subtitle: "", author: "Chitra Banerjee Divakaruni", pages: "372 pages", date: "Read 3x", rating: "5.0", color: "#3D6343", image: "/books/forestofenchantments.jpg" },
            { title: "400 Days", subtitle: "", author: "Chetan Bhagat", pages: "344 pages", date: "Read: Nov 2025", rating: "3.0", color: "#D4B445", image: "/books/400days.png" }
          ].map((book, idx) => (
            <div key={idx} className="book-card" style={{ backgroundColor: `color-mix(in srgb, ${book.color} 15%, #FDFBF7)` }}>
              <div className="book-cover" style={{ backgroundColor: book.color }}>
                {book.image ? (
                  <img src={book.image} alt={book.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                ) : (
                  book.title
                )}
                <div className="book-rating" style={{ zIndex: 2 }}>
                  <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                  </svg>
                  {book.rating}
                </div>
              </div>
              <div className="book-info">
                <div className="book-title">{book.title} {book.subtitle && <span style={{fontSize: "0.8em", opacity: 0.8}}>{book.subtitle}</span>}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-meta">
                  <span className="book-meta-item">{book.pages}</span>
                  <span className="book-meta-item">{book.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
