import { Link } from "react-router-dom";
import logo from "../assets/logo-color.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Beth Kenward logo" className="navbar__logo rock" />
        </Link>

        <nav className="navbar__links">
          <Link to="/" className="navbar__link">Home</Link>
          <Link to="/about" className="navbar__link">About</Link>
          <Link to="/projects" className="navbar__link">Projects</Link>
          <a
            href="mailto:bethkenward3@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Beth,"
            className="navbar__link"
            target="_blank"
            rel="noopener noreferrer"
            title="Send me an email"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}