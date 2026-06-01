import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import "../styles/contact.css";

export default function Contact() {
  return (
    <main id="contact" className="contact">
      <section className="contact__container">
        <p className="contact__eyebrow">Get in Touch</p>

        <h1 className="contact__title">
          Let&apos;s build something{" "}
          <span className="contact__highlight">useful.</span>
        </h1>

        <p className="contact__text">
          Have a project, role, or workflow that needs a clearer path forward?
          I&apos;d love to hear about it.
        </p>

        <div className="contact__buttons">
          <a
            href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth,"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__button contact__button--primary"
          >
            Send a message →
          </a>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="contact__button contact__button--secondary"
          >
            Back to top
          </button>
        </div>

        <div className="contact__icons">
          <a
            href="https://github.com/momycani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/elizabeth-kenward-4b123023a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth,"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
            aria-label="Email"
            title="Email"
          >
            <HiOutlineMail />
          </a>

          <a
            href="/Beth-Kenward-Resume-3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__icon"
            aria-label="Resume"
            title="Resume"
          >
            <HiOutlineDocumentText />
          </a>
        </div>
      </section>

      <footer className="contact__footer">
        <p>© 2026 Elizabeth “Beth” Kenward · Built with care.</p>
        <p>React · TypeScript · Designed & coded by Beth</p>
      </footer>
    </main>
  );
}