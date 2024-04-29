import { CommandCard } from "./CommandCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { DriverType } from "./types/genericTypes";
import { priceCalculation, timeCalculation } from "./map/priceCalculation";

export const CarList = () => {
  const users = useSelector((state) => state.users.users);
  const estimation = useSelector((state) => state.estimation.estimation);
  const distance = useSelector((state) => state.estimation.estimation.distance);
  const timeEstimated = timeCalculation(distance?.totalTime || 1);
  const carLists = users.map((user: DriverType) => {
    const price = priceCalculation(distance?.totalDistance, user.formula);
    return (
      <CommandCard
        key={user.name}
        {...user}
        formula={user.formula}
        price={price}
        timeEstimated={timeEstimated}
        nbOfPassenger={estimation.addNbOfPassenger}
      />
    );
  });
  return <Box>{carLists}</Box>;
};
