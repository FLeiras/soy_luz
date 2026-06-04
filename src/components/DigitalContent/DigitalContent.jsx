import "./DigitalContent.css";

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export const DigitalContent = () => {
  return (
    <section className="digital">
      <div className="digital__leaf" />

      <span className="digital__label">Educación que ilumina</span>

      <h2>
        Contenido digital gratuito
        <br />
        para todos
      </h2>

      <p>
        Creamos contenido educativo y reflexivo sobre desarrollo humano,
        convivencia, educación vial, conciencia ambiental y transformación
        personal.
      </p>

      <div className="digital__socials">
        <a
          href="#"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="#"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}
