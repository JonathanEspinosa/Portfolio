import { Fragment, useState } from "react";
import Home from "./components/Home";
import WorkExperience from "./components/WorkExperience";
import Container from "./components/common/Container";
import Proyect from "./components/Proyect";
import Knowledge from "./components/Knowledge";

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

  return (
    <Fragment>
      <Home></Home>

      <Container id="conocimiento" title="Conocimientos" pos="center">
        <Knowledge />
      </Container>

      <Container id="experiencia" title="Experiencia laboral">
        <WorkExperience />
      </Container>

      <Container id="proyectos" title="Proyectos" pos="end">
        <Proyect />
      </Container>
      {/* <Container title="Formación académica" pos="end">
        <WorkExperience />
      </Container> */}
    </Fragment>
  );
}
{
  /* style={{backgroundColor:"#133549"}} >  */
}

export default App;
