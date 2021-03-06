import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 0.2);
  width: 100%;
  border: 2px solid #ccc;

  th {
    height: 60px;
    text-transform: uppercase;
    background-color: #00389e;
    background-image: #00389e;
    color: #ccc;
    padding: 8px;
  }
  tbody {
    tr {
      width: 100%;

      &:hover {
        background-color: #ccc;
        background-image: #ccc;
      }
      button {
        padding: 8px;
        border: none;
        background-color: transparent;
        background-image: transparent;
        color: #00389e;
        transition: linear 0.3s;
        &:hover {
          color: #eba200;
          cursor: pointer;
        }
      }
    }
    td {
      font-size: 14px;
      line-height: 1.6;
      text-align: center;
    }
  }
`;
