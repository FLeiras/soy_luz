import "./NavBar.css";
import { Heart, Menu } from "lucide-react";
import { navLinks } from "../../data/landingData";
import logoSoyLuz from "../../assets/logos/logo_soy_luz.png";

export const NavBar = () => {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__brand">
        <img src={logoSoyLuz} alt="Soy Luz" />
      </a>

      <nav className="navbar__links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contacto" className="navbar__cta">
        <Heart size={18} />
        Quiero ser aliado
      </a>

      <button className="navbar__menu" aria-label="Abrir menú">
        <Menu size={28} />
      </button>
    </header>
  );
}
