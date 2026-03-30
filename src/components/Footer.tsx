import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__socials">
          <a
            href="https://github.com/momycani"
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/elizabeth-kenward-4b123023a/"
            target="_blank"
            rel="noreferrer"
            className="footer__icon"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <HiOutlineMail />
          </a>

          <a
            href="/Beth-Kenward-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
          >
            <HiOutlineDocumentText />
          </a>
        </div>
      </div>
    </footer>
  );
}