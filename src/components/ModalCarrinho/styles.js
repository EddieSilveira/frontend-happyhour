import styled from 'styled-components';

export const WrapperHeadModal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #3E4033;
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
      cursor: pointer
    }
  }
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
  img {
    max-width: 150px;
    max-height: 150px;
  }
`;

export const ContainerProdutos = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 16px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
  padding: 16px;
  h2 { 
    font-size: 18px;
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
  .btnAddProduto {
    border: none;
    height: 100%;
    font-size: 16px;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #3E4033;
    &:hover{
      cursor:pointer;
      color: #eba200;
    }
  }
`;

export const ContainerInfoPagamento = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 16px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
  padding: 16px;
  h2 { 
    font-size: 18px;
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
  .btnAddProduto {
    border: none;
    height: 100%;
    font-size: 16px;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #3E4033;
    &:hover{
      cursor:pointer;
      color: #eba200;
    }
  }
`;
export const ContainerInfoEndereco = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 16px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
  padding: 16px;
  h2 { 
    font-size: 18px;
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
  .btnAddProduto {
    border: none;
    height: 100%;
    font-size: 16px;
    background-color: transparent;
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #3E4033;
    &:hover{
      cursor:pointer;
      color: #eba200;
    }
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px auto 16px auto;
`;

export const WrapperButtonPagamento = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 16px;
    height: 40px;
    padding: 16px;
    border-radius: 12px;
    border: none;
    background-color: #eba200;
    color: #00389e;
    font-weight: bold;
    line-height: 1.4;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    &:hover{
      cursor:pointer;
      border: 3px solid #00389e
    }
  }
`;

export const WrapperFormaPagamento = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  input[type=text]{
    width: 25%;
    height: 30px;
    padding: 8px;
    margin: 8px 0 8px 0;
    border-radius: 5px;
    border: 2px solid #00389e;
    &:focus{
      outline: none;
      border-color: #eba200;
    }
  }
`;