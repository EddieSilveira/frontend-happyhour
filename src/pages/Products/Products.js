import React, { useState, useEffect, useContext } from "react";
import imgLogo from "../../assets/image-logo-happyhour.png";
import {
  ContainerApp,
  ContainerPage,
  WrapperNavbar,
  WrapperLinksNav,
  SectionOfertas,
  WrapperItensOferta,
  SectionProdutos,
  WrapperNavCategorias,
} from "./styles";
import {
  IoLogIn,
  IoCartSharp,
  IoBeer,
  IoWine,
  IoBeerOutline,
  IoBasketSharp,
  IoLogOut,
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import Card from "../../components/Card/Card";
import WrapperProdutos from "../../components/WrapperProdutos/WrapperProdutos.js";
import Footer from "../../components/Footer/Footer";
import ModalCarrinho from "../../components/ModalCarrinho/ModalCarrinho";
import { useOutsideModal } from "../../hooks/outsideModal";
import { AuthContext } from "../../contexts/auth";
import { useHistory } from "react-router-dom";

const Products = () => {
  const [viewCategoriaCerveja, setViewCategoriaCerveja] = useState(true);
  const [viewCategoriaDestilados, setViewCategoriaDestilados] = useState(false);
  const [viewCategoriaVinhos, setViewCategoriaVinhos] = useState(false);
  const [viewCategoriaNoAlcool, setViewCategoriaNoAlcool] = useState(false);
  const [viewCategoriaDiversos, setViewCategoriaDiversos] = useState(false);
  const { visible, setVisible, ref } = useOutsideModal;
  const [isOpenCarrinho, setIsOpenCarrinho] = useState(false);
  const user = localStorage.getItem("userAtivo");
  const history = useHistory();
  const { signOut, authenticated } = useContext(AuthContext);

  useEffect(() => {
    document.title = "HappyHour - Produtos";
  }, []);
  console.log(authenticated);
  return (
    <ContainerApp>
      <ContainerPage>
        <WrapperNavbar>
          <img src={imgLogo} type="image/png" href="/" alt="logo-happyhour" />

          <WrapperLinksNav>
            {user && (
              <button onClick={() => setIsOpenCarrinho(true)}>
                <IoCartSharp size={24} />
              </button>
            )}
            &nbsp;
            {user && (
              <button onClick={() => history.push("/dashboardadm")}>
                <MdDashboard size={24} />
              </button>
            )}
            &nbsp;
            {!user ? (
              <a href="/signin">
                <button>
                  <IoLogIn size={24} />
                </button>
              </a>
            ) : (
              <button onClick={signOut}>
                <IoLogOut size={24} />
              </button>
            )}
          </WrapperLinksNav>
        </WrapperNavbar>
        <SectionOfertas>
          <h2>Ofertas</h2>
          <WrapperItensOferta>
            <Card />
            <Card />
            <Card />
          </WrapperItensOferta>
        </SectionOfertas>
        <SectionProdutos>
          <WrapperNavCategorias>
            <button
              style={
                viewCategoriaCerveja
                  ? { color: "#eba200", border: "3px solid #eba200" }
                  : { color: "#00389e" }
              }
              onClick={() => {
                setViewCategoriaCerveja(true);
                setViewCategoriaDestilados(false);
                setViewCategoriaVinhos(false);
                setViewCategoriaNoAlcool(false);
                setViewCategoriaDiversos(false);
              }}
            >
              <IoBeer size={24} />
              &nbsp;Cerveja
            </button>
            <button
              style={
                viewCategoriaDestilados
                  ? { color: "#eba200", border: "3px solid #eba200" }
                  : { color: "#00389e" }
              }
              onClick={() => {
                setViewCategoriaCerveja(false);
                setViewCategoriaDestilados(true);
                setViewCategoriaVinhos(false);
                setViewCategoriaNoAlcool(false);
                setViewCategoriaDiversos(false);
              }}
            >
              <BiDrink size={24} />
              &nbsp;Destilados
            </button>
            <button
              style={
                viewCategoriaVinhos
                  ? { color: "#eba200", border: "3px solid #eba200" }
                  : { color: "#00389e" }
              }
              onClick={() => {
                setViewCategoriaCerveja(false);
                setViewCategoriaDestilados(false);
                setViewCategoriaVinhos(true);
                setViewCategoriaNoAlcool(false);
                setViewCategoriaDiversos(false);
              }}
            >
              <IoWine size={24} />
              &nbsp;Vinhos
            </button>
            <button
              style={
                viewCategoriaNoAlcool
                  ? { color: "#eba200", border: "3px solid #eba200" }
                  : { color: "#00389e" }
              }
              onClick={() => {
                setViewCategoriaCerveja(false);
                setViewCategoriaDestilados(false);
                setViewCategoriaVinhos(false);
                setViewCategoriaNoAlcool(true);
                setViewCategoriaDiversos(false);
              }}
            >
              <IoBeerOutline size={24} />
              &nbsp;Sem Alcool
            </button>
            <button
              style={
                viewCategoriaDiversos
                  ? { color: "#eba200", border: "3px solid #eba200" }
                  : { color: "#00389e" }
              }
              onClick={() => {
                setViewCategoriaCerveja(false);
                setViewCategoriaDestilados(false);
                setViewCategoriaVinhos(false);
                setViewCategoriaNoAlcool(false);
                setViewCategoriaDiversos(true);
              }}
            >
              <IoBasketSharp size={24} />
              &nbsp;Diversos
            </button>
          </WrapperNavCategorias>
          {viewCategoriaCerveja && <WrapperProdutos categoria="Cerveja" />}
          {viewCategoriaDestilados && <WrapperProdutos categoria="Destilado" />}
          {viewCategoriaVinhos && <WrapperProdutos categoria="Vinho" />}
          {viewCategoriaNoAlcool && <WrapperProdutos categoria="No-alcool" />}
          {viewCategoriaDiversos && <WrapperProdutos categoria="Diversos" />}
        </SectionProdutos>
        <Footer />
      </ContainerPage>
      <ModalCarrinho
        isOpenCarrinho={isOpenCarrinho}
        setIsOpenCarrinho={setIsOpenCarrinho}
      />
    </ContainerApp>
  );
};

export default Products;
