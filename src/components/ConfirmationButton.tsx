import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

interface StyledButtonProps extends ButtonProps {
  buttonBottomColor?: string;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: #0d0c0c;
  width: 100%;
  border-bottom: 5px solid ${(props) => props.buttonBottomColor || "red"};
  border-radius: 7px 7px 0px 0px;
  color: white;
  max-width: 50%;
  max-height: 3.2em;

  &:hover {
    background-color: green;
  }
`;
interface confirmationButtonProps {
  buttonTitle: string;
  buttonBottomColor?: string;
  buttonAction: () => void;
}

export const ConfirmationButton = ({
  buttonTitle,
  buttonAction,
  buttonBottomColor,
}: confirmationButtonProps) => {
  return (
    <StyledButton buttonBottomColor={buttonBottomColor} onClick={buttonAction}>
      <Typography>{buttonTitle}</Typography>
    </StyledButton>
  );
};
