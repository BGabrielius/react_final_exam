import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #e3e3ee;

  padding: 2em;
  min-height: 100vh;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8fafb;
  box-shadow: 0 5px 20px 10px #c5c5db;
  border-radius: 30px;
  width: 100%;
  max-width: 1024px;

  padding: 1em;
  gap: 2em;
`;
