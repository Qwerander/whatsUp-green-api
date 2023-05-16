import styled from "styled-components";

export const SendBlockStl = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  > input {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    height: 100%;
    width: 100%;
    color: lightgrey;
  }
  > button {
    padding: 0;
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    > svg {
      stroke: white;
      fill: white;
    }
  }
`;
