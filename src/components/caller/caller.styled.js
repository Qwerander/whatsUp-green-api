import styled from "styled-components";

export const CallerStl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  grid-column: 1 / 2;
  grid-row: 2 / 4;

  > form {
    display: flex;
    padding: 0;
    width: 100%;
    align-items: center;
    > input {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: lightgray;
      padding: 10px 10px;
    }
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      padding: none;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;
