import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Language, Framework_DB, Others, Icarousel } from "./common/Common";
import "./Knowledge.css";
import KnowledgeCarousel from "./KnowledgeCarousel";

const carousel: Icarousel[] = [
  {
    title: "Lenguajes",
    images: [
      Language.typescriptImg,
      Language.cSharpImg,
      Language.visualBasicImg,
      Language.javaImg,
      Language.cPlusPlusImg,
      Language.pythonImg,
    ],
  },
  {
    title: "Frameworks / DB",
    images: [
      Framework_DB.reactImg,
      Framework_DB.angularImg,
      Framework_DB.djangoSoloImg,
      Framework_DB.DB2Img,
      Framework_DB.sqlImg,
      Framework_DB.mysqlImg,
      Framework_DB.potgressImg,
    ],
  },
  {
    title: "Otros",
    images: [
      Others.html_css_js_bootstrapImg,
      Others.primeNgImg,
      Others.jiraImg,
      Others.gitHubImg,
      Others.bitbucketImg,
      Others.jenkinsImg,
      Others.sonarqubeImg,
      Others.bizagiImg,
      Others.mqttImg,
      Others.mosquittoImg,
      Others.visualStudioCodeImg,
      Others.visualStudioImg,
    ],
  },
];
function Knowledge() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const handleResize = () => {
    console.log("event");
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
    <div className="knowledge">
      {carousel.map((item) => (
        <KnowledgeCarousel key={uuidv4()} {...item} windowSize={windowSize} />
      ))}
    </div>
  );
}

export default Knowledge;
