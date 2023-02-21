import Carousel from "@itseasy21/react-elastic-carousel";
import {
  certificatesMiniature,
  Icertificate,
  IwindowSize,
} from "./common/Common";
import CertificateItem from "./CertificateItem";
import { v4 as uuidv4 } from "uuid";
import "./Certificate.css";

function Certificate(windowSize: IwindowSize) {
  let certificates: Icertificate[] = [
    {
      title: "Titulo Ing. Sistemas e Informática",
      image: certificatesMiniature.degree,
      url: "https://1drv.ms/b/s!Ati06OUNA2AOg_QKJdgcGoydyqTrNQ?e=RmFm8i",
    },
    {
      title: "Scrum Foundation Professional Certificate (SFPC)",
      image: certificatesMiniature.scrum,
      url: "https://onedrive.live.com/?authkey=%21AAjavMZk7YUwj2k&cid=0E60030DE5E8B4D8&id=E60030DE5E8B4D8%2164009&parId=E60030DE5E8B4D8%2164008&o=OneUp",
    },
    {
      title: "The Complete Full-Stack JavaScript Course",
      image: certificatesMiniature.javascript,
      url: "https://www.udemy.com/certificate/UC-715a79c1-170d-4293-a75a-90f311005462/",
    },
    {
      title: "Curso React - La Guía Completa Hooks Context Redux MERN",
      image: certificatesMiniature.react,
      url: "https://www.udemy.com/certificate/UC-09be0bdc-f557-4f3f-a898-d915f7a71f7c/",
    },
    {
      title: "Jonathan Espinosa-xamarin30",
      image: certificatesMiniature.xamarin,
      url: "https://onedrive.live.com/?authkey=%21ALKLDGfMta8e7%2D4&cid=0E60030DE5E8B4D8&id=E60030DE5E8B4D8%2116527&parId=E60030DE5E8B4D8%2164008&o=OneUp",
    },
    {
      title: "Curso de Introducción al Desarrollo Web HTML y CSS I",
      image: certificatesMiniature.web1,
      url: "https://onedrive.live.com/?authkey=%21AE6Zz8bAi4tkbko&cid=0E60030DE5E8B4D8&id=E60030DE5E8B4D8%2116534&parId=E60030DE5E8B4D8%2164008&o=OneUp",
    },
    {
      title: "Curso de Introducción al Desarrollo Web HTML y CSS II",
      image: certificatesMiniature.web2,
      url: "https://onedrive.live.com/?authkey=%21AGmLWBy%2Di3b73tA&cid=0E60030DE5E8B4D8&id=E60030DE5E8B4D8%2121128&parId=E60030DE5E8B4D8%2164008&o=OneUp",
    },
    {
      title: "Curso de Desarrollo de Apps Móviles",
      image: certificatesMiniature.appMovile,
      url: "https://onedrive.live.com/?authkey=%21ANQL7LhtTnQ9xQc&cid=0E60030DE5E8B4D8&id=E60030DE5E8B4D8%2121130&parId=E60030DE5E8B4D8%2164008&o=OneUp",
    },
  ];
  return (
    <div className="carousel">
      <Carousel
        isRTL={false}
        disableArrowsOnEnd={false}
        itemsToShow={
          windowSize?.width !== undefined && windowSize?.width <= 815
            ? 1
            : windowSize?.width > 815 && windowSize?.width <= 1285
            ? 3
            : 5
        }
      >
        {certificates.map((item) => {
          return <CertificateItem key={uuidv4()} {...item} />;
        })}
      </Carousel>
    </div>
  );
}

export default Certificate;
