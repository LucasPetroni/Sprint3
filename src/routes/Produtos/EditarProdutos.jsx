import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";
import "../../styles/editarChamado.css";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const navigate = useNavigate();

  const { id } = useParams();

  const produtoFiltrado = ListaProdutos.filter(
    (item) => item.id === parseInt(id)
  )[0];

  const [produto, setProduto] = useState({
    id: produtoFiltrado.id,
    nome: produtoFiltrado.nome,
    desc: produtoFiltrado.desc,
    img: produtoFiltrado.img,
    endereco: produtoFiltrado.endereco,
    situacao: produtoFiltrado.situacao,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;

    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });

    ListaProdutos.splice(indice, 1, produto);

    navigate("/produtos");
  };

  return (
    <>
      <div className="editar-produto">
        <div className="container-editarProduto">
          <div class="container-tela">
            <h1>Editar Chamados</h1>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Chamado ID: {produto.id}</legend>
                <div>
                  <label htmlFor="idNome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    id="idNome"
                    onChange={handleChange}
                    value={produto.nome}
                  />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input
                    type="text"
                    name="desc"
                    id="idDesc"
                    onChange={handleChange}
                    value={produto.desc}
                  />
                </div>
                <div>
                  <label htmlFor="idImg">Imagem</label>
                  <input
                    type="text"
                    name="Img"
                    id="idImg"
                    onChange={handleChange}
                    value={produto.img}
                  />
                </div>
                <div>
                  <label htmlFor="idenderco">Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    id="idendereco"
                    onChange={handleChange}
                    value={produto.endereco}
                  />
                </div>
                <div>
                  <label htmlFor="idsituacao">Situação</label>
                  <select
                    name="situacao"
                    id="idsituacao"
                    onChange={handleChange}
                    value={produto.situacao}
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
