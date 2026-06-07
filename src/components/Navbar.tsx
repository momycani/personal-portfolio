import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#home" className="navbar__brand" aria-label="Go to home section">
          <span className="navbar__name">Elizabeth “Beth” Kenward</span>
          <span className="navbar__subtitle">
            Administrative & Operations Coordinator • Frontend Development
          </span>
        </a>

        <nav className="navbar__links" aria-label="Main navigation">
          <a href="#home" className="navbar__link">
            Home
          </a>

          <a href="#about" className="navbar__link">
            About
          </a>

          <a href="#projects" className="navbar__link">
            Projects
          </a>

          <a href="#contact" className="navbar__link">
            Contact
          </a>

          <a
            href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth,"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--cta"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}