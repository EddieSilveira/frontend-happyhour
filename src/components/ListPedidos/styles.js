import styled from "styled-components";

export const ContainerListPedidos = styled.div`
  margin-top: 24px;
  width: 80%;
  height: calc(100%);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  h1 {
    width: 100%;
    margin: 16px;
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
