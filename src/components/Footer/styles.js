import styled from "styled-components";

export const ContainerFooter = styled.footer`
  margin-top: 32px;
  width: 100%;
  display: flex;
  color: #eba200;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${(props) => props.bg || "transparent"};
  background-image: ${(props) => props.bg || "transparent"};
`;

export const ContainerPayments = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  align-items: center;
  color: #eba200;
`;

export const BoxFlags = styled.div`
  margin-top: 60px;
  border: 3px solid #ffeec8;
  background-color: transparent;
  background-image: transparent;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    margin: 10px;
    width: 45px;
  }
`;
export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 20px;
  align-items: center;
  h4 {
    margin-bottom: 60px;
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin: 5px auto;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const ContainerIcons = styled.div`
  display: flex;
  i {
    border: 3px solid #eba200;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
  }
`;

export const ContainerCopyrights = styled.div`
  display: flex;
  background-color: transparent;
  background-image: transparent;
  color: #eba200;
  width: 100%;
  padding: 10px;
  margin-top: 30px;
  justify-content: center;
  span {
    font-weight: bold;
    font-size: 14px;
  }
`;
