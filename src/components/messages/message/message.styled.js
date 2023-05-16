import styled from "styled-components";

export const MessageStl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: ${(props) => (props.type === "in" ? "flex-start" : "flex-end")};
  background-color: darkgreen;
  border-radius: 10px;
  padding: 3px 6px;
  border-bottom-right-radius: ${(props) => (props.type === "in" ? 0 : "10px")};
  border-bottom-left-radius: ${(props) => (props.type === "out" ? 0 : "10px")};
  max-width: 70%;
  word-break: break-all;
`;
