import React, { useState, useEffect, useContext } from "react";
import imgLogo from "../../assets/image-logo-happyhour.png";
import { AuthContext } from "../../contexts/auth";
import imgPresentation300 from "../../assets/presentation-image-300.png";
import { useHistory } from "react-router-dom";
import { BACKEND } from "../../constants";
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
} from "./styles";
import {
  IoArrowDownCircle,
  IoDownload,
  IoPersonCircle,
  IoCheckbox,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { MdDeliveryDining, MdLocalBar } from "react-icons/md";

import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import ModalCarrinho from "../../components/ModalCarrinho/ModalCarrinho";

const Home = () => {
  const { getCookie } = useContext(AuthContext);
  const [isOpenCarrinho, setIsOpenCarrinho] = useState(false);
  const [listaOfertas, setListaOfertas] = useState();
  const history = useHistory();
  const token = getCookie("token");

  const stringUser = getCookie("user");
  const user = JSON.parse(stringUser);

  useEffect(() => {
    document.title = "HappyHour - Início";

    const loadData = async (url) => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "x-access-token": token,
        },
        mode: "cors",
      });
      const data = await response.json();
      const listaOfertas = data.filter((produto) => produto.isOferta);
      setListaOfertas(listaOfertas);
    };

    loadData(`${BACKEND}/produtos`);
  }, []);

  return (
    <div
      style={{ backgroundImage: "linear-gradient(-50deg, #125D98, #F5A962)" }}
    >
      <Nav>
        <Logo href="/">
          <img src={imgLogo} alt="Logo Site" />
        </Logo>
        <LinksList>
          <ItemList>
            <button onClick={() => setIsOpenCarrinho(true)}>
              &nbsp;CARRINHO
            </button>
          </ItemList>
          <ItemList>
            <button onClick={() => history.push("/products")}>
              &nbsp;PRODUTOS
            </button>
          </ItemList>
          <ItemList>
            {!token && (
              <button onClick={() => history.push("/signin")}>LOGIN</button>
            )}
          </ItemList>
          {token && (
            <ItemList>
              {user.nivelAcesso > 1 ? (
                <button onClick={() => history.push("/dashboardadm")}>
                  DASHBOARD
                </button>
              ) : (
                <button onClick={() => history.push("/dashboard")}>
                  DASHBOARD
                </button>
              )}
            </ItemList>
          )}
        </LinksList>
      </Nav>
      <Container>
        <ContainerPresentation>
          <DescriptionPresentation>
            <h1>FAÇA SEU PEDIDO ONLINE!</h1>
            <h4>Confira as ofertas disponíveis!</h4>
            <a href="#ofertas">
              <IoArrowDownCircle size={32} color={"#00389e"} />
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
          {listaOfertas?.map((produto, index) => (
            <Card key={index} produto={produto} />
          ))}
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
              <IoPersonCircle
                size={30}
                style={{ margin: "15px auto", color: "#00389e" }}
              />
              Cadastre sua conta para fazer seus pedidos.
            </span>
            <span>
              <IoDownload
                size={30}
                style={{ margin: "15px auto", color: "#00389e" }}
              />
              Faça seu login para realizar pedidos.
            </span>
            <span>
              <IoCheckbox
                size={30}
                style={{ margin: "15px auto", color: "#00389e" }}
              />
              Escolha o produto que deseja comprar!
            </span>
            <span>
              <MdDeliveryDining
                size={30}
                style={{ margin: "15px auto", color: "#00389e" }}
              />
              Informe seu endereço e receba seu pedido em casa!
            </span>
            <span>
              <MdLocalBar
                size={30}
                style={{ margin: "15px auto", color: "#00389e" }}
              />
              Aproveite seu pedido com conforto e sem precisar dirigir.
            </span>
          </ContainerItemsPedidos>

          <button
            onClick={() =>
              token ? history.push("/products") : history.push("/signin")
            }
          >
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
            muito mais. Com
          </p>
          <p>
            Com o momento em que estamos vivendo decidimos investir em
            tecnologia, e aderir ao e-commerce, visando a maior segurança e
            comodidade dos nossos clientes, parceiros e funcionários.
          </p>
          <p>
            Além do sistema delivery onde pode fazer o pedido em sua casa, você
            também pode vir até ao nosso estabelecimento comprar seus produtos
            presencialmente, seguindo as recomendações de segurança e limitação
            do número de pessoas no estabelecimento. Podendo mudar de acordo com
            as recomendações das instituições governamentais, prezando pela vida
            e pela saúde de nossos funcionários e clientes.
          </p>
        </ContainerQuemSomos>
        <Footer />
      </Container>
      <ModalCarrinho
        isOpenCarrinho={isOpenCarrinho}
        setIsOpenCarrinho={setIsOpenCarrinho}
      />
    </div>
  );
};

export default Home;
