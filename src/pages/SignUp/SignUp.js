import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/auth';
import { BACKEND } from '../../constants';
import imgLogo from '../../assets/image-logo-happyhour.png';
import {
  Container,
  ContainerForm,
  WrapperLogo,
  Form,
  WrapperEndereco,
  WrapperFile,
} from './styles.js';
import { IoSave } from 'react-icons/io5';

const SignUp = () => {
  //Validation
  const [dataForm, setDataForm] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    rua: '',
    numero: '',
    bairro: '',
    nivelAcesso: 1,
    foto: {
      originalName: '',
      path: '',
      size: '',
      mimetype: '',
    },
  });

  const { authenticated, signIn } = useContext(AuthContext);
  const inputname = useRef(null);
  const inputcpf = useRef(null);
  const inputemail = useRef(null);
  const inputpassword = useRef(null);
  const inputrua = useRef(null);
  const inputnumero = useRef(null);
  const inputbairro = useRef(null);

  async function handleClick(e) {
    e.preventDefault();
    let valueData = Object.values(dataForm);
    let keysData = Object.keys(dataForm);
    let validateForm = true;

    valueData.forEach((item, index, array) => {
      if (item === '') {
        alert(`Campo ${keysData[index]} deve ser preenchido`);
        validateForm = false;
      }
    });

    if (validateForm) {
      let url = `${BACKEND}/cadastro`;

      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          inputname.current.value = '';
          inputcpf.current.value = '';
          inputemail.current.value = '';
          inputpassword.current.value = '';
          inputrua.current.value = '';
          inputnumero.current.value = '';
          inputbairro.current.value = '';
        });
    }
  }

  async function imageUpload(file) {
    let url = `${BACKEND}/upload`;
    const data = new FormData();
    data.append('file', file, file.name);

    const imageResponse = await fetch(url, {
      method: 'POST',
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
      await setDataForm((prevState) => ({
        ...prevState,
        foto: picture,
      }));
    }
    await setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    switch (name) {
      case 'nome':
        inputname.current.focus();
        break;
      case 'cpf':
        inputcpf.current.focus();
        break;
      case 'email':
        inputemail.current.focus();
        break;
      case 'senha':
        inputpassword.current.focus();
        break;
      case 'rua':
        inputrua.current.focus();
        break;
      case 'numero':
        inputnumero.current.focus();
        break;
      case 'bairro':
        inputbairro.current.focus();
        break;
    }
  }

  return (
    <Container>
      <ContainerForm>
        <WrapperLogo>
          <a href="/">
            <img src={imgLogo} type="image/png" />
          </a>
        </WrapperLogo>
        <Form onSubmit={handleClick}>
          <input
            type="text"
            placeholder="Nome..."
            value={dataForm.nome}
            onChange={handleChange}
            name="nome"
            ref={inputname}
          />
          <input
            type="text"
            placeholder="Cpf..."
            value={dataForm.cpf}
            onChange={handleChange}
            name="cpf"
            ref={inputcpf}
          />
          <input
            type="text"
            placeholder="Email..."
            value={dataForm.email}
            onChange={handleChange}
            name="email"
            ref={inputemail}
          />
          <input
            type="password"
            placeholder="Senha..."
            value={dataForm.senha}
            onChange={handleChange}
            name="senha"
            ref={inputpassword}
          />
          <WrapperEndereco>
            <input
              type="text"
              placeholder="Rua..."
              value={dataForm.rua}
              onChange={handleChange}
              name="rua"
              ref={inputrua}
              id="rua"
            />
            <input
              type="number"
              placeholder="Número..."
              value={dataForm.numero}
              onChange={handleChange}
              name="numero"
              ref={inputnumero}
              id="numero"
            />
            <input
              type="text"
              placeholder="Bairro..."
              value={dataForm.bairro}
              onChange={handleChange}
              name="bairro"
              ref={inputbairro}
              id="bairro"
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
          <button>
            <IoSave size={24} />
            &nbsp; CADASTRAR
          </button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default SignUp;
