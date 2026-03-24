import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
  return (
    <main className="projects">
      <section className="projects__container">
        <h1 className="projects__title">My Work</h1>

        <p className="projects__subtitle">
          A selection of projects showcasing my work in React, TypeScript, and modern web development.
        </p>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}