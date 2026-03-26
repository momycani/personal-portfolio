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
          <p className="hero__eyebrow">Front-End Developer</p>
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

          <div className="hero__socials">
            <a
              href="https://github.com/momycani"
              target="_blank"
              rel="noreferrer"
              className="hero__icon"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/elizabeth-kenward-4b123023a/"
              target="_blank"
              rel="noreferrer"
              className="hero__icon"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth"
              className="hero__icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Send me an email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="/Beth-Kenward-Resume.pdf"
              className="hero__icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
            >
              <HiOutlineDocumentText />
            </a>
            
          </div>                
        </div>  
       
      </section>
    </main>
  );
}