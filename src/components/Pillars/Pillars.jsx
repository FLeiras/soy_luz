import "./Pillars.css";
import {
  HeartHandshake,
  Heart,
  Leaf,
  Users,
  Car,
  Brain,
  Home,
  Target,
  Compass,
  Eye,
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    text: "El perdón como herramienta de transformación personal y social.",
  },
  { icon: Heart, text: "La vida en amor y respeto mutuo." },
  {
    icon: Leaf,
    text: "La conciencia ambiental y el cuidado de los espacios comunes.",
  },
  { icon: Users, text: "Las buenas prácticas de convivencia cotidiana." },
  { icon: Car, text: "La educación vial responsable y humana." },
  {
    icon: Home,
    text: "El fortalecimiento de las relaciones interpersonales y familiares.",
  },
  {
    icon: Brain,
    text: "El desarrollo del autoconocimiento y la conciencia colectiva.",
  },
];

const institutional = [
  {
    icon: Target,
    title: "Objeto Social",
    text: "Formar ciudadanos con principios y valores sociales, promoviendo el desarrollo humano, la conciencia ciudadana, la cultura del perdón, la vida en amor, la educación vial, el cuidado del medio ambiente y las buenas prácticas de convivencia social, a través de programas educativos, actividades comunitarias, acciones culturales, talleres, eventos y contenidos digitales.",
  },
  {
    icon: Compass,
    title: "Misión",
    text: "Desarrollar programas educativos, culturales y sociales enfocados en el fortalecimiento de la conciencia humana, el respeto por la vida, la convivencia pacífica y la participación ciudadana, creando espacios de aprendizaje accesibles para todas las personas, especialmente aquellas con limitaciones económicas.",
  },
  {
    icon: Eye,
    title: "Visión",
    text: "Convertirse en una organización referente en Colombia en procesos de transformación humana y convivencia social, mediante iniciativas sostenibles que impacten positivamente comunidades, instituciones educativas, empresas y espacios públicos.",
  },
];

export const Pillars = () => {
  return (
    <section id="quienes-somos" className="about">
      <div className="about__hero">
        <span className="section-label">Quiénes somos</span>

        <h2>
          Una organización para construir una convivencia más consciente,
          respetuosa y participativa.
        </h2>

        <p>
          La Organización Soy Luz nace con el propósito de contribuir al
          desarrollo humano, al fortalecimiento de los valores sociales y a la
          construcción de una convivencia más consciente, respetuosa y
          participativa dentro de la sociedad colombiana.
        </p>
      </div>

      <div className="about__principles">
        <div className="about__principles-text">
          <h3>Ciudadanos comprometidos con valores sociales</h3>

          <p>
            Nuestra organización tiene como eje principal la formación de
            ciudadanos comprometidos con:
          </p>
        </div>

        <div className="about__principles-grid">
          {principles.map(({ icon: Icon, text }) => (
            <article className="about__principle" key={text}>
              <Icon size={22} />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about__belief">
        <p>
          Creemos firmemente que la transformación social comienza desde el
          interior del ser humano y se fortalece mediante acciones educativas
          permanentes, accesibles y participativas.
        </p>
      </div>

      <div className="about__institutional">
        {institutional.map(({ icon: Icon, title, text }) => (
          <article className="about__institutional-card" key={title}>
            <div>
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
