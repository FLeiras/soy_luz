import "./Pillars.css";
import {
  HeartHandshake,
  Leaf,
  Car,
  Users,
  Brain,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    title: "Cultura del Perdón",
    text: "Promovemos el perdón como herramienta de transformación personal y social.",
    icon: HeartHandshake,
  },
  {
    title: "Convivencia y Respeto",
    text: "Impulsamos buenas prácticas para fortalecer relaciones humanas saludables.",
    icon: Users,
  },
  {
    title: "Conciencia Ambiental",
    text: "Fomentamos el cuidado del entorno y de los espacios comunes.",
    icon: Leaf,
  },
  {
    title: "Educación Vial",
    text: "Formamos ciudadanos responsables, conscientes y humanos en la vía.",
    icon: Car,
  },
  {
    title: "Desarrollo Personal",
    text: "Creamos espacios para el autoconocimiento y la conciencia colectiva.",
    icon: Brain,
  },
  {
    title: "Transformación Social",
    text: "Convertimos valores en acciones concretas dentro de la comunidad.",
    icon: Sparkles,
  },
];

export const Pillars = () => {
  return (
    <section id="nosotros" className="section pillars">
      <div className="pillars__intro">
        <span className="section-label">Quiénes somos</span>
        <h2 className="section-title">
          Una organización para construir una convivencia más humana.
        </h2>
        <p>
          Soy Luz nace para contribuir al desarrollo humano, al fortalecimiento
          de los valores sociales y a la participación ciudadana consciente en
          Colombia.
        </p>
      </div>

      <div className="pillars__grid">
        {pillars.map(({ title, text, icon: Icon }) => (
          <article className="pillars__card" key={title}>
            <div className="pillars__icon">
              <Icon size={28} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}