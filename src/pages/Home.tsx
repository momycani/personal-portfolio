import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import "../styles/home.css";

export default function Home() {
  return (
    <main id="home" className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Frontend Developer · Operations Background
          </p>

          <h1 className="hero__title">
            Hi, I&apos;m Beth.
            <br />
            I build{" "}
            <span className="hero__highlight">clean, responsive</span>
            <br />
            web experiences.
          </h1>

          <p className="hero__text">
            I create modern web applications using React and TypeScript,
            focusing on intuitive UI and seamless user experiences — built on
            15+ years of keeping teams, workflows, and operations organized.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="hero__button hero__button--primary">
              View Projects
            </a>
            <a href="#about" className="hero__button hero__button--secondary">
              About Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/momycani"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icon"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/elizabeth-kenward-4b123023a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icon"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth,"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icon"
              aria-label="Email Beth"
              title="Email"
            >
              <HiOutlineMail />
            </a>

            <a
              href="/Beth-Kenward-Resume-3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__icon"
              aria-label="View Resume"
              title="Resume"
            >
              <HiOutlineDocumentText />
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>15+</strong>
              <span>Years in operations</span>
            </div>

            <div className="hero__stat">
              <strong>10+</strong>
              <span>Projects built</span>
            </div>

            <div className="hero__stat">
              <strong>9+</strong>
              <span>AI certifications</span>
            </div>
          </div>
        </div>

        <div className="hero__collage" aria-label="Featured projects">
          <a
            href="https://beth-mod-10-internship.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__project-card hero__project-card--main"
          >
            <img src="/summarist-home.png" alt="Summarist project preview" />
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
            <img src="/3593-v2.jpg" alt="Movie Explorer project preview" />
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
            <img src="/skinstric_cover.jpg" alt="Skinstric project preview" />
            <div>
              <h3>Skinstric</h3>
              <p>React • TypeScript</p>
            </div>
          </a>
        </div>
      </section>

      <section className="tech-marquee" aria-label="Technology stack">
  <div className="tech-marquee__track">
    {[
      "React",
      "TypeScript",
      "JavaScript",
      "Firebase",
      "REST APIs",
      "Vite",
      "Vercel",
      "Git",
      "GitHub",
      "HTML5",
      "CSS3",
      "React Router",
      "React",
      "TypeScript",
      "JavaScript",
      "Firebase",
      "REST APIs",
      "Vite",
      "Vercel",
      "Git",
      "GitHub",
      "HTML5",
      "CSS3",
      "React Router",
    ].map((skill, index) => (
      <span className="tech-marquee__item" key={`${skill}-${index}`}>
        {skill}
      </span>
    ))}
  </div>
</section>
    </main>
  );
}