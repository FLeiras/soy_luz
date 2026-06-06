import "./WhatsAppFloat.css";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.link/73whra"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};
