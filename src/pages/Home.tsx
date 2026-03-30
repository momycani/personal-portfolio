import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
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
      </section>
    </main>
  );
}