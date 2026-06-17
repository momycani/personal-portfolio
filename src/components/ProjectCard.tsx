import type { Project } from "../data/projects";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  live,
  github,
}: Project) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img src={image} alt={`${title} preview`} className="project-card__image" />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tech.map((item) => (
            <span key={item} className="project-card__tag">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__button project-card__button--primary"
          >
            View Project
          </a>

          {github && (
  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="project-card__button project-card__button--secondary"
  >
    GitHub
  </a>
)}
        </div>
      </div>
    </article>
  );
}