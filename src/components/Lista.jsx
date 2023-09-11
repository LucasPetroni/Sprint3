import Cabecalho from "./Cabecalho";
import { Link } from "react-router-dom";

export default function Lista() {
  return (
    <>
      <Cabecalho>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Chamados</Link>
        </li>
        <li>
          <img
            src="../public/pessoa.png"
            alt="imagem de usuario"
            id="img-usuario"
            style={{ width: "100%", height: "30px" }}
          />
        </li>
      </Cabecalho>
    </>
  );
}
