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
          href="https://www.facebook.com/share/17thb92JNo/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/soyluzorg?igsh=cnlrMGpkbW5uOTdq"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://youtube.com/@soyluzorg?si=vJLIKNSL_l-nSQy3"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://tiktok.com/@soyluzorg"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
};
