import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/chamados.css";

function getClassBySituacao(situacao) {
  switch (situacao) {
    case "FIN":
      return "finalizado";
    case "INI":
      return "iniciado";
    case "PRO":
      return "processando";
    default:
      return "";
  }
}

export default function Chamados() {
  const [listaChamados, setListaChamados] = useState([]);

  useEffect(() => {
    fetch("localhost:8080/agilemodal/chamados", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((listaChamadosJson) => {
        setListaChamados(listaChamadosJson);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  document.title = "Chamados";

  const siglaParaPalavraCompleta = {
    FIN: "Finalizado",
    INI: "Iniciado",
    PRO: "Processando",
  };

  return (
    <>
      <div className="container-chamados">
        <h1>Lista de Chamados</h1>

        <div>
          <table className="Tabela">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PLACA</th>
                <th>DESCRIÇÃO</th>
                <th>ENDEREÇO</th>
                <th>SITUAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              {listaChamados.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.placa}</td>
                  <td>{item.desc}</td>
                  <td>{item.endereco}</td>
                  <td className={getClassBySituacao(item.situacao)}>
                    {siglaParaPalavraCompleta[item.situacao]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
