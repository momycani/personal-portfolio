
import "../styles/about.css";

export default function About() {
  return (
    <main className="about">
      <section className="about__container">
        <div className="about__header">
          <p className="about__eyebrow">About Me</p>
          <h1 className="about__title">Building thoughtful, user-friendly web experiences.</h1>
          <p className="about__intro">
            I'm Beth, a front-end developer focused on creating clean, responsive,
            and intuitive interfaces with React, TypeScript, and modern web tools.
          </p>
        </div>

        <div className="about__content">
          <div className="about__text">
            <p>
              I enjoy turning ideas into polished digital experiences that are both
              functional and visually clean. My projects focus on responsive design,
              clear user flows, and maintainable front-end code.
            </p>

            <p>
              I've built applications that include authentication, search, API
              integration, personal libraries, and subscription flows. I especially
              enjoy refining details, improving usability, and creating interfaces
              that feel smooth and approachable.
            </p>

            <p>
              I'm continuing to grow as a developer while building projects that
              strengthen both my technical skills and my eye for design. My goal is
              to contribute to meaningful products and create experiences people
              genuinely enjoy using.
            </p>
            <p>
              Outside of development, I enjoy creative activities like cooking, sewing, crafting, and gardening, as well as spending time outdoors and reading. These interests help me stay curious, detail-oriented, and thoughtful in how I approach building user experiences.</p>
          </div>

          <div className="about__image-wrapper">
            <img src="/headshot.jpg" alt="Beth Kenward" className="about__image" />
          </div>
       

          <aside className="about__card">
            <h2 className="about__card-title">Skills & Tools</h2>

            <div className="about__tags">
              <span className="about__tag">React</span>
              <span className="about__tag">TypeScript</span>
              <span className="about__tag">JavaScript</span>
              <span className="about__tag">Firebase</span>
              <span className="about__tag">CSS</span>
              <span className="about__tag">Responsive Design</span>
              <span className="about__tag">APIs</span>
              <span className="about__tag">Vercel</span>
              <span className="about__tag">GitHub</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}