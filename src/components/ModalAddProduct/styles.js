import styled from 'styled-components';

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
  width: 100%;
  max-height: 90vh;
  justify-content: center;
  align-items: flex-start;
  color: #00389e;
  font-weight: bold;
  label {
    margin-top: 16px;
  }
  input, textarea {
    margin-top: 8px;
    width: 100%;
    min-width: 100%;
    height: 32px;
    min-height: 32px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 4px;
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
input[type=number] {
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
    font-weight: bold;
    transition: linear 0.4s;
    &:hover {
      height: 35px;
      width: 85px;
      cursor: pointer;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }

  input[type=checkbox]{
    background-color: #000;
    height: 16px;
    width: 16px;
    margin-top: 16px;
    min-height: 10px;
    min-width: 10px;
  }
`;