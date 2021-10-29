import React from 'react';
import {
  ContainerFooter,
  ContainerPayments,
  BoxFlags,
  ContainerContacts,
  Row,
  ContainerIcons,
  ContainerCopyrights,
} from './styles.js';
import logoMasterCard from '../../assets/mastercard-flag.png';
import logoVisa from '../../assets/visa-flag.png';
import logoElo from '../../assets/elo-flag.png';
import logoAmericanExpress from '../../assets/american-express-flag.png';

import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerPayments>
        <h4>FORMAS DE PAGAMENTO:</h4>
        <BoxFlags>
          <img src={logoMasterCard} alt="Logo MasterCard" />
          <img src={logoVisa} alt="Logo Visa" />
          <img src={logoElo} alt="Logo Elo" />
          <img src={logoAmericanExpress} alt="Logo American Express" />
        </BoxFlags>
      </ContainerPayments>
      <ContainerContacts>
        <h4>CONTATO</h4>
        <Row>
          <span>Redes Sociais:</span>
          <ContainerIcons>
            <i>
              <FaFacebookF size={30} />
            </i>
            <i>
              <FaInstagramSquare size={30} />
            </i>
            <i>
              <FaTwitter size={30} />
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
