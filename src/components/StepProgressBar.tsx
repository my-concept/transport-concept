import { Step, Stepper, StepLabel } from "@mui/material";
import { styled } from "@mui/system";

const CustomStepLabel = styled(StepLabel)`
  & .MuiStepIcon-root {
    color: black;
  }
  & .MuiStepLabel-label {
    color: grey;
    font-size: 1em;
  }

  & .Mui-active {
    color: orange !important;
  }
  & .Mui-completed {
    color: green !important;
  }
`;

export const StepProgressBar = () => {
  const steps = [
    "Reservation",
    "Selectionner un vehicule",
    "Paiement",
    "Confirmation",
  ];

  return (
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <CustomStepLabel>{label}</CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
