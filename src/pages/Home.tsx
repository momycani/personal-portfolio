import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import "../styles/home.css";

export default function Home() {
  return (
    <main id="home" className="home">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">
  Project & Administrative Coordination • Frontend Tools
</p>

<h1 className="hero__title">
  Hi, I'm Beth. I organize work, support teams, and build{" "}
  <span>practical digital tools.</span>
</h1>

<p className="hero__text">
  I bring 15+ years of administrative, operations, HR, payroll, property,
  documentation, and workflow coordination experience, along with React and
  TypeScript skills used to build organized, responsive digital projects. I
  recently completed the Procore Project Manager certification to strengthen my
  construction project coordination knowledge.
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
    href="https://projectops-dashboard.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--main"
  >
    <div className="hero__project-image">
      <img src="/projectops.png" alt="ProjectOps Dashboard preview" />
    </div>

    <div className="hero__project-copy">
      <span>Featured Project</span>
      <h3>ProjectOps Dashboard</h3>
      <p>Project Tracking • Risk Logs • Status Updates</p>
    </div>
  </a>

  <a
    href="https://docuflow-template-manager.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--small hero__project-card--left"
  >
    <div className="hero__project-image">
      <img src="/docuflow.png" alt="DocuFlow Template Manager preview" />
    </div>

    <div className="hero__project-copy">
      <h3>DocuFlow</h3>
      <p>Templates • Documentation • Workflow</p>
    </div>
  </a>

  <a
    href="https://client-onboarding-workflow-dashboar.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="hero__project-card hero__project-card--small hero__project-card--right"
  >
    <div className="hero__project-image">
      <img
        src="/clientonboarding.png"
        alt="Client Onboarding Workflow Dashboard preview"
      />
    </div>

    <div className="hero__project-copy">
      <h3>Client Onboarding</h3>
      <p>Milestones • Tasks • Client Tracking</p>
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