import "./Proyect.css";
import Carousel from "@itseasy21/react-elastic-carousel";
import { v4 as uuidv4 } from "uuid";
import ProyectItem from "./ProyectItem";
import { Iproyect } from "./common/Common";
import { Background, Language, Framework_DB, Others } from "./common/Common";

function Proyect() {
  let proyects: Iproyect[] = [
    {
      title: "Snake",
      description: `Clasico juego del “Snake” desarrollado como aplicacion de escritorio
      mediante una interfaz gráfica en visual Studio C++ para la
      utilización de conocimientos en listas simples o doblemente
      enlazadas. El proyecto consta de manejo de archivos planos y
      punteros para el uso de listas.`,
      image: Background.snakeImg,
      toolsImg: [Others.visualStudioImg, Language.cPlusPlusImg],
      gitUrl: "https://github.com/JonathanEspinosa/Snake-C-plus-plus",
    },
    {
      title: "Arquitectura de supervisión de consumo energético basada en IoT",
      description: `Arquitectura que permita monitorizar y controlar el consumo 
      energético en edificios, utilizando dispositivos IoT.
      Aplicación web que a travez de microservicios y uso del protocolo mqtt interactua con 
      dispositivos IoT para la supervicion energetica.`,
      image: Background.iotImg,
      toolsImg: [
        Framework_DB.potgressImg,
        Background.djangoImg,
        Others.mqttImg,
        Others.mosquittoImg,
        Framework_DB.angularImg,
        Others.primeNgImg,
        Background.tsJsImg,
      ],
      gitUrl: "https://github.com/JonathanEspinosa/iot-web",
    },
  ];

  return (
    <div className="carousel">
      <Carousel isRTL={false} disableArrowsOnEnd={false}>
        {proyects.map((item) => {
          return <ProyectItem key={uuidv4()} {...item} />;
        })}
      </Carousel>
    </div>
  );
}

export default Proyect;
