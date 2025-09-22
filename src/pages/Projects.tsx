import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      {/* Minimal floating squares background */}
      <div className="projects-bg" aria-hidden>
        <div className="float-squares">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as React.CSSProperties} />
          ))}
        </div>
      </div>

      <div className="container stack gap-xl">
        <h2 className="section-title centered">Projects</h2>
        {/* Centered subtitle (kept narrow for nice measure) */}
        <p className="section-subtitle muted centered">
          Some of the work I’ve created and am polishing for production.
        </p>

        <div className="grid three">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
