import styled from "styled-components";

export const WrapperProdutosCategoria = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  h2 {
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
`;

export const ContainerProdutos = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
`;
