import { CommandCard } from "./CommandCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { DriverType } from "./types/genericTypes";
import {
  priceCalculation,
  priceCalculationFromAirport,
  timeCalculation,
} from "./map/priceCalculation";
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
  const [prii, setprii] = useState(null);
  const [isAir, setIsAir] = useState(false);

  useEffect(() => {
    estimation?.departure[0]?.properties?.label
      .toLowerCase()
      .includes("aeroport") ||
    estimation?.arrival[0]?.properties?.label.toLowerCase().includes("aeroport")
      ? setIsAir(true)
      : setIsAir(false);
  });

  const handleSubmit = () => {
    setIsModalDisplayed(!isModalDisplayed);
  };

  const finalPrice = () => {
    try {
      const distance = distance?.totalDistance;
      const formula = activeBoxId?.formula;

      if (!distance || !formula) {
        throw new Error("Missing required parameters: distance or formula");
      }

      const price =
        isAir === true
          ? priceCalculationFromAirport(distance, formula)
          : priceCalculationFromAirport(distance, formula);
      return price;
    } catch (error) {
      console.error("Error calculating final price:", error);
      return 0;
    }
  };

  const carLists = formulas.map((formula) => {
    const price = isAir
      ? priceCalculationFromAirport(distance?.totalDistance, formula)
      : priceCalculation(distance?.totalDistance, formula);
    return (
      <CommandCard
        activeBox={activeBoxId?.formula === formula ? true : false}
        key={formula.name}
        formula={formula.name}
        price={price}
        timeEstimated={timeEstimated}
        nbOfPassenger={estimation.addNbOfPassenger}
        setActiveBoxId={setActiveBoxId}
        carImage={formula.image}
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
