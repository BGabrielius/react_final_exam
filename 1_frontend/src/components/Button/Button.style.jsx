import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid #c0c0c0;
  border-radius: 5px;

  width: 80px;
  height: 25px;

  background-color: #fff;
  color: gray;

  font-size: 16px;
  &:hover {
    cursor: pointer;
    background-color: #c0c0c0;
    color: #fff;
  }
`;
