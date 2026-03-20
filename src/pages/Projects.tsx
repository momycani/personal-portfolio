import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <div className="projects__container">
        <h1 className="projects__title">Projects</h1>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}