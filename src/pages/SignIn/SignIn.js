import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth";
import imgLogo from "../../assets/image-logo-happyhour.png";
import Loader from "react-loader-spinner";
import { IoLogIn } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerForm,
  WrapperLogo,
  FormLogin,
  ContainerNavigation,
  Row,
  WrapperCheckbox,
} from "./styles.js";

const SignIn = () => {
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    isRemember: "",
  });
  const {
    authenticated,
    setAuthenticated,
    signIn,
    loading,
    setLoading,
    objUsuarioAtivo,
    setObjUsuarioAtivo,
  } = useContext(AuthContext);
  const inputemail = useRef(null);
  const inputpassword = useRef(null);
  const [isRemember, setIsRemember] = useState(false);

  function getCookie(cookie) {
    let cookieName = " " + cookie + "=";

    let cookies = document.cookie;

    if (cookies.indexOf(cookieName) === -1) {
      return false;
    }

    cookies = cookies.substr(cookies.indexOf(cookieName), cookies.length);

    if (cookies.indexOf(";") !== -1) {
      cookies = cookies.substr(0, cookies.indexOf(";"));
    }

    cookies = cookies.split("=")[1];

    return decodeURI(cookies);
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      history.push("/");
      setAuthenticated(true);
      let stringUser = localStorage.getItem("userAtivo");
      setObjUsuarioAtivo(JSON.parse(stringUser));
    }
  }, []);

  async function handleClick(e) {
    setLoading(true);
    console.log(dataForm);
    e.preventDefault();
    dataForm.isRemember = isRemember;
    signIn(dataForm);
    setLoading(false);
  }

  async function handleChange(e) {
    const { name, value, checked } = e.target;

    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "email") {
      inputemail.current.focus();
    }
    if (name === "password") {
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
                <input
                  type="checkbox"
                  id="inputLembrar"
                  name="remember"
                  onChange={() => setIsRemember(!isRemember)}
                />
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
