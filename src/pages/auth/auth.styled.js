import styled from "styled-components";

export const AuthStl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 30%;

    > input {
      background-color: black;
      outline: none;
      border: 2px solid darkgreen;
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      color: lightgray;
    }
    > button {
      width: 100%;
      background-color: darkgreen;
      outline: none;
      border: none;
      padding: 10px;
      border-radius: 10px;
      transition: background-color 0.3s ease-in;
      cursor: pointer;
      :hover {
        background-color: green;
      }
    }
    > span {
      color: darkred;
    }
  }
`;
