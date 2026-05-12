import "../styles/about.css";
import { FaAward } from "react-icons/fa";

export default function About() {
  return (
    <main className="about">
      <section className="about__container">
        <div className="about__header">
          <p className="about__eyebrow">About Me</p>

          <h1 className="about__title">
            Coordinating projects and building thoughtful, user-friendly web
            experiences.
          </h1>

          <p className="about__intro">
            I'm Beth, a Frontend Developer and Project & Operations Coordinator
            with a background in workflow management, process improvement,
            administrative support, and building practical applications that
            solve real business problems.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              My professional background combines front-end development with
              more than 15 years of experience supporting operations,
              coordinating workflows, managing documentation, improving
              organizational processes, and helping teams stay organized across
              multiple industries.
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
              Many of my projects reflect the type of work I have supported
              throughout my career, including dashboards, workflow systems,
              onboarding tools, project tracking, documentation tools, and
              user-friendly interfaces that make information easier to manage
              and understand.
            </p>

            <p>
              I have built applications that include authentication, API
              integrations, searchable data, personal libraries, workflow
              tracking, responsive layouts, and clean front-end architecture. I
              enjoy refining details, improving user flows, and creating tools
              that feel polished, approachable, and useful.
            </p>

            <p>
              I am also continuing to expand my knowledge in AI-assisted
              workflows and productivity tools. I have completed certifications
              in ChatGPT and Claude through Coursiv.io and I am currently
              working on a Perplexity certification focused on practical AI
              research and productivity.
            </p>

            <p>
              Outside of development, I enjoy cooking, sewing, crafting,
              gardening, reading, and spending time outdoors. These creative
              interests help me stay curious, detail-oriented, and thoughtful in
              how I approach problem-solving, design, and user experience.
            </p>
          </div>

          <div className="about__image-wrapper">
            <img
              src="/headshot.jpg"
              alt="Beth Kenward"
              className="about__image"
            />
          </div>

          <aside className="about__card">
            <h2 className="about__card-title">Skills & Tools</h2>

            <div className="about__tags">
              <span className="about__tag">Project Coordination</span>
              <span className="about__tag">Operations Support</span>
              <span className="about__tag">Workflow Management</span>
              <span className="about__tag">Process Improvement</span>
              <span className="about__tag">Administrative Support</span>
              <span className="about__tag">Documentation Management</span>
              <span className="about__tag">Cross-Functional Collaboration</span>
              <span className="about__tag">Client Communication</span>
              <span className="about__tag">React</span>
              <span className="about__tag">TypeScript</span>
              <span className="about__tag">JavaScript</span>
              <span className="about__tag">REST APIs</span>
              <span className="about__tag">Firebase</span>
              <span className="about__tag">HTML5</span>
              <span className="about__tag">CSS3</span>
              <span className="about__tag">Git</span>
              <span className="about__tag">GitHub</span>
              <span className="about__tag">Vercel</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="about__certifications">
        <h2 className="about__certifications-title">
          Certifications & Learning
        </h2>

        <div className="about__certifications-list">
          <div className="about__certification">
            <div className="about__certification-header">
              <FaAward className="about__certification-icon" />

              <div>
                <p className="about__certification-name">
                  Frontend Simplified (FES Institute)
                </p>

                <p className="about__certification-detail">
                  Frontend Development Certificate
                </p>
              </div>
            </div>

            <a
              href="/fes-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__certification-link"
            >
              View Certificate
            </a>
          </div>

          <div className="about__certification">
            <div className="about__certification-header">
              <FaAward className="about__certification-icon" />

              <div>
                <p className="about__certification-name">
                  ChatGPT Certification — Coursiv.io
                </p>

                <p className="about__certification-detail">
                  Practical AI Tooling & Workflow Applications
                </p>
              </div>
            </div>

            <a
              href="/ChatGPT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__certification-link"
            >
              View Certificate
            </a>
          </div>

          <div className="about__certification">
            <div className="about__certification-header">
              <FaAward className="about__certification-icon" />

              <div>
                <p className="about__certification-name">
                  Claude Certification — Coursiv.io
                </p>

                <p className="about__certification-detail">
                  Practical AI Tooling & Workflow Applications
                </p>
              </div>
            </div>

            <a
              href="/Claude.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__certification-link"
            >
              View Certificate
            </a>
          </div>

          <div className="about__certification">
            <div className="about__certification-header">
              <FaAward className="about__certification-icon" />

              <div>
                <p className="about__certification-name">
                  Perplexity Certification — Coursiv.io
                </p>

                <p className="about__certification-detail">
                  Practical AI Research & Productivity Tooling
                </p>

                <p className="about__certification-status">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}