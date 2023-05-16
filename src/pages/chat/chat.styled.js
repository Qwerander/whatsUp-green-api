import styled from "styled-components";

export const ChatStl = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: auto 1fr auto;
  height: 90vh;
  gap: 5px;

  color: white;
  > div,
  form {
    padding: 20px;
    background-color: black;
    border: 2px solid darkgreen;
    border-radius: 10px;
  }
`;
