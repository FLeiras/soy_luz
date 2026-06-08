import "./Projects.css";

import {
  HandHeart,
  GraduationCap,
  Megaphone,
  Palette,
  UsersRound,
} from "lucide-react";

const projects = [
  {
    title: "Ferias comunitarias",
    text: "Espacios abiertos para compartir, conectar y promover iniciativas con impacto social.",
    icon: UsersRound,
  },
  {
    title: "Proyectos sociales activos",
    text: "Acciones orientadas a acompañar necesidades reales de la comunidad.",
    icon: HandHeart,
  },
  {
    title: "Campañas solidarias",
    text: "Iniciativas de colaboración para reunir recursos, apoyo y participación ciudadana.",
    icon: Megaphone,
  },
  {
    title: "Actividades educativas",
    text: "Propuestas de formación para fortalecer valores, convivencia y desarrollo humano.",
    icon: GraduationCap,
  },
  {
    title: "Eventos culturales",
    text: "Encuentros pensados para celebrar la identidad, el arte y la participación comunitaria.",
    icon: Palette,
  },
];

export const Projects = () => {
  return (
    <section id="proyectos" className="projects">
      <div className="projects__header">
        <span className="section-label">Ferias y proyectos</span>
        <h2>Acciones que construyen impacto positivo</h2>
        <p>
          Impulsamos actividades sociales, educativas y culturales que
          fortalecen la participación y el compromiso comunitario.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map(({ title, text, icon: Icon }) => (
          <article className="projects__card" key={title}>
            <div className="projects__icon">
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
