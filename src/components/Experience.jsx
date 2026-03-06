import '../styles/experience.css'

function Experience() {
  return (
    <section className="section_experience">
      <h2>Work Experience</h2>

      <div className="card-grid">
        <div className="card">
          <h3>Proyecto 1</h3>
          <p>Aplicación web moderna con React.</p>
        </div>

        <div className="card">
          <h3>Proyecto 2</h3>
          <p>Sistema CRUD con autenticación.</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;