import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 250px;
  height: 380px;
  border: 2px solid #ffeec8;
  background-color: #fff;
  background-image: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ImageCard = styled.img`
  display: flex;
  background-color: #000;
  background-image: #000;
  justify-content: center;
  max-width: 70%;
  max-height: 70%;
`;

export const ContainerDescriptionCard = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
  margin: 8px 0;
  flex-wrap: wrap;
  span {
    width: 100%;
    color: #3e4033;
    font-weight: bold;
    text-align: center;
  }
  .valorProduto {
    color: #00389e;
    font-size: 15px;
  }
`;

export const ContainerButtonCard = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonCard = styled.button`
  border: none;
  height: 50px;
  padding: 10px;
  margin-top: 5px;
  background-color: transparent;
  background-image: transparent;
  color: #eba200;
  font-weight: bold;
  display: flex;
  align-items: center;
  transition-duration: 0.5s;
  border: 3px solid #eba200;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    color: #00389e;
    background-color: #eba200;
    background-image: #eba200;
  }
`;
