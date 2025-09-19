import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      {/* Media stage keeps a consistent 16:9 frame and preserves logos */}
      <div className="card-media">
        <img
          className="card-media-img"
          src={project.image}
          alt={`${project.title} cover`}
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>

        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="card-actions">
          {project.demo && (
            <a
              className="btn"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
          {project.repo && (
            <a
              className="btn ghost"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
