import { Link } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
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

export default function Produtos() {
  document.title = "Produtos";

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

            {ListaProdutos.map((item, indice) => (
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
                  <Link to={`/editar/produtos/${item.id}`}>
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
