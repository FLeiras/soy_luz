import "./Agenda.css";

export const Agenda = () => {
  const events = [
    {
      date: "15 JUN",
      title: "Encuentro Comunitario",
      description:
        "Espacio de reflexión y participación para fortalecer vínculos y construir comunidad.",
    },
    {
      date: "28 JUN",
      title: "Feria Solidaria",
      description:
        "Jornada abierta con actividades culturales, emprendimientos y acciones sociales.",
    },
    {
      date: "10 JUL",
      title: "Conferencia Bienestar Integral",
      description:
        "Charla orientada al desarrollo personal, emocional y comunitario.",
    },
  ];

  return (
    <section id="agenda" className="agenda">
      <div className="agenda__container">
        <span className="agenda__eyebrow">Agenda</span>

        <h2>Próximos encuentros y actividades de la comunidad</h2>

        <p className="agenda__intro">
          Conocé los próximos eventos, ferias y espacios de encuentro
          organizados por Soy Luz.
        </p>

        <div className="agenda__grid">
          {events.map((event) => (
            <article key={event.title} className="agenda__card">
              <div className="agenda__date">{event.date}</div>

              <h3>{event.title}</h3>

              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
