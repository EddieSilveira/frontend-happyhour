import React, { useState, useContext, useEffect } from 'react';
import { BACKEND } from '../../constants';
import { AuthContext } from '../../contexts/auth';
import Table from '../../components/Table/Table';
import ModalAddProduct from '../../components/ModalAddProduct/ModalAddProduct';
import ModalAddClient from '../../components/ModalAddClient/ModalAddClient';
import { Loader } from '../../components/Loader/Loader';
import imgLogo from '../../assets/image-logo-happyhour.png';
import {
  Container,
  SideBarDashboard,
  WrapperAvatar,
  WrapperButtonSideBar,
  WrapperDashboard,
  NavDashboard,
  ContentDashboard,
  WrapperButtonAdd,
} from './styles';
import {
  IoPeople,
  IoNewspaper,
  IoSettingsSharp,
  IoCart,
  IoLogOut,
  IoAddCircle,
} from 'react-icons/io5';

const DashboardAdmin = () => {
  const { token, objUsuarioAtivo, signOut, loading, setLoading } =
    useContext(AuthContext);
  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const [isOpenClient, setIsOpenClient] = useState(false);
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

   
  
   const urlFoto = objUsuarioAtivo.foto.path
    

  console.log(urlFoto)
  const loadData = async (url) => {
    setLoading(true);
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

  function handleOpenModal() {
    if (titleTable === 'Produtos') setIsOpenProduct(true);
    if (titleTable === 'Clientes') setIsOpenClient(true);
  }

  function handleCloseModal() {
    if (titleTable === 'Produtos') setIsOpenProduct(false);
    if (titleTable === 'Clientes') setIsOpenClient(false);
  }

  if (loading) return <Loader />;

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
              alt="avatar-user"
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
          <Table
            data={data}
            head={head}
            loadData={loadData}
            title={titleTable}
          />
        </ContentDashboard>
      </WrapperDashboard>
    </Container>
  );
};

export default DashboardAdmin;
