import styled from "styled-components";

export const UserStl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  > svg:last-child {
    cursor: pointer;
  }
`;
