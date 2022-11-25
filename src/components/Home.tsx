import "./Home.css";
import profile from "../assets/profile.png";
function Home() {
  return (
    <div className="home">
      <div style={{ display: "flex" }}>
        <div className="card">
          <img className="profile" src={profile} alt="profile.png"></img>
          <span>
            <h1>Jonathan Espinosa</h1>
            <h2>Ing. Sistemas e Informatica | Desarrollador Web</h2>
            
          </span>
        </div>

        <div style={{ margin: "auto" }}>
          {/* <button onClick={() => {}}>Sobre mí</button> */} 
        </div>
      </div>

      <div className="menu">

        <a href="#conocimiento">Conocimientos</a>
        <a href="#experiencia">Experiencia laboral</a>
        <a href="#proyectos">Proyectos</a>
        
        {/* <a href="#news">Formación académica</a> */}
        {/* <a href="#contact">Contacto</a> */}
      </div>
    </div>
  );
}

export default Home;
