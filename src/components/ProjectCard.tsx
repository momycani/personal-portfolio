type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  live,
  github,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tech.map((item, index) => (
            <span key={index} className="project-card__tag">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__links">
            <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className="project-card__button project-card__button--primary"
            >
                Live Demo
            </a>
            <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="project-card__button project-card__button--secondary"
            >
                GitHub
            </a>
        </div>
      </div>
    </div>
  );
}