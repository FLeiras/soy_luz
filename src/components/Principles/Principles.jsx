import "./Principles.css";
import {
  HeartHandshake,
  Heart,
  Leaf,
  Users,
  Car,
  Brain,
  Home,
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    text: "El perdón como herramienta de transformación personal y social.",
  },
  {
    icon: Heart,
    text: "La vida en amor y respeto mutuo.",
  },
  {
    icon: Leaf,
    text: "La conciencia ambiental y el cuidado de los espacios comunes.",
  },
  {
    icon: Users,
    text: "Las buenas prácticas de convivencia cotidiana.",
  },
  {
    icon: Car,
    text: "La educación vial responsable y humana.",
  },
  {
    icon: Home,
    text: "El fortalecimiento de las relaciones interpersonales y familiares.",
  },
  {
    icon: Brain,
    text: "El desarrollo del autoconocimiento y la conciencia colectiva.",
  },
];

export const Principles = () => {
  return (
    <section className="principles">
      <div className="principles__header">
        <span className="section-label">Nuestros principios</span>

        <h2>
          Formación de ciudadanos comprometidos con una transformación positiva
          de la sociedad.
        </h2>

        <p>
          Nuestra organización tiene como eje principal la formación de
          ciudadanos comprometidos con:
        </p>
      </div>

      <div className="principles__grid">
        {principles.map(({ icon: Icon, text }) => (
          <article className="principles__card" key={text}>
            <div className="principles__icon">
              <Icon size={22} />
            </div>

            <p>{text}</p>
          </article>
        ))}
      </div>

      <div className="principles__footer">
        <p>
          Creemos firmemente que la transformación social comienza desde el
          interior del ser humano y se fortalece mediante acciones educativas
          permanentes, accesibles y participativas.
        </p>
      </div>
    </section>
  );
};
