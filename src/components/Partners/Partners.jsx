import "./Partners.css";
import {
  HandCoins,
  Handshake,
  CalendarHeart,
  Presentation,
} from "lucide-react";

const partnerItems = [
  {
    title: "Patrocinios",
    icon: HandCoins,
  },
  {
    title: "Alianzas Estratégicas",
    icon: Handshake,
  },
  {
    title: "Eventos Conjuntos",
    icon: CalendarHeart,
  },
  {
    title: "Espacios de Capacitación",
    icon: Presentation,
  },
];

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__info">
        <span>Aliados que transforman</span>

        <h2>
          Las grandes transformaciones
          <br />
          se hacen en equipo.
        </h2>

        <p>
          Invitamos a empresas, instituciones y aliados estratégicos
          a formar parte de este proyecto de impacto social.
        </p>
      </div>

      <div className="partners__grid">
        {partnerItems.map(({ title, icon: Icon }) => (
          <article className="partners__item" key={title}>
            <Icon size={26} />
            <h3>{title}</h3>
          </article>
        ))}
      </div>

      <div className="partners__cta">
        <a href="#contacto" className="btn btn-gold">
          Quiero ser aliado
        </a>
      </div>
    </section>
  );
}