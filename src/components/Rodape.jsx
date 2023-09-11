import "../styles/rodape.css";

export default function Rodape() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <img
            src="../public/logo-agile-modal-branco.png"
            alt="logo agile modal"
            id="img-footer"
          />

          <p>Todos os direitos reservados &copy;</p>

          <div id="links-footer">
            <a href="https://www.instagram.com/portoseguro/" target="_blank">
              <img
                src="../public/linkedin-logo.png"
                alt="logo instagram"
                id="logo-instagram"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/porto/?originalSubdomain=br"
              target="_blank"
            >
              <img
                src="../public/instagram-logo.png"
                alt="logo linkedin"
                id="logo-linkedin"
              />
            </a>

            <a href="https://www.portoseguro.com.br/" target="_blank">
              <img
                src="../public/logo-porto-seguro.png"
                alt="logo porto seguro"
                id="logo-porto"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
