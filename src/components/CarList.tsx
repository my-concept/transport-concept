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
    console.log(activeBoxId);
    console.log(isAir);
    console.log("goo mec", estimation?.departure[0]?.properties?.label);
    estimation?.departure[0]?.properties?.label
      .toLowerCase()
      .includes("aeroport") ||
    estimation?.arrival[0]?.properties?.label.toLowerCase().includes("aeroport")
      ? setIsAir(true)
      : setIsAir(false);
  });

  const handleSubmit = () => {
    console.log("le prix calculé");
    setIsModalDisplayed(!isModalDisplayed);
    console.log(isModalDisplayed);
  };

  console.log("airport", estimation?.departure[0]?.properties?.label);
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
      console.log("jjj", price);
      return price;
    } catch (error) {
      console.error("Error calculating final price:", error);
      return 0;
    }
  };

  // const finalPrice = priceCalculation(
  //   distance?.totalDistance,
  //   activeBoxId?.formula
  // );
  const carLists = formulas.map((formula) => {
    // const price = priceCalculation(distance?.totalDistance, formula);
    const price = isAir
      ? priceCalculationFromAirport(distance?.totalDistance, formula)
      : priceCalculation(distance?.totalDistance, formula);
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
