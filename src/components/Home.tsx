import "./Home.css";
import profile from "../assets/profile.png";
import { social } from "./common/Common";
function Home() {
  return (
    <div className="home">
      <div className="home-profile">
        <div className="card">
          <img className="profile" src={profile} alt="profile.png"></img>
          <span>
            <h1>Jonathan Espinosa</h1>
            <h2>Ing. Sistemas e Informatica | Desarrollador Web</h2>
            <span>
              <a
                href="https://www.linkedin.com/in/jonathan-espinosa-mieles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-img"
                  src={social.linkedin}
                  alt={social.linkedin}
                />
              </a>
              <a
                href="https://github.com/JonathanEspinosa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-img"
                  src={social.gitHubProfile}
                  alt={social.gitHubProfile}
                />
              </a>
            </span>
          </span>
        </div>

        <div className="card">
          <span className="about">
            <p>
              Bienvenido a mi portfolio, aquí podrás ver un poco de mí, los
              lenguajes y herramientas con los que estoy familiarizado y mi
              experiencia laboral.
            </p>
            <p>
              Acabo de titularme de Ing. Sistemas e Informática por mi amor
              hacia la tecnología y programación, si capto tu atención y tienes
              un lugar donde pueda continuar mi crecimiento profesional no dudes
              en llamarme, te aseguro buenos resultados.
            </p>
          </span>
          {/* <button onClick={() => {}}>Sobre mí</button> */}
        </div>
      </div>

      <div className="menu">
        <a href="#conocimiento">Conocimientos</a>
        <a href="#experiencia">Experiencia laboral</a>
        <a href="#estudios">Estudios</a>
        <a href="#proyectos">Proyectos</a>

        {/* <a href="#news">Formación académica</a> */}
        {/* <a href="#contact">Contacto</a> */}
      </div>
    </div>
  );
}

export default Home;
