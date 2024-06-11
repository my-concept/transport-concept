import { CommandCard } from "./CommandCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { DriverType } from "./types/genericTypes";
import { priceCalculation, timeCalculation } from "./map/priceCalculation";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { UseTranslate, translate } from "./hooks/useTranslate";

import { formulas } from "./utils/formulas";
import { ConfirmationButton } from "./ConfirmationButton";
import { GenericModal } from "./Modal";
export const CarList = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const users = useSelector((state) => state.users.users);
  const estimation = useSelector((state) => state.estimation.estimation);
  const distance = useSelector((state) => state.estimation.estimation.distance);
  const timeEstimated = timeCalculation(distance?.totalTime || 1);
  const [activeBoxId, setActiveBoxId] = useState(null);

  useEffect(() => {
    console.log(activeBoxId);
  });

  const handleSubmit = () => {
    console.log("le prix calculé");
    setIsModalDisplayed(!isModalDisplayed);
    console.log(isModalDisplayed);
  };

  const finalPrice = priceCalculation(
    distance?.totalDistance,
    activeBoxId?.formula
  );
  const carLists = formulas.map((formula) => {
    const price = priceCalculation(distance?.totalDistance, formula);
    return (
      <CommandCard
        activeBox={activeBoxId?.formula === formula ? true : false}
        key={formula}
        formula={formula}
        price={price}
        timeEstimated={timeEstimated}
        nbOfPassenger={estimation.addNbOfPassenger}
        setActiveBoxId={setActiveBoxId}
      />
    );
  });
  return (
    <Box>
      {carLists}
      <Box>
        <ConfirmationButton
          buttonAction={handleSubmit}
          buttonTitle={translate("confirm")}
          onClick={handleSubmit}
        />
      </Box>
      <GenericModal
        open={isModalDisplayed}
        setIsOpen={setIsModalDisplayed}
        estimation={estimation}
        price={finalPrice}
        timeEstimated={timeEstimated}
      />
    </Box>
  );
};
// user.formula === activeBoxId ?
