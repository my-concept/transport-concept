import { Step, Stepper, StepLabel } from "@mui/material";
import { styled } from "@mui/system";
import { translate } from "./hooks/useTranslate";
import { useSelector } from "react-redux";

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
    translate("reservation"),
    translate("chooseACar"),
    translate("payment"),
    translate("confirmation"),
  ];

  const activeStep = useSelector((state) => state.isOrdering.activeStep);

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={String(label)}>
          <CustomStepLabel>{label}</CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
