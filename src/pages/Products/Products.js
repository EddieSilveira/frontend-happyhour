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
  WrapperBarraPesquisa,
} from "./styles";
import {
  IoLogIn,
  IoCartSharp,
  IoBeer,
  IoWine,
  IoBeerOutline,
  IoBasketSharp,
  IoLogOut,
  IoHomeSharp,
  IoSearchSharp,
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
import { BACKEND } from "../../constants";

const Products = () => {
  const [viewCategoriaCerveja, setViewCategoriaCerveja] = useState(true);
  const [viewCategoriaDestilados, setViewCategoriaDestilados] = useState(false);
  const [viewCategoriaVinhos, setViewCategoriaVinhos] = useState(false);
  const [viewCategoriaNoAlcool, setViewCategoriaNoAlcool] = useState(false);
  const [viewCategoriaDiversos, setViewCategoriaDiversos] = useState(false);
  const [listaOfertas, setListaOfertas] = useState();
  const [filtroPesquisa, setFiltroPesquisa] = useState();
  const { visible, setVisible, ref } = useOutsideModal;
  const [isOpenCarrinho, setIsOpenCarrinho] = useState(false);
  const history = useHistory();
  const { signOut, getCookie } = useContext(AuthContext);
  const token = getCookie("token");
  const stringUser = getCookie("user");
  const user = JSON.parse(stringUser);

  useEffect(() => {
    document.title = "HappyHour - Produtos";

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
      const ofertasFiltradas = listaOfertas?.filter((produto) => {
        if (
          produto.nome.toLowerCase().includes(filtroPesquisa) ||
          produto.categoria.toLowerCase().includes(filtroPesquisa)
        ) {
          return produto;
        }
      });
      if (filtroPesquisa) setListaOfertas(ofertasFiltradas);
      if (!filtroPesquisa) setListaOfertas(listaOfertas);
    };

    loadData(`${BACKEND}/produtos`);
  }, [filtroPesquisa]);

  return (
    <ContainerApp>
      <ContainerPage>
        <WrapperNavbar>
          <img src={imgLogo} type="image/png" href="/" alt="logo-happyhour" />

          <WrapperLinksNav>
            <button onClick={() => history.push("/")}>
              <IoHomeSharp size={24} />
            </button>
            &nbsp;
            {user && (
              <button onClick={() => setIsOpenCarrinho(true)}>
                <IoCartSharp size={24} />
              </button>
            )}
            &nbsp;
            {user && (
              <button
                onClick={() =>
                  history.push(
                    `${user.nivelAcesso > 1 ? "/dashboardadm" : "/dashboard"}`
                  )
                }
              >
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
        <WrapperBarraPesquisa>
          <span>
            <IoSearchSharp size={30} color="eba200" />
          </span>
          <input
            type="text"
            value={filtroPesquisa}
            onChange={(e) => setFiltroPesquisa(e.target.value)}
          />
        </WrapperBarraPesquisa>
        <SectionOfertas>
          <h2>Ofertas</h2>
          <WrapperItensOferta>
            {listaOfertas?.map((produto, index) => (
              <Card key={index} produto={produto} />
            ))}
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
          {viewCategoriaCerveja && (
            <WrapperProdutos
              filtroPesquisa={filtroPesquisa}
              categoria="Cerveja"
            />
          )}
          {viewCategoriaDestilados && (
            <WrapperProdutos
              filtroPesquisa={filtroPesquisa}
              categoria="Destilado"
            />
          )}
          {viewCategoriaVinhos && (
            <WrapperProdutos
              filtroPesquisa={filtroPesquisa}
              categoria="Vinho"
            />
          )}
          {viewCategoriaNoAlcool && (
            <WrapperProdutos
              filtroPesquisa={filtroPesquisa}
              categoria="No-alcool"
            />
          )}
          {viewCategoriaDiversos && (
            <WrapperProdutos
              filtroPesquisa={filtroPesquisa}
              categoria="Diversos"
            />
          )}
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
