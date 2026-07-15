import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects, type ProjectCategory } from "../data/projects";
import "../styles/projects.css";

type Filter = "all" | ProjectCategory;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Dashboards", value: "dashboards" },
  { label: "Apps", value: "apps" },
  { label: "Operations", value: "operations" },
  { label: "Clones", value: "clones" },
  { label: "Websites", value: "websites" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main id="projects" className="projects">
      <section className="projects__container">
        <div className="projects__header">
          <p className="projects__eyebrow">Selected Work</p>
          <h1 className="projects__title">My Work</h1>

          <p className="projects__subtitle">
            A selection of projects showcasing React, TypeScript, operations
            dashboards, practical web applications, and modern web development.
          </p>
        </div>

        <div className="projects__filters">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={
                activeFilter === filter.value
                  ? "projects__filter projects__filter--active"
                  : "projects__filter"
              }
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}