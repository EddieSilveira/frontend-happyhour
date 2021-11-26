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
    cursor: pointer;
    &:hover {
      color: #eba200;
    }
  }
`;

export const Form = styled.form`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  color: #00389e;
  font-weight: bold;
  label {
    margin-top: 16px;
  }
  input,
  textarea {
    margin-top: 8px;
    width: 100%;
    height: 32px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 8px;
    &:focus {
      outline: none;
      box-shadow: 0px 0px 6px #eba200;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
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

export const WrapperDescription = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  input,
  textarea {
    width: 100%;
  }
  textarea {
    max-height: 80px;
    min-width: 800px;
    max-width: 800px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }

  input[type="checkbox"] {
    background-color: #000;
    background-image: #000;
    height: 16px;
    width: 16px;
    margin-top: 16px;
    min-height: 10px;
    min-width: 10px;
  }
`;
