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
  min-height: 100vh;
  width: 20%;
  background-color: #ffeec8;
  background-image: #ffeec8;
  box-shadow: inset -2px 0 3px #eba200;
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
    padding: 10px auto;
    background-color: transparent;
    background-image: transparent;
    color: #00389e;
    font-weight: bold;
    border: none;
    cursor: pointer;
    padding: 8px;
    &:after {
      content: " >";
    }
    &:hover {
      background-color: #00389e;
      background-image: #00389e;
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
  background-image: #00389e;
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
    background-image: transparent;
    color: #ccc;
    margin: 0 8px 0 16px;
    &:hover {
      color: #eba200;
      cursor: pointer;
      text-transform: uppercase;
      transition: linear 0.5s;
    }
  }
`;
export const ContentDashboard = styled.div`
  height: 90%;
  background-color: #fff;
  background-image: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  h1 {
    font-size: 32px;

    &:after {
      content: " ";
      width: 100%;
      height: 15%;
      background-color: #eba200;
      background-image: #eba200;
      display: block;
    }
  }
`;

export const WrapperButtonAdd = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  button {
    background-color: transparent;
    background-image: transparent;
    border: 3px solid #eba200;
    padding: 8px;
    margin: 16px 0;
    width: 150px;
    border-radius: 12px;
    color: #00389e;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transition: linear 0.5s;
    &:hover {
      cursor: pointer;
      box-shadow: inset 0 -3.5em 0 0 #eba200;
    }
  }
`;
