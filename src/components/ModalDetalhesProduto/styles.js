import styled from 'styled-components';

export const WrapperHeadModal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
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
    }
  }
`;

export const ContainerPrincipal = styled.div`
  display: flex;
  width: 100%;
`;

export const WrapperCoreDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  h1 {
    color: #00389e;
    font-size: 32px;
  }
  h2 {
    margin-top: 24px;
    color: #eba200;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;

`;

export const WrapperDetalhes = styled.div`
  display: flex;
  flex-wrap:wrap;
  margin-top: 24px;
  h2{
    margin-bottom: 8px;
  }

`;

export const WrapperDescricaoDetalhes = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h2{
    margin-bottom: 8px;
    margin-right: 16px;
  }
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: #00389e;
    border: none;
    background-color: transparent;
    margin: 16px 8px auto 8px;
    &:hover{
      color: #eba200;
      cursor: pointer
    }
  }
  span{
    margin-top: 16px;
  }
`;

export const WrapperButtonDetalhes = styled.div`
  button{
      margin-top: 24px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #00389e;
      background-color: transparent;
      border-radius: 12px;
      padding: 8px;
      color: #00389e; 
      font-weight: bold;
      &:hover {
        background-color: #eba200;   
        cursor: pointer;
    }
  }
`;

export const WrapperQuantidade = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
