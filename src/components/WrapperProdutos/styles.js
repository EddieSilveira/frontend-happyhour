import styled from "styled-components";


export const WrapperProdutosCategoria = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;  
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