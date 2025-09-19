// File: src/pages/Certificates.tsx
import { useEffect, useMemo, useRef, useState } from "react";

// ===== ITS (SVG) =====
import itsCyber from "../assets/certificates/ITS - Cybersecurity.svg";
import itsDB from "../assets/certificates/ITS - Database.svg";
import itsHTML from "../assets/certificates/ITS - HTML & CSS.svg";
import itsNetSec from "../assets/certificates/ITS - Network Security.svg";
import itsNetworking from "../assets/certificates/ITS - Networking.svg";

// ===== Seminars (JPG) =====
import sem1 from "../assets/certificates/1.jpg";
import sem2 from "../assets/certificates/2.jpg";
import sem3 from "../assets/certificates/3.jpg";
import sem4 from "../assets/certificates/4.jpg";
import sem5 from "../assets/certificates/5.jpg";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
};

/* ========= DATA ========= */
const itsCerts: Certificate[] = [
  {
    id: 1,
    title: "ITS – Cybersecurity",
    issuer: "Certiport",
    date: "2024",
    image: itsCyber,
  },
  {
    id: 2,
    title: "ITS – Database",
    issuer: "Certiport",
    date: "2024",
    image: itsDB,
  },
  {
    id: 3,
    title: "ITS – HTML & CSS",
    issuer: "Certiport",
    date: "2024",
    image: itsHTML,
  },
  {
    id: 4,
    title: "ITS – Network Security",
    issuer: "Certiport",
    date: "2025",
    image: itsNetSec,
  },
  {
    id: 5,
    title: "ITS – Networking",
    issuer: "Certiport",
    date: "2025",
    image: itsNetworking,
  },
];

const seminarCerts: Certificate[] = [
  {
    id: 101,
    title: "Seminar Certificate 1",
    issuer: "Workshops / Seminars",
    date: "2023",
    image: sem1,
  },
  {
    id: 102,
    title: "Seminar Certificate 2",
    issuer: "Workshops / Seminars",
    date: "2023",
    image: sem2,
  },
  {
    id: 103,
    title: "Seminar Certificate 3",
    issuer: "Workshops / Seminars",
    date: "2024",
    image: sem3,
  },
  {
    id: 104,
    title: "Seminar Certificate 4",
    issuer: "Workshops / Seminars",
    date: "2024",
    image: sem4,
  },
  {
    id: 105,
    title: "Seminar Certificate 5",
    issuer: "Workshops / Seminars",
    date: "2025",
    image: sem5,
  },
];

/* ========= COMPONENT ========= */
export default function Certificates() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const itsRef = useRef<HTMLDivElement | null>(null);
  const semRef = useRef<HTMLDivElement | null>(null);

  // 3x strips (endless)
  const stripITS = useMemo(() => [...itsCerts, ...itsCerts, ...itsCerts], []);
  const stripSem = useMemo(
    () => [...seminarCerts, ...seminarCerts, ...seminarCerts],
    []
  );

  // Start each lane near the mid copy so seams are off-screen
  useEffect(() => {
    const init = (el: HTMLDivElement | null) => {
      if (!el) return;
      requestAnimationFrame(() => {
        el.scrollLeft = el.scrollWidth / 3 + 1;
      });
    };
    init(itsRef.current);
    init(semRef.current);
  }, []);

  // Esc closes modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setActiveCert(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certificates" className="section certificates">
      {/* Subtle animated background (complements Contact, not identical) */}
      <div className="certificates-bg" aria-hidden>
        <div className="cert-orb a" />
        <div className="cert-orb b" />
        <div className="cert-grid" />
      </div>

      <div className="container stack gap-xl">
        <h2 className="section-title centered">Certificates</h2>
        <p className="muted centered">
          Grouped into <b>IT Specialist</b> and <b>Seminars &amp; Workshops</b>.
          Click to preview.
        </p>

        {/* ITS */}
        <div className="cert-section">
          <h3 className="cert-subtitle">Information Technology Specialist</h3>
          <div
            className="cert-ticker interactive"
            ref={itsRef}
            aria-label="ITS certificates ticker"
          >
            <div className="cert-strip" style={{ animationDuration: "28s" }}>
              {stripITS.map((c, i) => (
                <button
                  key={`${c.id}-${i}`}
                  type="button"
                  className="cert-card small"
                  onClick={() => setActiveCert(c)}
                  aria-label={`Open ${c.title}`}
                >
                  <img
                    className="cert-thumb"
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                  />
                  <p className="cert-title">{c.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Seminars */}
        <div className="cert-section">
          <h3 className="cert-subtitle">Seminars &amp; Workshops</h3>
          <div
            className="cert-ticker interactive"
            ref={semRef}
            aria-label="Seminars and workshops ticker"
          >
            <div className="cert-strip" style={{ animationDuration: "34s" }}>
              {stripSem.map((c, i) => (
                <button
                  key={`${c.id}-${i}`}
                  type="button"
                  className="cert-card small"
                  onClick={() => setActiveCert(c)}
                  aria-label={`Open ${c.title}`}
                >
                  <img
                    className="cert-thumb"
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                  />
                  <p className="cert-title">{c.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div
            className="modal modal-full"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCert.title} preview`}
          >
            <button
              className="modal-close"
              onClick={() => setActiveCert(null)}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>
            <img
              className="modal-image-full"
              src={activeCert.image}
              alt={activeCert.title}
            />
            <div className="modal-caption">
              <h3>{activeCert.title}</h3>
              <p className="muted">
                {activeCert.issuer} · {activeCert.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
