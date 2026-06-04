import "./Footer.css";
import { Heart, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__brand">
        <img src="./src/assets/logos/logo_soy_luz.png" alt="Soy Luz" />
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
        <a href="mailto:contacto@soyluz.org" className="btn btn-gold">
          <Mail size={17} />
          Contactar
        </a>

        <a href="#alianzas" className="btn btn-outline">
          <Heart size={17} />
          Ser aliado
        </a>
      </div>
    </footer>
  );
}
