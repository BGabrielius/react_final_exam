import { StyledButton } from "./Button.style";

const Button = ({ text, action, userId }) => {
  return (
    <StyledButton onClick={action} data-user-id={userId}>
      {text}
    </StyledButton>
  );
};

export default Button;
