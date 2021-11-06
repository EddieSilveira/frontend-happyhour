import styled from 'styled-components';


export const ContainerApp = styled.div`
  height: 100%;
  background-image: linear-gradient(-175deg, #125d98, #f5a962);
  padding: 8px;
`;

export const ContainerPage = styled.div`
  max-width: 1280px;
  background-color: white;
  margin: 8px auto;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperNavbar = styled.div ` 
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperLinksNav = styled.div`
  display: flex;
  width: 10%;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
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

export const SectionOfertas = styled.section`
  width: 100%;
  margin-top: 60px;
  padding: 8px;
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

export const WrapperItensOferta = styled.div`
  margin-top: 32px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const SectionProdutos = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

export const WrapperNavCategorias = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  button{
    width: 10%;
    height: 50px;
    border-radius: 12px;
    border: 3px solid #00389e;
    background-color: transparent;
    /* color: #00389e;  */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    &:hover {
      color: #eba200;
      border-color: #eba200;
      cursor: pointer;
    }
  }
`;


