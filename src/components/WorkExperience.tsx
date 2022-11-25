import { Fragment } from "react";
import "./WorkExperience.css";

function WorkExperience() {
  return (
    <div className="work">
      <div className="work-container">
        <div className="bold">Pasante</div>
        <div className="oblique">SEDEMI S.A., Sangolqui</div>
        <div>
          Apoyo en proyectos de aplicaciones web para Talento Humano.
          <ul>
            <li> .NET: Visual Basic, C#</li>
            <li> Versionamiento: TFS</li>
            <li> Framework: DevExpress</li>
            <li> Base de datos: SQL Server</li>
            <li> Modelador de proceso: Bizagi</li>
          </ul>
        </div>
        <div className="work-time bold">
          <span>2019-08 - 2020-02</span>
          <span>6 meses</span>
        </div>
      </div>

      <div className="work-container">
        <div className="bold">Asistente de Desarrollo</div>
        <div className="oblique">SEDEMI S.A., Sangolqui</div>
        <div>
          Desarrollador de software para proyectos nuevos, mantenimiento y/o
          soporte de plataformas antiguas de Talento Humano.
          <ul>
            <li> .NET: Visual Basic, C#</li>
            <li> Versionamiento: TFS</li>
            <li> Framework: DevExpress</li>
            <li> Base de datos: SQL Server</li>
            <li> Modelador de proceso: Bizagi</li>
          </ul>
        </div>
        <div className="work-time bold">
          <span>2020-02 - 2020-08</span>
          <span>6 meses</span>
        </div>
      </div>

      <div className="work-container">
        <div className="bold">Consultor Técnico</div>
        <div className="oblique">Kruger Corporation, Quito</div>
        <div> 
          <ul>
            <li>
              Desarrollador full stack.
              <ul>
                <li>Front End: Angular</li>
                <li>Back End: Java (springboot)</li>
                <li>Base de datos: DB2</li>
              </ul>
            </li>
            <li>Versionamiento Git: Bitbucket</li>
            <li> Integración continua con Jenkins</li>
            <li>Evaluación de código con SonarQube</li>
            <li>Control de Sprint con Jira</li>
          </ul>
        </div>
        <div className="work-time bold">
          <span>2020-12 - 2022-06</span>
          <span>1 año 6 meses</span>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
