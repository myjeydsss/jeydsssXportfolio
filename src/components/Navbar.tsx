import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import Logo from "../assets/logos/logo4.png";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  // Initialize from DOM (set by head script) or localStorage; fallback to "dark"
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "light" || attr === "dark") return attr;
    }
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark")
        return saved as "light" | "dark";
    } catch {}
    return "dark";
  });

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Apply & persist theme whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  // Transparent on scroll
  useEffect(() => {
    const scroller =
      document.querySelector<HTMLElement>(".snap-container") || window;

    const onScroll = () => {
      const top =
        scroller instanceof Window
          ? window.scrollY
          : (scroller as HTMLElement).scrollTop;
      setScrolled(top > 8);
    };

    onScroll();
    scroller.addEventListener(
      "scroll",
      onScroll as any,
      { passive: true } as any
    );
    return () => scroller.removeEventListener("scroll", onScroll as any);
  }, []);

  // Track visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  function NavLink({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) {
    return (
      <button
        className={`linklike ${active === to ? "active" : ""}`}
        onClick={() => {
          scrollToId(to);
          setActive(to);
          setOpen(false);
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* LEFT: Animated logo */}
        <div className="nav-left">
          <button
            className="logo-btn linklike"
            onClick={() => scrollToId("home")}
            aria-label="Go to Home"
          >
            <div className="logo-wrap orbit">
              <img
                src={Logo}
                alt="JR logo"
                className="logo-photo"
                width={40}
                height={40}
              />
              <span className="orbit-ring" aria-hidden />
              <span className="orbit-spark" aria-hidden />
            </div>
          </button>
        </div>

        {/* CENTER: Page links */}
        <nav className={"links center " + (open ? "open" : "")}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="certificates">Certificates</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>

        {/* RIGHT: Theme toggle + hamburger (mobile) */}
        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="hamburger"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
