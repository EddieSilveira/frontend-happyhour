import React from "react";
import {
  ContainerFooter,
  ContainerPayments,
  ContainerContacts,
  Row,
  ContainerIcons,
  ContainerCopyrights,
} from "./styles.js";
import imgLogo from "../../assets/image-logo-happyhour.png";

import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Logo } from "../../pages/Home/styles.js";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerPayments>
        <Logo href="/">
          <img src={imgLogo} alt="Logo Site" />
        </Logo>
      </ContainerPayments>
      <ContainerContacts>
        <h4>CONTATO</h4>
        <Row>
          <span>Redes Sociais:</span>
          <ContainerIcons>
            <i>
              <FaFacebookF size={24} />
            </i>
            <i>
              <FaInstagramSquare size={24} />
            </i>
            <i>
              <FaTwitter size={24} />
            </i>
          </ContainerIcons>
        </Row>
        <Row>
          <span>Endereço:</span>
          <span>Rua Exemplo, 123. Bairro Teste</span>
        </Row>
        <Row>
          <span>E-mail:</span>
          <span>adegahappyhour@exemplo.com</span>
        </Row>
      </ContainerContacts>
      <ContainerCopyrights>
        <span>Copyright© 2021 - Todos os direitos reservados.</span>
      </ContainerCopyrights>
    </ContainerFooter>
  );
};

export default Footer;
