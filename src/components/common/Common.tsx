import snakeImg from "../../assets/snake.png";
import visualStudioImg from "../../assets/visual-Studio.png";
import cPlusPlusImg from "../../assets/C++.png";
import iotImg from "../../assets/iot.png";
import angularImg from "../../assets/angular.png";
import djangoImg from "../../assets/django.png";
import mosquittoImg from "../../assets/mosquitto.png";
import potgressImg from "../../assets/potgress.png";
import tsJsImg from "../../assets/ts-js.png";
import gitHubImg from "../../assets/gitHub.png";

import bitbucketImg from "../../assets/bitbucket.png";
import bizagiImg from "../../assets/bizagi.png";
import cSharpImg from "../../assets/c-sharp.png";
import DB2Img from "../../assets/DB2.png";
import djangoSoloImg from "../../assets/django-solo.png";
import html_css_js_bootstrapImg from "../../assets/html_css_js_bootstrap.png";
import javaImg from "../../assets/java.png";
import jenkinsImg from "../../assets/jenkins.png";
import jiraImg from "../../assets/jira.png";
import mqttImg from "../../assets/mqtt.png";
import mysqlImg from "../../assets/mysql.png";
import primeNgImg from "../../assets/primeNg.png";
import pythonImg from "../../assets/python.png";
import reactImg from "../../assets/react.png";
import sonarqubeImg from "../../assets/sonarqube.png";
import sqlImg from "../../assets/sql.png";
import typescriptImg from "../../assets/typescript.png";
import visualStudioCodeImg from "../../assets/visual_Studio_Code.png";
import visualBasicImg from "../../assets/visual-basic.png";
import linkedin from "../../assets/linkedin.png";
import gitHubProfile from "../../assets/gitHubProfile.png";

import appMovile from "../../assets/certificates/Desarrollo-de-Apps-Moviles.jpg";
import web1 from "../../assets/certificates/Desarrollo-Web-HTML-y-CSS-I.jpg";
import web2 from "../../assets/certificates/Desarrollo-Web-HTML-y-CSS-II.jpg";
import react from "../../assets/certificates/React.jpg";
import scrum from "../../assets/certificates/Scrum-Foundation-Professional-Certificate-(SFPC).jpg";
import javascript from "../../assets/certificates/The-Complete-Full-Stack-JavaScript-Course.jpg";
import degree from "../../assets/certificates/Titulo-Ing-Sistemas-e-Informatica.jpg";
import xamarin from "../../assets/certificates/xamarin.jpg";

export const certificatesMiniature = {
  appMovile,
  web1,
  web2,
  react,
  scrum,
  javascript,
  degree,
  xamarin,
};

export const social = {
  linkedin,
  gitHubProfile,
};

export const Language = {
  typescriptImg,
  cSharpImg,
  visualBasicImg,
  javaImg,
  cPlusPlusImg,
  pythonImg,
};

export const Framework_DB = {
  reactImg,
  angularImg,
  djangoSoloImg,
  DB2Img,
  sqlImg,
  mysqlImg,
  potgressImg,
};
export const Others = {
  html_css_js_bootstrapImg,
  primeNgImg,
  jiraImg,
  gitHubImg,
  bitbucketImg,
  jenkinsImg,
  sonarqubeImg,
  bizagiImg,
  mqttImg,
  mosquittoImg,
  visualStudioCodeImg,
  visualStudioImg,
};

export const Background = { iotImg, djangoImg, snakeImg, tsJsImg };

export interface Icarousel {
  title: string;
  images: string[];
  windowSize?: IwindowSize;
}
export interface IwindowSize {
  width: number;
  height: number;
}

export interface Iproyect {
  title: string;
  description: string;
  image: string;
  toolsImg: string[];
  gitUrl: string;
}

export interface Icertificate {
  title: string;
  image: string;
  url: string;
}
