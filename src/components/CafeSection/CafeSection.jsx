import "./CafeSection.css";
import {
  Coins,
  GraduationCap,
  UsersRound,
  HandHeart,
} from "lucide-react";

export const CafeSection = () => {
  return (
    <section className="cafe">
      <div className="cafe__info">
        <span className="cafe__label">
          Nuestro modelo sostenible
        </span>

        <h2>
          Un proyecto social con autonomía financiera
        </h2>

        <p>
          A través del Buffet Café Soy Luz generamos recursos propios
          para financiar nuestros programas educativos y comunitarios.
        </p>

        <a href="#contacto">
          Conoce nuestro modelo →
        </a>
      </div>

      <div className="cafe__center">
        <h3>
          Buffet Café
          <span>Soy Luz</span>
        </h3>

        <div className="cafe__features">
          <div>
            <Coins size={26} />
            <p>Genera recursos</p>
          </div>

          <div>
            <GraduationCap size={26} />
            <p>Realiza talleres</p>
          </div>

          <div>
            <UsersRound size={26} />
            <p>Encuentros comunitarios</p>
          </div>

          <div>
            <HandHeart size={26} />
            <p>Financia programas</p>
          </div>
        </div>

        <small>
          Cada visita al Café Soy Luz apoya directamente nuestras
          acciones sociales y educativas.
        </small>
      </div>

      <div className="cafe__image" />
    </section>
  );
}