import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.jsx";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">Dishant Modi's<br />Portfolio</NavLink>
      <NavLink to="/about" className={({ isActive }) => `navbar-link${isActive ? " active" : ""}`}>
        About
      </NavLink>
      <NavLink to="/works" className={({ isActive }) => `navbar-link${isActive ? " active" : ""}`}>
        Works
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => `navbar-link${isActive ? " active" : ""}`}>
        Contact
      </NavLink>
      <ThemeSwitcher />
    </nav>
  );
}
