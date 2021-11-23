import styled from "styled-components";

export const ProfileStyled = styled.div`
  margin-top: 60px;
  width: 80%;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  h1 {
    width: 100%;
    margin-bottom: 16px;
    font-size: 24px;
    color: #00389e;
    &:before {
      border-right: solid 5px #eba200;
      border-left: solid 5px #eba200;
      border-top: solid 5px #eba200;
      transform: translateX(-50%);
      z-index: -1;
      content: "";
      top: 100%;
      left: 50%;
      height: 0;
      width: 0;
    }
  }
  h4 {
    margin-bottom: 16px;
  }
  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
  label {
    font-weight: bold;
    margin-top: 12px;
  }
  button {
    width: 100%;
  }
`;

export const WrapperButtonSave = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  button {
    height: 50px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    color: #00389e;
    margin-top: 20px;
    background-color: transparent;
    border: 3px solid #00389e;
    font-weight: bold;
    cursor: pointer;
    transition-duration: 0.5s;
    border-radius: 12px;
    &:hover {
      color: #00389e;
      background-color: #eba200;
    }
  }
`;
export const WrapperDadosPessoais = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
export const WrapperEndereco = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;
