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
              A solução proposta pela AGILE MODAL visa resolver os desafios
              identificados no Challenge 2023 da Porto Seguro. Ela busca
              aprimorar a consistência e precisão na coleta de informações para
              a solicitação de modais adequados à demanda, incluindo veículos
              modificados. Consiste no desenvolvimento de um sistema de chamados
              inteligente para a Porto Seguro, proporcionando um controle eficaz
              e organizado dos serviços de guincho oferecidos aos segurados.
              Isso resultará em uma melhoria no processo de atendimento, uma
              experiência aprimorada para os clientes e a redução de possíveis
              retrabalhos decorrentes do envio incorreto do modal de guincho. O
              site contará com integração de gerenciamento de chamados via
              chatbot no WhatsApp, facilitando a visualização e modificação dos
              registros pela equipe da Porto.
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
