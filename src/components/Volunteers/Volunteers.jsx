import "./Volunteers.css";
import { HeartHandshake, Users, Sparkles } from "lucide-react";

const volunteerAreas = [
  {
    icon: HeartHandshake,
    title: "Acompañamiento comunitario",
    text: "Participá en acciones sociales, encuentros y actividades orientadas a fortalecer vínculos humanos.",
  },
  {
    icon: Users,
    title: "Apoyo en eventos",
    text: "Colaborá en ferias, conferencias, talleres y espacios de participación abiertos a la comunidad.",
  },
  {
    icon: Sparkles,
    title: "Comunicación y difusión",
    text: "Ayudanos a compartir el mensaje de Soy Luz y ampliar el alcance de cada iniciativa.",
  },
];

export const Volunteers = () => {
  return (
    <section id="voluntarios" className="volunteers">
      <div className="volunteers__content">
        <span className="section-label">Voluntarios</span>

        <h2>Sumate a construir una comunidad con propósito</h2>

        <p>
          Ser voluntario en Soy Luz es formar parte de una red de personas
          comprometidas con el desarrollo humano, la solidaridad y la
          transformación social.
        </p>

        <a
          href="https://wa.link/73whra"
          target="_blank"
          rel="noreferrer"
          className="volunteers__cta"
        >
          Quiero participar
        </a>
      </div>

      <div className="volunteers__cards">
        {volunteerAreas.map(({ icon: Icon, title, text }) => (
          <article className="volunteers__card" key={title}>
            <div className="volunteers__icon">
              <Icon size={24} />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
