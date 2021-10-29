import React, { useState, useContext, useRef } from 'react';
import { AuthContext } from '../../contexts/auth';
import imgLogo from '../../assets/image-logo-happyhour.png';
import { Loader } from '../../components/Loader/Loader';
import { IoLogIn } from 'react-icons/io5';
import {
  Container,
  ContainerForm,
  WrapperLogo,
  FormLogin,
  ContainerNavigation,
  Row,
  WrapperCheckbox,
} from './styles.js';

const SignIn = () => {
  //Validation
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
  });
  const { authenticated, signIn, loading, setLoading } =
    useContext(AuthContext);
  const inputemail = useRef(null);
  const inputpassword = useRef(null);

  async function handleClick(e) {
    setLoading(true);
    e.preventDefault();
    signIn(dataForm);
    setLoading(false);
  }

  async function handleChange(e) {
    const { name, value } = e.target;
    await setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'email') {
      inputemail.current.focus();
    }
    if (name === 'password') {
      inputpassword.current.focus();
    }
  }

  return (
    <Container>
      <ContainerForm>
        <WrapperLogo>
          <a href="/">
            <img src={imgLogo} type="image/png" href="/" />
          </a>
        </WrapperLogo>
        <FormLogin onSubmit={handleClick}>
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
            value={dataForm.password}
            onChange={handleChange}
            name="password"
            ref={inputpassword}
          />
          <ContainerNavigation>
            <Row>
              <WrapperCheckbox>
                <input type="checkbox" id="inputLembrar" />
                <label htmlFor="inputLembrar">Lembrar</label>
              </WrapperCheckbox>
              <a href="/">Esqueceu a senha?</a>
            </Row>
            <Row>
              <span>Ainda não possui uma conta?</span>
              <a href="/signup">Cadastre-se</a>
            </Row>
          </ContainerNavigation>
          <button>
            {loading ? <Loader /> : <IoLogIn size={24} />}
            &nbsp; LOGIN
          </button>  
        </FormLogin>
      </ContainerForm>
    </Container>
  );
};

export default SignIn;
