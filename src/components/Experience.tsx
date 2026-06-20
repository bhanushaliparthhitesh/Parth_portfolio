"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "framer-motion";
import ShowCard, { Show } from "./ShowCard";
import showsStyles from "./ShowsSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const shows: Show[] = [
  {
    title: "TENET",
    genre: "ACTION · SCI-FI",
    type: "FILM",
    poster: "/shows/tenet-grid.jpg",
    favorite: true,
    description: "Nolan at his most ambitious — and most exhausting. The inversion mechanic is genuinely mind-bending, and the action sequences are unlike anything else on screen. But the film prioritizes spectacle over emotional stakes, leaving characters feeling thin. Worth watching for the craft alone, but don't expect to fully understand it on the first watch. 7.5/10",
  },
  {
    title: "PROJECT HAIL MARY",
    genre: "SCI-FI · ADVENTURE",
    type: "FILM",
    poster: "/shows/hailmary-poster.jpg",
    favorite: false,
    description: "One of the best sci-fi films in years. Ryan Gosling carries it brilliantly, and the story — adapted from Andy Weir's novel — balances hard science with real heart. The friendship at its core is surprisingly moving. If you liked The Martian, this hits even harder. 9/10",
  },
  {
    title: "FROM",
    genre: "HORROR",
    type: "TV SERIES",
    poster: "/shows/from-poster-v2.jpg",
    favorite: false,
    description: "Slow-burn horror done right. It builds dread methodically without cheap jump scares. The mystery deepens each season without feeling like it's stalling. If you're patient with it, it's genuinely unsettling. Just don't expect quick answers. 8/10",
  },
  {
    title: "MADGAON EXPRESS",
    genre: "COMEDY",
    type: "FILM",
    poster: "/shows/madgaon-poster.jpg",
    favorite: false,
    description: "A surprisingly sharp Bollywood comedy. Kunal Khemmu's directorial debut punches above its weight — the writing is tight, the trio's chemistry works, and it doesn't overstay its welcome. Great pick if you want a breezy, fun watch. 7.5/10",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Title Animation for multiple sections
    gsap.utils.toArray('.section-title-wrapper').forEach(wrapper => {
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

      <div className="section-divider"></div>

      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="line title-en">
            {Array.from("I love films").map((char, i) => (
              <span key={`films-en-${i}`} className={char === " " ? "" : "char"}>{char === " " ? "\u00A0" : char}</span>
            ))}
          </span>
          <span className="line title-hi">
            <span className="char">·</span>
            <span className="">&nbsp;</span>
            {["फ़ि", "ल्में"].map((char, i) => (
              <span key={`films-hi-${i}`} className="char">{char}</span>
            ))}
          </span>
        </h2>
      </div>

      <div className={showsStyles.mobileFlexContainer}>
        <div className={showsStyles.cardsRow}>
          {shows.map((show, index) => (
            <motion.div
              key={show.title}
              style={{ order: index * 2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <ShowCard show={show} index={index} />
            </motion.div>
          ))}
        </div>

        <div className={showsStyles.descriptionsRow}>
          {shows.map((show, index) => (
            <motion.div 
              key={`desc-${index}`}
              className={showsStyles.descColumn}
              style={{ order: index * 2 + 1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <p className={showsStyles.descText} style={{ whiteSpace: 'pre-line' }}>{show.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className={showsStyles.actionsRow}>
        <button className={showsStyles.seeFullListBtn}>SEE FULL LIST</button>
      </div>
    </section>
  );
}
