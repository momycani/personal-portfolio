import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Front-End Developer</p>
          <h1 className="hero__title">
            Hi, I'm Beth.
            <br />
            I build clean, responsive web experiences.
          </h1>
          <p className="hero__text">
            I create modern websites and applications using React, TypeScript,
            and thoughtful UI design. Explore my work and see how I bring ideas
            to life through polished, user-friendly interfaces.
          </p>

          <div className="hero__buttons">
            <Link to="/projects" className="hero__button hero__button--primary">
              View Projects
            </Link>
            <Link to="/contact" className="hero__button hero__button--secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}