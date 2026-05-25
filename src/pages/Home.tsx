import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Project & Operations Coordinator | Technical Background</p>
          <h1 className="hero__title">
            Hi, I'm Beth.
            <br />
            I build clean, responsive web experiences.
          </h1>
          <p className="hero__text">
            I create modern web applications using React and TypeScript, focusing on intuitive UI and seamless user experiences. Explore my work to see how I bring ideas to life through polished, user-friendly interfaces.
          </p>

          <div className="hero__buttons">
            <Link to="/projects" className="hero__button hero__button--primary">
              View Projects
            </Link>
          </div>          
        </div>     

        <div className="hero__collage">
  <a
    href="https://beth-mod-10-internship.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--main"
  >
    <img src="/summarist-home.png" alt="Summarist project" />
    <div>
      <span>Featured Project</span>
      <h3>Summarist</h3>
      <p>React • TypeScript • Firebase</p>
    </div>
  </a>

  <a
    href="https://mod-6-final-project.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--small hero__project-card--left"
  >
    <img src="/3593-v2.jpg" alt="Movie Explorer project" />
    <div>
      <h3>Movie Explorer</h3>
      <p>API • React • CSS</p>
    </div>
  </a>

  <a
    href="https://beth-skinstric-internship.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--small hero__project-card--right"
  >
    <img src="/skinstric_cover.jpg" alt="Skinstric project" />
    <div>
      <h3>Skinstric</h3>
      <p>React • TypeScript</p>
    </div>
  </a>
</div>

      </section>
    </main>
  );
}