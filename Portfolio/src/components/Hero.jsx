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
         Hola, soy Gael <span className="lastname"> Bataz</span>
        </h1>

        <h2 className="description">
          <span className="accent"> Licenciado en Ciencias de la Computación</span> con enfoque en 
          desarrollo web y creación de productos digitales elegantes,
          funcionales y modernos.
        </h2>
      </div>

      <div className="glow-circle"></div>
    </section>
  );
}

export default Hero;

