import React, { useState, useContext, useEffect } from 'react';
import { BACKEND } from '../../constants/';
import { AuthContext } from '../../contexts/auth';
import Table from '../../components/Table/Table';
import imgLogo from '../../assets/image-logo-happyhour.png';
import {
  Container,
  SideBarDashboard,
  WrapperAvatar,
  WrapperButtonSideBar,
  WrapperDashboard,
  NavDashboard,
  ContentDashboard,
} from './styles.js';
import {
  IoPeople,
  IoNewspaper,
  IoSettingsSharp,
  IoCart,
  IoLogOut,
} from 'react-icons/io5';

const Dashboard = () => {
  const { token, objUsuarioAtivo, signOut } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [titleTable, setTitleTable] = useState('Produtos');
  const [data, setData] = useState([]);
  const head = {
    id: 'Ident.',
    name: 'Nome',
    last: 'Sobrenome',
  };
 
  useEffect(() => {
    document.title = 'HappyHour';
    loadData(`${BACKEND}/produtos`);
  }, []);

  
  function stateLoadTable(e) {
    const textReplaced = e.target.outerText.replace(/\s/g, '');

    if (textReplaced === 'Clientes') {
      setTitleTable('Clientes');
      loadData(`${BACKEND}/usuarios`);
    }
    if (textReplaced === 'Produtos') {
      setTitleTable('Produtos');
      loadData(`${BACKEND}/produtos`);
    }
    if (textReplaced === 'Vendas') {
      setTitleTable('Vendas');
      loadData();
    }
  }

  const loadData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accepts: 'application/json',
        'x-access-token': token,
      },
      mode: 'cors',
    });
    const data = await response.json();
    setData(data);
    setLoading(false);
  };
  
  if (loading) return <h1>Loading...</h1>;
  return (
    <Container>
      <SideBarDashboard>
        <WrapperAvatar>
          <a href="/">
            <img src={imgLogo} type="image/png" href="/" alt="logo-site"/>
          </a>
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
          <button onClick={stateLoadTable}>
            <div>
              <IoNewspaper size={16} />
              &nbsp;Vendas
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
              .replace('public/', 'files/')
              .replace('uploads/', '')}`}
              alt="foto-perfil"
          />
          <h4>Olá, seja bem vindo(a)! &nbsp;{objUsuarioAtivo.nome}</h4>
          <button onClick={signOut}>
            <IoLogOut size={24} />
            &nbsp;
            <h4>Logout</h4>
          </button>
        </NavDashboard>
        <ContentDashboard>
          <h1>{titleTable}</h1>
          <Table data={data} head={head} />
        </ContentDashboard>
      </WrapperDashboard>
    </Container>
  );
};

export default Dashboard;
