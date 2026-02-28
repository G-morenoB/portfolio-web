import '../styles/hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <section className="img-button">
        <img src="src/img/Gael_img.jpeg" alt="Foto de Gael" className="img_Gael"></img>
        <button className="button-contact">Contactame para trabajar</button>
        </section>

        <h1>
         Hola, soy Gael <span className="accent"> Bataz</span>
        </h1>

        <h2 className="title">
          Construyo interfaces que no se juzgan por su cover…
        </h2>

        <p className="description">
          Desarrollador enfocado en crear productos digitales elegantes,
          funcionales y modernos.
        </p>
      </div>

      <div className="glow-circle"></div>
    </section>
  );
}

export default Hero;

