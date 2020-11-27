import React from "react";
import { Link } from "../../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneSquareAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsappSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Wrapper, { Container } from './styles';

function Footer() {
  return (
    <Wrapper id="footer">
      <div className="container">
        <Container>
        <div className="row">
          <div className="col">
            <h5>Entre em Contato</h5>
            <a
              className="address"
              href="https://goo.gl/maps/xe5cKc2hCER1AJWs8"
              target="_blank"
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              R. Imaginária, Cidade de Deus 999, Jd Telesp 
              <br />
              Campinas - São Paulo | CEP 13052-426
            </a>
            <p>
              <FontAwesomeIcon icon={faPhoneSquareAlt} /> (19) 99187-3997
            </p>
            <p>
              <a
                href="https://api.whatsapp.com/send?phone=5519991873997"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsappSquare} /> (19) 99187-3997
              </a>
            </p>

            <p>
              <a href="mailto:atendimento@expressocargocamp.com.br">
                <FontAwesomeIcon icon={faEnvelope} />
                suporte@travel.com.br
              </a>
            </p>
          </div>
          <div className="col">
            <h5>Mapa do site</h5>
            <li>
              <Link route="/rodoviario">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link route="/aereo">
                <a>Sobre a empresa</a>
              </Link>
            </li>
            <li>
              <Link route="/ecommerce">
                <a>Viagem dos sonhos</a>
              </Link>
            </li>
            <li>
              <Link route="/expresso">
                <a>Contato</a>
              </Link>
            </li>
          </div>
          <div className="col">
            <h5>Contate-nos via WhatsApp</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5519991873997"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsappSquare} className="icon" />
            </a>
          </div>
        </div>
        </Container>
      </div>
      <div className="copyright">
        <p>
          © 2020 TRAVEL - Todos os direitos reservados | Desenvolvido por{" "}
          <a target="_blank">
            Grupo Mlkote
          </a>
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
