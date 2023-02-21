import { Fragment, useEffect, useState } from "react";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Container from "./components/common/Container";
import Proyect from "./components/Proyect";
import Knowledge from "./components/Knowledge";
import Certificate from "./components/Certificate";

function App() {
  //   Home
  //            (Sobre mi, una foto de perfil, descargar CV)
  // Redes
  //             (poner mis redes sociales porque si
  // Experiencias
  //           (Las empresas donde e trabajado y descripcion)
  // Education
  //            (Todo, universidad, cursos, certificados, etc)
  // Conocimiento
  //             (lenguajes, breve descripcion de ello, frameworks y link del lenguaje)
  // Proyectos
  //            (Fotito, que hace, proposito y enlace de github)
  // contacto
  //             (Buscar recibir un correo y tal vez numero celular)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Fragment>
      <Home></Home>
      <Container id="conocimiento" title="Conocimientos" pos="center">
        <Knowledge {...windowSize} />
      </Container>
      <Container id="experiencia" title="Experiencia laboral">
        <WorkExperience />
      </Container>
      <Container id="estudios" title="Estudios" pos="end">
        <Certificate {...windowSize} />
      </Container>
      <Container id="proyectos" title="Proyectos">
        <Proyect />
      </Container>
    </Fragment>
  );
}

export default App;
