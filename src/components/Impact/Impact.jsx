import "./Impact.css";
import { Building2, HeartHandshake, UsersRound } from "lucide-react";

const impactItems = [
  {
    title: "Impacto Social",
    icon: HeartHandshake,
    items: [
      "Mejor convivencia ciudadana",
      "Fortalecimiento de valores humanos",
      "Mayor conciencia ambiental",
    ],
  },
  {
    title: "Impacto Empresarial",
    icon: Building2,
    items: [
      "Equipos más unidos",
      "Comunicación interpersonal",
      "Cultura organizacional saludable",
    ],
  },
  {
    title: "Impacto Comunitario",
    icon: UsersRound,
    items: [
      "Participación ciudadana activa",
      "Integración familiar",
      "Inclusión educativa",
    ],
  },
];

export const Impact = () => {
  return (
    <section className="impact">
      <div className="impact__title">
        <span>Nuestro impacto</span>
        <h2>El cambio se construye todos los días</h2>
      </div>

      <div className="impact__cards">
        {impactItems.map(({ title, icon: Icon, items }) => (
          <article className="impact__card" key={title}>
            <div className="impact__icon">
              <Icon size={22} />
            </div>

            <div className="impact__content">
              <h3>{title}</h3>

              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
