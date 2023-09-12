import { Link } from "react-router-dom";
import { ListaChamados } from "../../components/ListaChamados";
import { AiFillEdit as Editar } from "react-icons/ai";
import "../../styles/chamados.css";

function getClassBySituacao(situacao) {
  switch (situacao) {
    case "Em Andamento":
      return "em-andamento";
    case "Cancelado":
      return "cancelado";
    case "Concluído":
      return "concluido";
    default:
      return "";
  }
}

export default function Chamados() {
  document.title = "Chamados";

  return (
    <>
      <div className="container-chamados">
        <h1>Lista de Chamados</h1>

        <div>
          <table className="Tabela">
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>ENDEREÇO</th>
              <th>SITUAÇÃO</th>
              <th>EDITAR</th>
            </tr>

            {ListaChamados.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={`${item.img}`} alt={`${item.desc}`} />
                </td>
                <td>{item.endereco}</td>
                <td className={getClassBySituacao(item.situacao)}>
                  {item.situacao}
                </td>
                <td>
                  <Link to={`/editar/chamados/${item.id}`}>
                    <Editar />
                  </Link>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
