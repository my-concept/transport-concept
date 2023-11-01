import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)`
  background-color: #0d0c0c;
  width: 100%;
  border-bottom: 5px solid ${(props) => props?.buttonColor || "red"};
  border-radius: 7px 7px 0px 0px;

  &:hover {
    background-color: green;
  }
`;

export const ConfirmationButton = () => {
  return (
    <StyledButton>
      <span>Confirmer</span>
    </StyledButton>
  );
};
