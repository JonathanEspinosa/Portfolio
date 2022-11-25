import { v4 as uuidv4 } from "uuid";
import { Icarousel } from "./common/Common";
import Modal from "react-modal";
import { Fragment, useState } from "react";
import closeModalImg from "../assets/cerrar.svg";

function KnowledgeCarousel(carousel: Icarousel) {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  let { images, title } = carousel;
  let deg: number = 360 / images.length;
  let rotate = deg * -1;
  return (
    <Fragment>
      <div className="knowledge-container">
        <div className="knowledge-title" onClick={openModal}>
          {title}
        </div>
        <figure className="icon-cards carousel-logo ">
          <div
            className={`icon-cards__content 
          ${
            title === "Lenguajes"
              ? "languaje"
              : title === "Frameworks / DB"
              ? " framework"
              : "other"
          } `}
          >
            {images.map((logo) => {
              rotate += deg;
              return (
                <div
                  key={uuidv4()}
                  className="icon-cards__item   carousel-logo"
                  style={{
                    transform: `rotateY(${rotate}deg) translateZ(20vw) `,
                  }}
                >
                  <img className="carousel-logo" src={logo} alt={logo} />
                </div>
              );
            })}
          </div>
        </figure>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={modal}
        onRequestClose={closeModal}
        className="modal"
      >
        <div className="close-modal">
          <img src={closeModalImg} alt="cerrar modal" onClick={closeModal} />
        </div>
        <div className="modal-images">
          {images.map((logo) => (
            <img
              key={uuidv4()}
              className="carousel-logo in-modal "
              src={logo}
              alt={logo}
            />
          ))}
        </div>
      </Modal>
    </Fragment>
  );
}

export default KnowledgeCarousel;
