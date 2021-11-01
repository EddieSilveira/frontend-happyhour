import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 250px;
  height: 380px;
  border: 2px solid #ffeec8;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  padding: 20px;
  margin: 10px auto;
`;

export const ImageCard = styled.img`
  max-width: 100%;
`;

export const ContainerDescriptionCard = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 8px 0;
  span {
    color: #00389e;
    font-weight: bold;
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
  }
`;
