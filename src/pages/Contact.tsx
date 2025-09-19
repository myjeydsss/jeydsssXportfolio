// File: src/pages/Contact.tsx
import { useMemo, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  }

  // Precompute random dots once so the pattern is stable
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }).map(() => ({
        x: Math.random(), // 0..1
        y: Math.random(), // 0..1
        size: 4 + Math.random() * 6, // 4..10 px
        delay: -Math.random() * 30, // desync start
        duration: 18 + Math.floor(Math.random() * 12), // 18..30s
      })),
    []
  );

  return (
    <section id="contact" className="section contact">
      {/* Animated constellation background */}
      <div className="contact-bg constellation" aria-hidden>
        {dots.map((d, i) => (
          <span
            key={i}
            className="dot"
            style={
              {
                "--rand-x": d.x,
                "--rand-y": d.y,
                width: `${d.size}px`,
                height: `${d.size}px`,
                animationDelay: `${d.delay}s`,
                animationDuration: `${d.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="container">
        {/* Title + Subtitle */}
        <h2 className="section-title centered">Get in touch</h2>
        <p className="section-subtitle muted centered">
          I’m open to freelance, internships, and collaborations. Tell me about
          your idea.
        </p>

        <div className="contact-split">
          {/* LEFT: Info */}
          <aside className="c-info">
            <h3 className="c-kicker">Let’s talk</h3>
            <p className="muted">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything you’d like me to work on. You can
              contact me anytime.
            </p>
            <ul className="c-list">
              <li>
                <span className="chip">
                  <Mail size={16} />
                </span>
                <a href="mailto:ijaydieranes@gmail.com">
                  ijaydieranes@gmail.com
                </a>
              </li>
              <li>
                <span className="chip">
                  <Phone size={16} />
                </span>
                <a href="tel:+639510311448">+63 951 031 1448</a>
              </li>
              <li>
                <span className="chip">
                  <MapPin size={16} />
                </span>
                <span>Davao, Philippines</span>
              </li>
            </ul>
          </aside>

          {/* RIGHT: Form */}
          <form className={`form c-form neat ${status}`} onSubmit={onSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={6} required />
            </div>

            <div className="form-actions">
              <button className="btn ripple" disabled={status !== "idle"}>
                <Send size={16} />
                {status === "idle" && " Send"}
                {status === "sending" && " Sending…"}
                {status === "sent" && " Sent ✓"}
              </button>
            </div>

            {status === "sent" && (
              <p className="success">Thanks! I’ll get back to you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
