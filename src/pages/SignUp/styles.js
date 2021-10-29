import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(360deg, #125d98, #f5a962);
`;

export const WrapperLogo = styled.div``;
export const ContainerForm = styled.div`
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background-color: #ffeec8;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    width: 70%;
    height: 40px;
    margin: 5px auto;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
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

export const WrapperEndereco = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  #rua {
    width: 80%;
    margin: 5px 8px 5px 0;
  }
  #numero {
    width: 18%;
    margin: 5px 0px 5px 5px;
  }
  #bairro {
    width: 100%;
  }
`;

export const WrapperFile = styled.div`
  width: 70%;
  padding: 8px;
  display: flex;
  font: 24px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  input {
    width: 50%;
  }
`;
