import React from "react";
import "../../styles/integrantes.css";

export default function Integrantes() {
  const integrantes = [
    {
      nome: "Matheus Paulo Lima Delgado",
      rm: "552189",
      foto: "../public/matheusLima.jpeg",
    },
    { nome: "Lucas Petroni", rm: "97861", foto: "../public/lucasPetroni.jpeg" },
    { nome: "Caio Boris", rm: "552496", foto: "../public/caioBoris.jpeg" },
    {
      nome: "Nathaly Oliveira",
      rm: "552538",
      foto: "../public/nathalyOliveira.jpeg",
    },
  ];

  return (
    <>
      {/* <div className="repo-links">
        <a
          href="https://github.com/LucasPetroni/Sprint3"
          target="_blank"
          rel="noopener noreferrer"
          className="rep-link"
        >
          Link para o Repositório
        </a>
      </div> */}
      <div className="integrantes-container">
        {integrantes.map((integrante, index) => (
          <div key={index} className="integrante-card">
            <img
              src={integrante.foto}
              alt={integrante.nome}
              className="foto-integrante"
            />
            <div className="info-integrante">
              <span className="nome-integrante">{integrante.nome}</span>
              <span className="rm-integrante">RM: {integrante.rm}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
