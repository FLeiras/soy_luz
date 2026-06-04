import "./NavBar.css";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../../data/landingData";
import logoSoyLuz from "../../assets/logos/logo_soy_luz.png";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
        <img src={logoSoyLuz} alt="Soy Luz" />
      </a>

      <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a href="#contacto" className="navbar__mobile-cta" onClick={closeMenu}>
          <Heart size={18} />
          Quiero ser aliado
        </a>
      </nav>

      <a href="#contacto" className="navbar__cta">
        <Heart size={18} />
        Quiero ser aliado
      </a>

      <button
        className="navbar__menu"
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </header>
  );
};
