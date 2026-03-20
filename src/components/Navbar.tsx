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
          <Link to="/contact" className="navbar__link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}