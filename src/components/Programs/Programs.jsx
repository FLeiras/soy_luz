import "./Programs.css";

import desarrolloHumanoImg from "../../assets/images/personal_developer.jpg";
import educacionVialImg from "../../assets/images/road_education.jpg";
import concienciaAmbientalImg from "../../assets/images/environment_awareness.jpg";
import ninosJovenesImg from "../../assets/images/children_learning.jpg";
import eventosComunitariosImg from "../../assets/images/community_gathering.jpg";
import programasEmpresarialesImg from "../../assets/images/corporate_training.jpg";

import {
  Brain,
  Car,
  Leaf,
  UsersRound,
  HandHeart,
  BriefcaseBusiness,
} from "lucide-react";

const programs = [
  {
    title: "Desarrollo Humano",
    text: "Talleres y formación para el crecimiento personal y emocional.",
    image: desarrolloHumanoImg,
    icon: Brain,
  },
  {
    title: "Educación Vial",
    text: "Formación para una movilidad responsable, segura y humana.",
    image: educacionVialImg,
    icon: Car,
  },
  {
    title: "Conciencia Ambiental",
    text: "Acciones educativas para el cuidado de nuestro planeta.",
    image: concienciaAmbientalImg,
    icon: Leaf,
  },
  {
    title: "Niños y Jóvenes",
    text: "Formación en valores, convivencia y prevención desde temprana edad.",
    image: ninosJovenesImg,
    icon: UsersRound,
  },
  {
    title: "Eventos Comunitarios",
    text: "Actividades en parques y espacios públicos para toda la comunidad.",
    image: eventosComunitariosImg,
    icon: HandHeart,
  },
  {
    title: "Programas Empresariales",
    text: "Talleres y conferencias para empresas e instituciones.",
    image: programasEmpresarialesImg,
    icon: BriefcaseBusiness,
  },
];

export const Programs = () => {
  return (
    <section id="programas" className="programs">
      <div className="programs__header">
        <span className="section-label">Nuestras líneas de acción</span>
        <h2>Educamos, formamos y acompañamos</h2>
      </div>

      <div className="programs__grid">
        {programs.map(({ title, text, image, icon: Icon }) => (
          <article className="programs__card" key={title}>
            <div className="programs__image">
              <img src={image} alt={title} />
              <div className="programs__icon">
                <Icon size={20} />
              </div>
            </div>

            <div className="programs__body">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
