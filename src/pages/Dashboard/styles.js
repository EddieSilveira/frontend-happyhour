import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const SideBarDashboard = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 20%;
  padding: 8px;
  background-color: #ffeec8;
  box-shadow: 0 3px 15px rgb(0 0 0 / 0.2);
`;
export const WrapperAvatar = styled.div`
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: center;
`;
export const WrapperButtonSideBar = styled.div`
  height: 60%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 32px;
    margin: 10px auto;
    padding: 16px;
    border-radius: 5px;
    background-color: transparent;
    color: #00389e;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:after {
      content: " >";
    }
    &:hover {
      background-color: #00389e;
      opacity: 1;
      color: #eba200;
    }
  }
`;

export const WrapperDashboard = styled.div`
  width: 90%;
`;

export const NavDashboard = styled.div`
  width: 100%;
  height: 10%;
  background-color: #00389e;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #ccc;
  img {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    margin: 0 8px 0 16px;
  }
  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    color: #ccc;

    margin: 0 8px 0 16px;
    &:hover {
      color: #eba200;
      cursor: pointer;
      text-transform: uppercase;
    }
  }
`;
export const ContentDashboard = styled.div`
  height: 90%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  h1 {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;
