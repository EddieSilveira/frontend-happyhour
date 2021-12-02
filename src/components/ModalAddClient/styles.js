import styled from "styled-components";

export const WrapperHeadModal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #00389e;
  margin: 8px auto 16px auto;
  h2 {
    font-size: 18px;
  }
  button {
    border: none;
    background-color: transparent;
    background-image: transparent;
    color: inherit;
    &:hover {
      color: #eba200;
      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  color: #00389e;
  font-weight: bold;
  flex-wrap: wrap;
  label {
    margin-top: 16px;
  }
  input {
    margin-top: 8px;
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 4px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 6px #eba200;
    }
  }
`;
export const WrapperInput = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  label {
    margin-left: 4px;
    width: 15%;
  }
  input {
    width: 30%;
  }
`;
export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    padding: 8px;
    width: 80px;
    height: 35px;
    border: none;
    margin-top: 16px;
    color: #00389e;
    background-color: #eba200;
    background-image: #eba200;
    font-weight: bold;
    transition: linear 0.4s;
    &:hover {
      height: 35px;
      width: 85px;
      cursor: pointer;
    }
  }
`;
