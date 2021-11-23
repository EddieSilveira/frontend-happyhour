import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { BACKEND } from "../../constants/";
import {
  ProfileStyled,
  WrapperDadosPessoais,
  WrapperEndereco,
  WrapperButtonSave,
} from "./styles";
import Loader from "react-loader-spinner";

const Profile = () => {
  const { token, objUsuarioAtivo, signOut } = useContext(AuthContext);
  const [formData, setFormData] = useState(objUsuarioAtivo);
  const [loadingAlteracoes, setLoadingAlteracoes] = useState(false);

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
    setLoadingAlteracoes(true);

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
    setLoadingAlteracoes(false);
  }
  return (
    <ProfileStyled>
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
        <button onClick={handleSubmit}>
          Salvar Alterações{" "}
          {loadingAlteracoes && (
            <Loader type="TailSpin" color="#00389e" height={25} width={25} />
          )}
        </button>
      </WrapperButtonSave>
    </ProfileStyled>
  );
};

export default Profile;
