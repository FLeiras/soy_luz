import "./MissionVision.css";
import { Eye, Target, Compass } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="mission-vision">
      <div className="mission-vision__header">
        <span className="section-label">Identidad institucional</span>
        <h2>Objeto social, misión y visión</h2>
      </div>

      <div className="mission-vision__grid">
        <article className="mission-vision__card mission-vision__card--featured">
          <div className="mission-vision__icon">
            <Target size={26} />
          </div>

          <span>Objeto Social</span>

          <p>
            Formar ciudadanos con principios y valores sociales, promoviendo el
            desarrollo humano, la conciencia ciudadana, la cultura del perdón,
            la vida en amor, la educación vial, el cuidado del medio ambiente y
            las buenas prácticas de convivencia social, a través de programas
            educativos, actividades comunitarias, acciones culturales, talleres,
            eventos y contenidos digitales.
          </p>
        </article>

        <article className="mission-vision__card">
          <div className="mission-vision__icon">
            <Compass size={26} />
          </div>

          <span>Misión</span>

          <p>
            Desarrollar programas educativos, culturales y sociales enfocados en
            el fortalecimiento de la conciencia humana, el respeto por la vida,
            la convivencia pacífica y la participación ciudadana, creando
            espacios de aprendizaje accesibles para todas las personas,
            especialmente aquellas con limitaciones económicas.
          </p>
        </article>

        <article className="mission-vision__card">
          <div className="mission-vision__icon">
            <Eye size={26} />
          </div>

          <span>Visión</span>

          <p>
            Convertirse en una organización referente en Colombia en procesos de
            transformación humana y convivencia social, mediante iniciativas
            sostenibles que impacten positivamente comunidades, instituciones
            educativas, empresas y espacios públicos.
          </p>
        </article>
      </div>
    </section>
  );
};
