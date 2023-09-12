import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaChamados } from "../../components/ListaChamados";
import "../../styles/editarChamado.css";

export default function EditarChamados() {
  document.title = "Editar Chamados";

  const navigate = useNavigate();

  const { id } = useParams();

  const chamadoFiltrado = ListaChamados.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const [chamado, setChamado] = useState({
    id: chamadoFiltrado.id,
    nome: chamadoFiltrado.nome,
    desc: chamadoFiltrado.desc,
    img: chamadoFiltrado.img,
    endereco: chamadoFiltrado.endereco,
    situacao: chamadoFiltrado.situacao,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setChamado({ ...chamado, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;

    ListaChamados.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });

    ListaChamados.splice(indice, 1, produto);

    navigate("/chamados");
  };

  return (
    <>
      <div className="editar-chamado">
        <div className="container-editarChamado">
          <div class="container-tela">
            <h1>Editar Chamados</h1>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Chamado ID: {chamado.id}</legend>
                <div>
                  <label htmlFor="idNome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    id="idNome"
                    onChange={handleChange}
                    value={chamado.nome}
                  />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input
                    type="text"
                    name="desc"
                    id="idDesc"
                    onChange={handleChange}
                    value={chamado.desc}
                  />
                </div>
                <div>
                  <label htmlFor="idImg">Imagem</label>
                  <input
                    type="text"
                    name="Img"
                    id="idImg"
                    onChange={handleChange}
                    value={chamado.img}
                  />
                </div>
                <div>
                  <label htmlFor="idenderco">Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    id="idendereco"
                    onChange={handleChange}
                    value={chamado.endereco}
                  />
                </div>
                <div>
                  <label htmlFor="idsituacao">Situação</label>
                  <select
                    name="situacao"
                    id="idsituacao"
                    onChange={handleChange}
                    value={chamado.situacao}
                  >
                    <option value="Em Andamento">Em Andamento</option>
                    <option value="Concluído">Concluído</option>
                    <option value="Cancelado">Cancelado</option>
                  </select>
                </div>
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
