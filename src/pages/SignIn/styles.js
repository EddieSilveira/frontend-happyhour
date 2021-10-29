import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(-50deg, #125d98, #f5a962);
`;

export const ContainerForm = styled.div`
  width: 70%;
  max-width: 960px;
  height: 80%;
  box-shadow: 0 5px 15px rgb(0 0 0 / 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 24px;
  align-items: center;
  background-color: #ffeec8;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export const FormLogin = styled.form`
  margin-top: 48px;
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  input[type='text'],
  [type='password'] {
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
    margin-top: 20px;
    color: #00389e;
    background-color: transparent;
    border: 3px solid #00389e;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition-duration: 0.5s;
    &:hover {
      color: #00389e;
      background-color: #eba200;
    }
  }
`;

export const WrapperLogo = styled.div``;

export const ContainerNavigation = styled.div`
  margin-top: 18px;
  width: 70%;
  font-weight: bold;
  color: #00389e;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 14px;

  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  a,
  label {
    color: #00389e;
    &:hover {
      color: #eba200;
    }
  }
`;

export const WrapperCheckbox = styled.div`
  display: flex;
  input {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
`;
