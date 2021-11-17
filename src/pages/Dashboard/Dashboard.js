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
  Profile,
  WrapperDadosPessoais,
  WrapperEndereco,
  WrapperButtonSave,
} from "./styles.js";
import {
  IoPeople,
  IoNewspaper,
  IoSettingsSharp,
  IoCart,
  IoLogOut,
  IoHomeSharp,
  IoBeerSharp,
} from "react-icons/io5";

const Dashboard = () => {
  const { token, objUsuarioAtivo, signOut } = useContext(AuthContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(objUsuarioAtivo);

  useEffect(() => {
    document.title = "HappyHour";
    if (objUsuarioAtivo) {
      const dataLocal = objUsuarioAtivo.dataNascimento.slice(0, 10);

      setFormData((prevState) => ({
        ...prevState,
        _id: objUsuarioAtivo.id,
        dataNascimento: dataLocal,
      }));
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    const url = `${BACKEND}/usuarios`;
    const response = await fetch(url, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  }

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
          <button>
            <div>
              <IoNewspaper size={16} />
              &nbsp;Pedidos
            </div>
          </button>
          <button>
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
          <Profile>
            <h1>Detalhes do cliente</h1>
            <WrapperDadosPessoais>
              <h4>Dados Pessoais</h4>
              <label htmlFor="nome">Nome:</label>
              <input
                value={formData.nome}
                id="nome"
                name="nome"
                onChange={handleChange}
              />
              <label htmlFor="cpf">CPF:</label>
              <input
                value={formData.cpf}
                id="cpf"
                name="cpf"
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                value={formData.email}
                id="email"
                name="email"
                onChange={handleChange}
              />
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <input
                value={formData.dataNascimento}
                id="dataNascimento"
                name="dataNascimento"
                onChange={handleChange}
              />
              <label htmlFor="telefone">Telefone:</label>
              <input
                value={formData.telefone}
                id="telefone"
                name="telefone"
                onChange={handleChange}
              />
              <label htmlFor="senha">Senha:</label>
              <input
                value={formData.senha ? formData.senha : "********"}
                id="senha"
                name="senha"
                onChange={handleChange}
              />
            </WrapperDadosPessoais>
            <WrapperEndereco>
              <h4>Endereço</h4>
              <label htmlFor="rua">Rua:</label>
              <input
                value={formData.rua}
                id="rua"
                name="rua"
                onChange={handleChange}
              />
              <label htmlFor="numero">Número:</label>
              <input
                value={formData.numero}
                id="numero"
                name="numero"
                onChange={handleChange}
              />
              <label htmlFor="bairro">Bairro:</label>
              <input
                value={formData.bairro}
                id="bairro"
                name="bairro"
                onChange={handleChange}
              />
              <label htmlFor="cidade">Cidade:</label>
              <input
                value={formData.cidade}
                id="cidade"
                name="cidade"
                onChange={handleChange}
              />
              <label htmlFor="cep">CEP:</label>
              <input
                value={formData.cep}
                id="cep"
                name="cep"
                onChange={handleChange}
              />
            </WrapperEndereco>
            <WrapperButtonSave>
              <button onClick={handleSubmit}>Salvar Alterações</button>
            </WrapperButtonSave>
          </Profile>
        </ContentDashboard>
      </WrapperDashboard>
    </Container>
  );
};

export default Dashboard;
