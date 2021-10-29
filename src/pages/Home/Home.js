import React, { useEffect } from 'react';
import imgLogo from '../../assets/image-logo-happyhour.png';
import imgPresentation300 from '../../assets/presentation-image-300.png';
import {
  Nav,
  Logo,
  LinksList,
  ItemList,
  Container,
  ContainerPresentation,
  DescriptionPresentation,
  ImagePresentation,
  ContainerSectionOfertas,
  Title,
  ContainerSectionPedidos,
  ContainerItemsPedidos,
  ContainerQuemSomos,
} from './styles';
import {
  IoArrowDownCircle,
  IoDownload,
  IoPersonCircle,
  IoCheckbox,
  IoArrowForwardCircleSharp,
} from 'react-icons/io5';
import { MdDeliveryDining, MdLocalBar } from 'react-icons/md';

import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    document.title = 'HappyHour - Início';
  }, []);

  return (
    <div
      style={{ backgroundImage: 'linear-gradient(-50deg, #125D98, #F5A962)' }}
    >
      <Nav>
        <Logo href="/">
          <img src={imgLogo} alt="Logo Site" />
        </Logo>
        <LinksList>
          <ItemList>
            <a href="/">INICIO</a>
          </ItemList>
          <ItemList>
            <a href="/products">PRODUTOS</a>
          </ItemList>
          <ItemList>
            <a href="/signin">LOGIN</a>
          </ItemList>
        </LinksList>
      </Nav>
      <Container>
        <ContainerPresentation>
          <DescriptionPresentation>
            <h1>FAÇA SEU PEDIDO PELO APP!</h1>
            <h4>Confira as ofertas disponíveis!</h4>
            <a href="#ofertas">
              <IoArrowDownCircle size={32} color={'#00389e'} />
            </a>
          </DescriptionPresentation>
          <ImagePresentation>
            <img src={imgPresentation300} alt="Ilustração inicial" />
          </ImagePresentation>
        </ContainerPresentation>

        <ContainerSectionOfertas id="ofertas">
          <Title color="#00389e">
            <h2>PROMOÇÕES</h2>
          </Title>
          <Card />
          <Card />
          <Card />
        </ContainerSectionOfertas>

        <ContainerSectionPedidos>
          <Title color="#00389e">
            <h2>PEDIDOS</h2>
          </Title>
          <h5>
            Você pode fazer seu pedido pelo aplicativo e receber no conforto do
            seu lar!
          </h5>
          <ContainerItemsPedidos>
            <span>
              <IoDownload
                size={30}
                style={{ margin: '15px auto', color: '#00389e' }}
              />
              Baixe já nosso aplicativo na PlayStore!
            </span>
            <span>
              <IoPersonCircle
                size={30}
                style={{ margin: '15px auto', color: '#00389e' }}
              />
              Cadastre sua conta para fazer seus pedidos.
            </span>
            <span>
              <IoCheckbox
                size={30}
                style={{ margin: '15px auto', color: '#00389e' }}
              />
              Escolha o produto que deseja comprar!
            </span>
            <span>
              <MdDeliveryDining
                size={30}
                style={{ margin: '15px auto', color: '#00389e' }}
              />
              Informe seu endereço e receba seu pedido em casa!
            </span>
            <span>
              <MdLocalBar
                size={30}
                style={{ margin: '15px auto', color: '#00389e' }}
              />
              Aproveite seu pedido com conforto e sem precisar dirigir.
            </span>
          </ContainerItemsPedidos>

          <button>
            SAIBA MAIS&nbsp;
            <IoArrowForwardCircleSharp size={24} />
          </button>
        </ContainerSectionPedidos>

        <ContainerQuemSomos>
          <Title color="#eba200">
            <h2>QUEM SOMOS</h2>
          </Title>
          <p>
            Somos uma adega tradicional há mais de 10 anos no mercado oferecendo
            bebidas alcoólicas e sem alcool, alimentos, aperitivos, porções e
            muito mais.
          </p>
          <p>
            Além do sistema delivery onde pode fazer o pedido em sua casa, você
            também pode vir até ao nosso estabelecimento comprar seus produtos
            presencialmente, assim como também contamos com uma área para
            consumo, onde servimos de bebidas alcoólicas e não alcoólicas a
            porções.
          </p>
          <p>
            Contamos também com shows ao vivo de cantores e bandas locais para
            animar suas noites de fim de semana!
          </p>
          <p>
            Com a pandemia atualmente, o ambiente para consumo está restrito a
            uma pequena quantidade de pessoas(atualmente), podendo mudar de
            acordo com as recomendações das instituições governamentais,
            presando pela vida e pela saúde de nossos funcionários e clientes.
          </p>
        </ContainerQuemSomos>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
