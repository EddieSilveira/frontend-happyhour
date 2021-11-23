import React, { useState, useContext, useEffect } from "react";
import { BACKEND } from "../../constants/";
import { AuthContext } from "../../contexts/auth";
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
} from "./styles.js";
import {
  IoNewspaper,
  IoPersonSharp,
  IoLogOut,
  IoHomeSharp,
  IoBeerSharp,
} from "react-icons/io5";
import Profile from "../../components/Profile/Profile";
import ListPedidos from "../../components/ListPedidos/ListPedidos";

const Dashboard = () => {
  const { token, objUsuarioAtivo, signOut } = useContext(AuthContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [viewPerfil, setViewPerfil] = useState(true);
  const [viewPedidos, setViewPedidos] = useState(false);

  useEffect(() => {
    document.title = "HappyHour - Dashboard";
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <Container>
      <SideBarDashboard>
        <WrapperAvatar>
          <a href="/">
            <img src={imgLogo} type="image/png" href="/" alt="logo-site" />
          </a>
        </WrapperAvatar>
        <WrapperButtonSideBar>
          <button
            onClick={() => {
              setViewPerfil(true);
              setViewPedidos(false);
            }}
          >
            <div>
              <IoPersonSharp size={16} />
              &nbsp;Perfil
            </div>
          </button>
          <button
            onClick={() => {
              setViewPerfil(false);
              setViewPedidos(true);
            }}
          >
            <div>
              <IoNewspaper size={16} />
              &nbsp;Pedidos
            </div>
          </button>
        </WrapperButtonSideBar>
      </SideBarDashboard>
      <WrapperDashboard>
        <NavDashboard>
          <img
            src={`${BACKEND}/${objUsuarioAtivo.foto.path}`
              .replace("public\\", "files/")
              .replace("uploads\\", "")}
            alt="imagem-avatar-user"
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
          {viewPerfil && <Profile />}
          {viewPedidos && <ListPedidos />}
        </ContentDashboard>
      </WrapperDashboard>
    </Container>
  );
};

export default Dashboard;
