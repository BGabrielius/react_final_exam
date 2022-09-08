import styled from "styled-components";
export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 2em;
  width: 100%;
  max-width: 600px;
  background-color: #f8fafb;
  box-shadow: 0px 3px 8px 7px #e3e3ee;

  border-radius: 20px;

  h1 {
    color: gray;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;

  padding: 2em;
  width: 400px;

  .time-input-wrapper {
    display: flex;
    justify-content: center;
    align-self: flex-start;
    padding-left: 4.4em;
    gap: 0.5em;
    color: gray;
    font-weight: 600;
  }
  .submit-btn {
    border: 1px solid #c0c0c0;
    border-radius: 5px;

    width: 100px;
    height: 30px;

    background-color: #fff;
    color: gray;

    font-size: 16px;
    &:hover {
      cursor: pointer;
      background-color: #c0c0c0;
      color: #fff;
    }
    margin-top: 1em;
  }
`;

export const StyledInputCointainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 0.5em;
  width: 100%;

  input {
    height: 25px;
    width: 250px;
  }
  label {
    align-self: flex-start;
    padding-left: 4em;
    color: gray;
    font-weight: 600;

    font-size: 18px;
  }
  .registration-date {
    width: auto;
    align-self: flex-start;
    margin-left: 5.4em;
  }
`;
