import { FiAward } from "react-icons/fi";
import "../styles/about.css";

const certifications = [
  {
    title: "Frontend Simplified",
    source: "FES Institute",
    description: "Frontend Development Certificate",
    file: "/Frontend-Simplified-Certificate.pdf",
  },
  {
    title: "ChatGPT Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/ChatGPT.pdf",
  },
  {
    title: "Claude Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Claude.pdf",
  },
  {
    title: "Perplexity Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Perplexity.pdf",
  },
  {
    title: "Gemini Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Gemini.pdf",
  },
  {
    title: "Midjourney Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Midjourney.pdf",
  },
  {
    title: "Canva AI Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Canva-AI.pdf",
  },
  {
    title: "Veo Certification",
    source: "Coursiv.io",
    description: "Practical AI Tooling & Workflow Applications",
    file: "/Veo.pdf",
  },
  {
    title: "Kling Certification",
    source: "In Progress",
    description: "AI video generation workflow training",
    file: "",
  },
];

export default function About() {
  return (
    <main id="about" className="about">
      <section className="about__container">
        <div className="about__header">
          <p className="about__eyebrow">About Me</p>

          <h1 className="about__title">
            Coordinating projects and building thoughtful, user-friendly web
            experiences.
          </h1>

          <p className="about__intro">I’m an{" "}
            <span className="about__highlight">Administrative & Operations Coordinator</span>{" "}
            with 15+ years of experience supporting teams, managing details,
            improving workflows, and keeping business operations organized — with
            additional{" "}
            <span className="about__highlight">Frontend Development</span> skills in
            React and TypeScript.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              My professional background combines 15+ years of administrative, operations, HR, payroll, property, and workflow coordination experience with frontend development skills used to build practical digital projects that solve real business problems.
            </p>

            <p>
              Before transitioning into development, I worked in administrative,
              operations, property management, office management, and
              coordination-focused roles where I supported onboarding,
              scheduling, records management, payroll and timekeeping audits,
              compliance-related documentation, billing, tenant and client
              communication, and day-to-day business operations.
            </p>

            <p>
              Today, I bring that same organized, detail-oriented mindset into
              the applications I build. I use React, TypeScript, JavaScript,
              Firebase, REST APIs, HTML, CSS, GitHub, and Vercel to create
              responsive web applications focused on usability, structure, and
              practical functionality.
            </p>

            <p>
              Many of my projects reflect the type of work I’ve supported
              throughout my career, including dashboards, workflow systems,
              onboarding tools, project tracking, and interfaces that make
              information easier to manage and understand.
            </p>

            <p>
              Outside of development, I enjoy creative activities like cooking,
              sewing, crafting, and gardening, along with reading and spending
              time outdoors. These interests reinforce my attention to detail,
              creativity, and problem-solving, which I bring into my work as a
              developer.
            </p>
          </div>

          <aside className="about__profile-card">
            <img
              src="/headshot.jpg"
              alt="Elizabeth Beth Kenward"
              className="about__image"
            />

            <h2>Elizabeth “Beth” Kenward</h2>
            <p>Frontend Developer</p>
            <p>Project & Operations Coordinator</p>

            <div className="about__profile-details">
              <div>
                <span>Focus</span>
                <strong>React & TypeScript</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>15+ years</strong>
              </div>

              <div>
                <span>Based in</span>
                <strong>United States</strong>
              </div>

              <div>
                <span>Status</span>
                <strong className="about__status">Open to work</strong>
              </div>
            </div>
          </aside>
        </div>

        <section className="about__stats">
          <div>
            <strong>15+</strong>
            <span>Years in operations</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Projects built</span>
          </div>

          <div>
            <strong>9+</strong>
            <span>AI certifications</span>
          </div>
        </section>

        <section className="about__skills">
  <p className="about__eyebrow">Skills & Tools</p>

  <h2 className="about__skills-title">
    Administrative operations meets frontend craft.
  </h2>

  <div className="about__operations-tags">
    <span>Administrative Support</span>    
    <span>Operations Support</span>
    <span>Project Coordination</span>
    <span>Workflow Management</span>
    <span>Documentation Management</span>
    <span>Records Management</span>
    <span>Process Improvement</span>
    <span>Client Communication</span>    
    <span>Cross-Functional Collaboration</span>
    
  </div>

  <div className="about__tech-tags">
    <span>React</span>
    <span>TypeScript</span>
    <span>JavaScript</span>
    <span>REST APIs</span>
    <span>Firebase</span>
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Git</span>
    <span>GitHub</span>
    <span>Vercel</span>
  </div>
</section>

        <section className="about__certifications">
  <p className="about__eyebrow">Certifications & Learning</p>

  <h2 className="about__certifications-title">
    Always building practical skills.
  </h2>

  <div className="about__cert-grid">
    {certifications.map((cert) => (
      <article className="about__cert-card" key={cert.title}>
        <div className="about__cert-top">
          <div className="about__cert-icon">
            <FiAward />
          </div>

          <div>
            <h3>{cert.title}</h3>
            <p className="about__cert-source">{cert.source}</p>
          </div>
        </div>

        <p className="about__cert-description">{cert.description}</p>

        {cert.file ? (
          <a
            href={cert.file}
            target="_blank"
            rel="noreferrer"
            className="about__cert-link"
          >
            View Certificate →
          </a>
        ) : (
          <span className="about__cert-link about__cert-link--disabled">
            In Progress
          </span>
        )}
      </article>
    ))}
  </div>
</section>
      </section>
    </main>
  );
}