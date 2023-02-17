import Carousel from "@itseasy21/react-elastic-carousel";
import { Background, Icertificate } from "./common/Common";
import CertificateItem from "./CertificateItem";
import { v4 as uuidv4 } from "uuid";
import "./Certificate.css";

function Certificate() {
  let certificates: Icertificate[] = [
    {
      title: "Titulo Ing. Sistemas e Informática",
      image: Background.djangoImg,
    },
    {
      title: "Curso de Desarrollo de Apps Móviles",
      image: Background.djangoImg,
    },
    {
      title: "Curso de Desarrollo de Apps Móviles",
      image: Background.djangoImg,
    },
    {
      title: "Curso de Introducción al Desarrollo Web HTML y CSS I",
      image: Background.djangoImg,
    },
    {
      title: "Curso de Introducción al Desarrollo Web HTML y CSS II",
      image: Background.djangoImg,
    },
    {
      title: "Curso React - La Guía Completa Hooks Context Redux MERN",
      image: Background.djangoImg,
    },
    {
      title: "Jonathan Espinosa-xamarin30",
      image: Background.djangoImg,
    },
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      image: Background.djangoImg,
    },
  ];

  return (
    <div className="carousel">
      <Carousel isRTL={false} disableArrowsOnEnd={false} itemsToShow={5}>
        {certificates.map((item) => {
          return <CertificateItem key={uuidv4()} {...item} />;
        })}
      </Carousel>
    </div>
  );
}

export default Certificate;
