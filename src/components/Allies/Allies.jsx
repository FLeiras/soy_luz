import "./Allies.css";

export const Allies = () => {
  return (
    <section id="alianzas" className="allies">
      <div className="allies__content">
        <span className="section-label">Empresas y aliados</span>

        <h2>Las grandes transformaciones se construyen en equipo.</h2>

        <p>
          Invitamos a empresas, instituciones y organizaciones a formar parte de
          este proyecto de transformación humana, educación social y convivencia
          ciudadana.
        </p>
      </div>

      <div className="allies__card">
        <h3>Beneficios para aliados</h3>

        <ul>
          <li>Responsabilidad social corporativa</li>
          <li>Impacto positivo en colaboradores</li>
          <li>Mejora del clima laboral</li>
          <li>Participación comunitaria</li>
          <li>Proyectos sostenibles</li>
        </ul>

        <a href="#contacto" className="btn btn-gold">
          Quiero participar
        </a>
      </div>
    </section>
  );
};
