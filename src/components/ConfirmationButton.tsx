import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)`
  background-color: #0d0c0c;
  width: 100%;
  border-bottom: 5px solid ${(props) => props.buttonBottomColor || "red"};
  border-radius: 7px 7px 0px 0px;
  color: white;

  &:hover {
    background-color: green;
  }
`;

interface confirmationButtonProps {
  buttonTitle: string;
  buttonBottomColor: string;
  buttonAction: () => void;
}

export const ConfirmationButton = ({
  buttonTitle,
  buttonAction,
  buttonBottomColor,
}: confirmationButtonProps) => {
  return (
    <StyledButton buttonBottomColor={buttonBottomColor} onClick={buttonAction}>
      <span>{buttonTitle}</span>
    </StyledButton>
  );
};
