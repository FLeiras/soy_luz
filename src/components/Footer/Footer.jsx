import "./Footer.css";
import { Heart, Mail } from "lucide-react";
import logoSoyLuz from "../../assets/logos/logo_soy_luz.png";

export const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__brand">
        <img src={logoSoyLuz} alt="Soy Luz" />
      </div>

      <div className="footer__content">
        <span>Organización Soy Luz</span>

        <h2>Cada acción positiva genera una nueva luz.</h2>

        <p>
          Construyamos juntos una Colombia más consciente, participativa y
          humana.
        </p>
      </div>

      <div className="footer__actions">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@soyluz.org&su=Contacto%20Organizaci%C3%B3n%20Soy%20Luz"
          className="btn btn-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail size={17} />
          Email
        </a>

        <a href="#alianzas" className="btn btn-outline">
          <Heart size={17} />
          Ser aliado
        </a>
      </div>
    </footer>
  );
};
