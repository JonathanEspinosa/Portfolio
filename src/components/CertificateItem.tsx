import { Icertificate } from "./common/Common";

function CertificateItem(certificate: Icertificate) {
  return (
    <div
      title="Ver certificado"
      className="miniature-container"
      onClick={() => window.open(certificate.url)}
    >
      <img
        className="miniature"
        src={certificate.image}
        alt={certificate.image}
      ></img>
      <div className="oblique">{certificate.title}</div>
    </div>
  );
}

export default CertificateItem;
