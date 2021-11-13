import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
`;

export const Nav = styled.nav`
  margin: 0 auto;
  height: 100px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
`;

export const Logo = styled.a`
  img {
    &:hover {
      color: #eba200;
      width: 130px;
      height: 130px;
    }
  }
`;

export const LinksList = styled.ul`
  display: flex;
`;

export const ItemList = styled.li`
  margin-right: 16px;
  button {
    border: none;
    background-color: transparent;
    font-weight: bold;
    color: #00389e;
    &:hover {
      color: #eba200;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export const ContainerPresentation = styled.div`
  height: calc(100vh - 160px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px auto;
  flex-wrap: wrap;
`;

export const DescriptionPresentation = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #00389e;
  h1 {
    font-size: 30px;
    letter-spacing: 1.4px;
    margin-bottom: 24px;
  }
  h4 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const ImagePresentation = styled.div``;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-size: 28px;
  h2 {
    font-size: inherit;
  }
`;

export const ContainerSectionOfertas = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 64px;
  padding: 24px 16px;
  height: 600px;
`;

export const ContainerSectionPedidos = styled.section`
  margin: 64px auto;
  padding: 24px 16px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffeec8;
  border-radius: 12px;
  justify-content: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  align-items: center;
  h5 {
    margin-top: 30px;
    color: #00389e;
  }
  button {
    display: flex;
    padding: 10px;
    align-items: center;
    border: 3px solid #00389e;
    border-radius: 12px;
    background-color: transparent;
    color: #00389e;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    transition-duration: 0.5s;
    &:hover {
      color: #eba200;
      background-color: #00389e;
      border-color: #00389e;
    }
  }
`;

export const ContainerItemsPedidos = styled.div`
  display: flex;
  flex-wrap: wrap;
  span {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    margin: 8px 24px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const ContainerQuemSomos = styled.section`
  display: flex;
  height: 400px;
  flex-wrap: wrap;
  padding: 24px 16px;
  margin: 64px auto;
  background-color: #ffeec8;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 12px;
  p {
    color: #00389e;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }
`;
