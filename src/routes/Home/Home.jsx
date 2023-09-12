import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Home() {
  return (
    <>
      <section className="container">
        <main>
          <div className="conteudo">
            <img src="../public/logo-agile-modal.png" alt="Logo Agile Modal" />
            <p>
              O sistema proposto pela AGILE MODAL tem como objetivo resolver os
              desafios identificados durante o Challenge 2023 da Porto Seguro.
              Ele visa melhorar a consistência e rigor na captação de
              informações para a solicitação de modais adequados à demanda,
              abordar a falta de uma modalidade específica para veículos
              modificados. A solução consiste em desenvolver um sistema de
              chamados inteligente para a empresa Porto Seguro. O sistema
              permitirá o controle eficiente e organizado dos serviços de
              guincho prestados aos segurados, melhorando o processo de
              atendimento e proporcionando uma experiência melhor para os
              clientes e reduzindo possíveis retrabalhos em casos de envio do
              modal de guincho incorreto.
            </p>
            <button>
              <Link to="/chamados">Chamados</Link>
            </button>
          </div>
        </main>
      </section>
    </>
  );
}
