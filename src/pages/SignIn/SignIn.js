import React, { useState, useEffect, useContext, useRef } from "react";
import { AuthContext } from "../../contexts/auth";
import imgLogo from "../../assets/image-logo-happyhour.png";
import Loader from "react-loader-spinner";
import { IoLogIn } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

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
  const [erro, setErro] = useState("");
  const { getCookie, signIn, loading, setLoading } = useContext(AuthContext);
  const inputemail = useRef(null);
  const inputpassword = useRef(null);
  const [isRemember, setIsRemember] = useState(false);

  let loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  useEffect(() => {
    document.title = "HappyHour - Entrar";
    const token = getCookie("token");

    if (token) {
      history.push("/");
    }
  }, []);

  async function handleClick(e) {
    setLoading(true);
    e.preventDefault();
    dataForm.isRemember = isRemember;
    const validate = await loginSchema.isValid(dataForm).then((valid) => valid);
    if (validate) {
      signIn(dataForm);
    } else {
      setErro("Digite valores válidos!");
    }
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
          {erro && (
            <div
              style={{
                width: "70%",
                marginTop: "8px",
                display: "flex",
                justifyContent: "flex-end",
                color: "#eba200",
                fontWeight: "bold",
              }}
            >
              <span>{erro}</span>
            </div>
          )}
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
