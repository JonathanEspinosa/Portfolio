import "./Proyect.css";

import { Others, Iproyect } from "./common/Common";
import { v4 as uuidv4 } from "uuid";

function ProyectItem(proyect: Iproyect) {
  return (
    <div className="proyect">
      <div className="proyect-title">{proyect.title}</div>
      <div className="container">
        <img className="image" src={proyect.image} alt={proyect.image}></img>
        <div className="description">
          <p>{proyect.description}</p>
          <div className="logo">
            <span style={{ display: "inherit" }}>
              {proyect.toolsImg.map((tool: string) => {
                return (
                  <img
                    key={uuidv4()}
                    className="logo"
                    height={50}
                    src={tool}
                  ></img>
                );
              })}
            </span>
            <span>
              <a
                href={proyect.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo git" height={50} src={Others.gitHubImg} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectItem;
