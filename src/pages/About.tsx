// File: src/pages/About.tsx
import { useRef, useState } from "react";
import ProfilePic from "../assets/profile/3.jpg";

// ✅ Import logos directly from src/assets/logos
import CSS3 from "../assets/logos/CSS3.svg";
import Figma from "../assets/logos/Figma.svg";
import Firebase from "../assets/logos/Firebase.svg";
import Flutter from "../assets/logos/Flutter.svg";
import HTML5 from "../assets/logos/HTML5.svg";
import JavaScript from "../assets/logos/JavaScript.svg";
import MySQL from "../assets/logos/MySQL.svg";
import NodeJS from "../assets/logos/Node.js.svg";
import PayMongo from "../assets/logos/paymongo.png";
import PHP from "../assets/logos/PHP.svg";
import PostgresSQL from "../assets/logos/PostgresSQL.svg";
import ReactLogo from "../assets/logos/React.svg";
import Supabase from "../assets/logos/supabase.jpeg";
import Tailwind from "../assets/logos/Tailwind CSS.svg";
import TypeScript from "../assets/logos/TypeScript.svg";
import Vite from "../assets/logos/Vite.js.svg";

export default function About() {
  const logos = [
    { src: Supabase, alt: "Supabase" },
    { src: JavaScript, alt: "JavaScript" },
    { src: TypeScript, alt: "TypeScript" },
    { src: ReactLogo, alt: "React" },
    { src: MySQL, alt: "MySQL" },
    { src: PostgresSQL, alt: "PostgresSQL" },
    { src: HTML5, alt: "HTML5" },
    { src: CSS3, alt: "CSS3" },
    { src: NodeJS, alt: "Node.js" },
    { src: Vite, alt: "Vite" },
    { src: PHP, alt: "PHP" },
    { src: Tailwind, alt: "Tailwind CSS" },
    { src: Firebase, alt: "Firebase" },
    { src: Flutter, alt: "Flutter" },
    { src: Figma, alt: "Figma" },
    { src: PayMongo, alt: "PayMongo" },
  ];

  // Drag-to-scroll
  const laneRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState({ active: false, x: 0, left: 0 });

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = laneRef.current;
    if (!el) return;
    el.setPointerCapture?.(e.pointerId);
    setDrag({ active: true, x: e.clientX, left: el.scrollLeft });
    el.classList.add("paused");
  }
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = laneRef.current;
    if (!el || !drag.active) return;
    const dx = e.clientX - drag.x;
    el.scrollLeft = drag.left - dx;
    const contentW = el.scrollWidth / 3;
    if (el.scrollLeft < contentW) el.scrollLeft += contentW;
    if (el.scrollLeft > contentW * 2) el.scrollLeft -= contentW;
  }
  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    const el = laneRef.current;
    if (!el) return;
    setDrag((d) => ({ ...d, active: false }));
    el.releasePointerCapture?.(e.pointerId);
    el.classList.remove("paused");
  }

  const strip = [...logos, ...logos, ...logos];

  return (
    <section className="section about">
      <div className="bg-ornaments" aria-hidden>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="gridlines" />
      </div>

      <div className="container">
        {/* Title */}
        <h2 className="about-title big centered">About Me</h2>

        {/* Content grid */}
        <div className="about-grid">
          <div className="about-portrait">
            <img src={ProfilePic} alt="Jaydie portrait" />
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I’m Jaydie, a full-stack developer and IT student who loves
              building websites with clean design, solid code, and a focus on
              real user experience. Whether it’s front-end craft or practical
              back-end work, I care about accessibility, performance, and the
              details that make a project feel polished and human.
            </p>

            {/* Education */}
            <div className="about-section">
              <h3>Education</h3>
              <ul>
                <li>
                  <span className="edu-years">2021 – 2025</span>
                  <div className="edu-body">
                    <div className="edu-school">
                      University of Mindanao – Main
                    </div>
                    <div className="edu-degree">
                      Bachelor of Science in Information Technology
                    </div>
                  </div>
                </li>
                <li>
                  <span className="edu-years">2017 – 2019</span>
                  <div className="edu-body">
                    <div className="edu-school">
                      NDC – Tagum Foundation Inc.
                    </div>
                    <div className="edu-degree">
                      STEM (Science, Technology, Engineering & Mathematics)
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="about-section">
              <h3>Achievements</h3>
              <ul>
                <li>Dean&apos;s Lister (1st Year – 3rd Year)</li>
              </ul>
            </div>

            {/* Competitions */}
            <div className="about-section">
              <h3>Competitions</h3>
              <ul>
                <li>Participant: IT Olympiad 2024 – IT Quiz Bowl</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="technologies">
          <h3>Technologies</h3>
          <div
            className="ticker-logos interactive"
            ref={laneRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div className="ticker-long">
              {strip.map((l, i) => (
                <img
                  key={`${l.alt}-${i}`}
                  className="tech-logo"
                  src={l.src}
                  alt={l.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
