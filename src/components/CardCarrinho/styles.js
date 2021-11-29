import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  height: 120px;
  border: 2px solid #ffeec8;
  background-color: #fff;
  background-image: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .btnRemoverProduto {
    height: 60%;
    border: none;
    padding: 4px;
    background-color: transparent;
    background-image: transparent;
    color: #00389e;
    &:hover {
      color: #eba200;
      cursor: pointer;
    }
  }
`;

export const ImageCard = styled.img`
  display: flex;
  background-color: #000;
  background-image: #000;
  justify-content: center;
  height: 100%;
  max-height: 100%;
`;

export const ContainerDescriptionCard = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 8px 0;
  flex-wrap: wrap;
  span {
    width: 30%;
    font-weight: bold;
    margin: 8px;
  }
  .descricaoProduto {
    margin-right: 16px;
    color: #3e4033;
  }
  .valorProduto {
    color: #00389e;
  }
`;

export const ContainerButtonCard = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonCard = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  padding: 10px;
  margin-top: 5px;
  background-color: transparent;
  background-image: transparent;
  color: #eba200;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.5s;
  border: 3px solid #eba200;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    color: #00389e;
    background-color: #eba200;
    background-image: #eba200;
  }
`;
