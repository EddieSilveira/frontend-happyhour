import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { BACKEND } from "../../constants";
import imgLogo from "../../assets/image-logo-happyhour.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import * as yup from "yup";
import {
  Container,
  ContainerForm,
  WrapperLogo,
  Form,
  WrapperEndereco,
  WrapperFile,
} from "./styles.js";
import { IoSave } from "react-icons/io5";

const SignUp = () => {
  //Validation
  const [dataForm, setDataForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    telefone: "",
    cep: "",
    dataNascimento: "",
    nivelAcesso: 1,
    foto: {
      originalName: "",
      path: "",
      size: "",
      mimetype: "",
    },
  });

  const { authenticated, signIn } = useContext(AuthContext);
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [erro, setErro] = useState("");
  registerLocale("ptBR", ptBR);
  let dataLocalizada = dataNascimento.toLocaleDateString("pt-BR");

  let signUpSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    senha: yup.string().required(),
    cpf: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, "Apenas dígitos")
      .min(11, "O cpf deve ter 11 caracteres")
      .max(11, "O cpf deve ter 11 caracteres"),

    rua: yup.string().required(),
    numero: yup.number().required(),
    bairro: yup.string().required(),
    cidade: yup.string().required(),
    telefone: yup.number().required(),
    cep: yup.string().required(),
    dataNascimento: yup.string().required(),
    nivelAcesso: yup.number().required(),
  });

  async function handleSubmit(e) {
    e.preventDefault();
    dataForm.dataNascimento = dataLocalizada;
    const validate = await signUpSchema
      .isValid(dataForm)
      .then((valid) => valid);
    console.log(validate);
    if (validate) {
      let url = `${BACKEND}/cadastro`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataForm),
      });
      const data = await response.json();
      console.log(data);
    } else {
      setErro("Preencha os campos corretamente!");
    }
  }

  async function imageUpload(file) {
    let url = `${BACKEND}/upload`;
    const data = new FormData();
    data.append("file", file, file.name);

    const imageResponse = await fetch(url, {
      method: "POST",
      body: data,
    }).then((response) => response.json());
    const picture = {
      path: imageResponse.file.path,
      originalName: imageResponse.file.originalname,
      size: imageResponse.file.size,
      mimetype: imageResponse.file.mimetype,
    };
    return picture;
  }

  async function handleChange(e) {
    const { name, value } = e.target;
    if (e.target.files) {
      const picture = await imageUpload(e.target.files[0]);
      setDataForm((prevState) => ({
        ...prevState,
        foto: picture,
      }));
    }
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Container>
      <ContainerForm>
        <WrapperLogo>
          <a href="/">
            <img src={imgLogo} type="image/png" alt="logo-happyhour" />
          </a>
        </WrapperLogo>
        {erro && (
          <div
            style={{
              width: "70%",
              marginBottom: "8px",
              display: "flex",
              justifyContent: "flex-end",
              color: "#eba200",
              fontWeight: "bold",
            }}
          >
            <span>{erro}</span>
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome..."
            value={dataForm.nome}
            onChange={handleChange}
            name="nome"
          />
          <input
            type="text"
            placeholder="Cpf..."
            value={dataForm.cpf}
            onChange={handleChange}
            name="cpf"
          />
          <input
            type="text"
            placeholder="Email..."
            value={dataForm.email}
            onChange={handleChange}
            name="email"
          />
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <input
              type="password"
              placeholder="Senha..."
              value={dataForm.senha}
              onChange={handleChange}
              name="senha"
              id="senha"
            />

            <DatePicker
              id="date"
              locale="ptBR"
              dateFormat="P"
              maxDate={new Date()}
              //dateFormat="dd/MM/yy"
              selected={dataNascimento}
              placeholderText="Data de Nascimento..."
              onChange={(date) => setDataNascimento(date)}
            />
          </div>

          {/* <input
            type="text"
            placeholder="Data de nascimento..."
            value={dataForm.dataNascimento}
            onChange={handleChange}
            name="dataNascimento"
            id="dataNascimento"
          /> */}
          <WrapperEndereco>
            <input
              type="text"
              placeholder="Rua..."
              value={dataForm.rua}
              onChange={handleChange}
              name="rua"
              id="rua"
            />
            <input
              type="number"
              placeholder="Número..."
              value={dataForm.numero}
              onChange={handleChange}
              name="numero"
              id="numero"
            />
            <input
              type="text"
              placeholder="Bairro..."
              value={dataForm.bairro}
              onChange={handleChange}
              name="bairro"
              id="bairro"
            />
            <input
              type="text"
              placeholder="Cidade..."
              value={dataForm.cidade}
              onChange={handleChange}
              name="cidade"
              id="cidade"
            />
            <input
              type="text"
              placeholder="Cep..."
              value={dataForm.cep}
              onChange={handleChange}
              name="cep"
              id="cep"
            />
            <input
              type="text"
              placeholder="Telefone..."
              value={dataForm.telefone}
              onChange={handleChange}
              name="telefone"
              id="telefone"
            />
          </WrapperEndereco>
          <WrapperFile>
            <label htmlFor="file">Foto de Perfil</label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*, .pdf"
              onChange={handleChange}
            />
          </WrapperFile>
          <button id="btnCadastrar">
            <IoSave size={24} />
            &nbsp; CADASTRAR
          </button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default SignUp;
