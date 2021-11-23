import React, { useState, useContext, useEffect } from "react";
import { BACKEND } from "../../constants";
import { AuthContext } from "../../contexts/auth";
import Table from "../../components/Table/Table";
import ModalAddProduct from "../../components/ModalAddProduct/ModalAddProduct";
import ModalAddClient from "../../components/ModalAddClient/ModalAddClient";
import Loader from "react-loader-spinner";
import imgLogo from "../../assets/image-logo-happyhour.png";
import { useHistory } from "react-router-dom";
import {
  Container,
  SideBarDashboard,
  WrapperAvatar,
  WrapperButtonSideBar,
  WrapperDashboard,
  NavDashboard,
  ContentDashboard,
  WrapperButtonAdd,
} from "./styles";
import {
  IoPeople,
  IoNewspaper,
  IoSettingsSharp,
  IoCart,
  IoLogOut,
  IoAddCircle,
  IoHomeSharp,
  IoBeerSharp,
} from "react-icons/io5";
import ListPedidos from "../../components/ListPedidos/ListPedidos";

const DashboardAdmin = () => {
  const {
    token,
    objUsuarioAtivo,
    signOut,
    loading,
    setLoading,
    authenticated,
  } = useContext(AuthContext);
  const history = useHistory();
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenClient, setIsOpenClient] = useState(false);
  const [viewPedidos, setViewPedidos] = useState(false);
  const [titleTable, setTitleTable] = useState("Produtos");
  const [data, setData] = useState([]);

  const head = {
    id: "Ident.",
    name: "Nome",
    last: "Sobrenome",
  };
  useEffect(() => {
    document.title = "HappyHour";
    loadData(`${BACKEND}/produtos`);
  }, []);

  function stateLoadTable(e) {
    const textReplaced = e.target.outerText.replace(/\s/g, "");

    if (textReplaced === "Clientes") {
      setTitleTable("Clientes");
      setViewPedidos(false);
      loadData(`${BACKEND}/usuarios`);
    }
    if (textReplaced === "Produtos") {
      setTitleTable("Produtos");
      setViewPedidos(false);
      loadData(`${BACKEND}/produtos`);
    }
  }

  const loadData = async (url) => {
    setLoading(true);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "x-access-token": token,
      },
      mode: "cors",
    });
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  function handleOpenModal() {
    if (titleTable === "Produtos") setIsOpenProduct(true);
    if (titleTable === "Clientes") setIsOpenClient(true);
  }

  function handleCloseModal() {
    if (titleTable === "Produtos") setIsOpenProduct(false);
    if (titleTable === "Clientes") setIsOpenClient(false);
  }

  return (
    <Container>
      <SideBarDashboard>
        <WrapperAvatar>
          <img src={imgLogo} type="image/png" alt="logo-site" />
        </WrapperAvatar>
        <WrapperButtonSideBar>
          <button onClick={stateLoadTable}>
            <div>
              <IoCart size={16} />
              &nbsp;Produtos
            </div>
          </button>
          <button onClick={stateLoadTable}>
            <div>
              <IoPeople size={16} />
              &nbsp;Clientes
            </div>
          </button>
          <button
            onClick={() => {
              setTitleTable("Pedidos");
              setViewPedidos(true);
            }}
          >
            <div>
              <IoNewspaper size={16} />
              &nbsp;Pedidos
            </div>
          </button>
          <button onClick={stateLoadTable}>
            <div>
              <IoSettingsSharp size={16} />
              &nbsp;Configurações
            </div>
          </button>
        </WrapperButtonSideBar>
      </SideBarDashboard>
      <WrapperDashboard>
        <NavDashboard>
          <img
            src={`${BACKEND}/${objUsuarioAtivo.foto.path
              .replace("public/", "files/")
              .replace("uploads/", "")}`}
            alt="avatar-user"
          />
          <h4>Olá, seja bem vindo(a)! &nbsp;{objUsuarioAtivo.nome}</h4>
          <div style={{ display: "flex" }}>
            <button onClick={() => history.push("/")}>
              <IoHomeSharp size={24} />
              &nbsp; <h4>Home</h4>
            </button>
            <button onClick={() => history.push("/products")}>
              <IoBeerSharp size={24} />
              &nbsp; <h4>Produtos</h4>
            </button>
            <button onClick={signOut}>
              <IoLogOut size={24} />
              &nbsp;
              <h4>Logout</h4>
            </button>
          </div>
        </NavDashboard>
        <ContentDashboard>
          <h1>{titleTable}</h1>
          {!viewPedidos && (
            <>
              <WrapperButtonAdd>
                <button onClick={() => handleOpenModal()}>
                  <IoAddCircle size={32} /> &nbsp;{titleTable}
                </button>

                <ModalAddProduct
                  isOpen={isOpenProduct}
                  setIsOpen={setIsOpenProduct}
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                  loadData={loadData}
                />
                <ModalAddClient
                  isOpen={isOpenClient}
                  setIsOpen={setIsOpenClient}
                  handleOpenModal={handleOpenModal}
                  handleCloseModal={handleCloseModal}
                  loadData={loadData}
                />
              </WrapperButtonAdd>
              {loading && <Loader type="TailSpin" color="#00389e" />}
              {!loading && (
                <Table
                  data={data}
                  head={head}
                  loadData={loadData}
                  title={titleTable}
                />
              )}
            </>
          )}
          {loading && <Loader type="TailSpin" color="#00389e" />}
          {viewPedidos && !loading && <ListPedidos />}
        </ContentDashboard>
      </WrapperDashboard>
    </Container>
  );
};

export default DashboardAdmin;
