import styled from "styled-components";

export const ContainerCardPedidos = styled.div`
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.2);
  width: 90%;
  padding: 16px;
  margin: 16px auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  h2 {
    width: 100%;
    font-size: 16px;
  }
`;

export const ContainerDadosPessoais = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  h4 {
    width: 100%;
  }
  span {
    margin-right: 8px;
  }
`;

export const ContainerEndereco = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  h4 {
    width: 100%;
  }
  span {
    margin-right: 8px;
  }
`;

export const ContainerPedido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-evenly;
  width: 50%;
  border-bottom: 3px solid #cccccc;
  span {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;
