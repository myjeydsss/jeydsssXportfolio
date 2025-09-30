import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProfilePic from "../assets/profile/Profile 2.jpg";
import Resume from "../assets/docs/Jaydie Ranes Resume.pdf";

export default function Home() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section hero hero-compact hero-anim">
      {/* Animated background (orbs + dot field) */}
      <div className="bg-ornaments" aria-hidden>
        <div className="orb orb-a parallax" />
        <div className="orb orb-b parallax slow" />
        <div className="dotfield" />
      </div>

      <div className="hero-center container">
        {/* Profile */}
        <div className="avatar-wrap medium glow">
          {!imgError ? (
            <img
              className="avatar"
              src={ProfilePic}
              alt="Jaydie Ranes profile"
              onError={() => setImgError(true)} // fallback if image fails
            />
          ) : (
            <div className="avatar-fallback">J</div>
          )}
          <div className="ring"></div>
        </div>

        {/* Text */}
        <p className="eyebrow snug">Hello, I’m Jaydie Ranes</p>
        <h1 className="headline hero-title shine">
          Crafting websites that look good, work smooth, and make sense to
          people.
        </h1>
        <p className="subhead hero-sub snug">
          I'm a full-stack web developer and IT student with a passion for clean
          code, thoughtful UI/UX, and creative design. I also dive into graphic
          design, bringing visuals and function together to build experiences
          people actually enjoy using.
        </p>

        {/* CTAs */}
        <div className="cta-row compact">
          <a
            className="btn pulse"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See Projects <ArrowRight size={18} />
          </a>
          <a
            className="btn ghost ripple"
            href={Resume}
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
