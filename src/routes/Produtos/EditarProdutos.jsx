import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";

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

    //Redirecionando após realizar a edição do produto filtrado
    navigate("/produtos");
  };

  return (
    <>
      <h1>EditarProdutos</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Chamdo Selecionado</legend>
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
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
      {/* <p>VALOR DO STATE - {produto}</p>
      <button onClick={() => setProduto("RÁDIO")}>ALTERANDO O VALOR DO STATE</button> */}
    </>
  );
}
