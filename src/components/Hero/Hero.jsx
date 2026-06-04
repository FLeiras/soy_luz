import "./Hero.css";
import { Heart, PlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__eyebrow">Organización Soy Luz</span>

        <h1>
          Transformamos comunidades desde{" "}
          <strong>la conciencia, la educación y el respeto.</strong>
        </h1>

        <p>
          Desarrollo Humano, Convivencia Social y Transformación Ciudadana.
        </p>

        <div className="hero__actions">
          <a href="#contacto" className="btn btn-gold">
            <Heart size={18} />
            Quiero ser aliado
          </a>

          <a href="#nosotros" className="btn btn-outline">
            Conocer el proyecto
            <PlayCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
