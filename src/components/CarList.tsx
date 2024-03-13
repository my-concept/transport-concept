import { CommandCard } from "./CommandCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { DriverType } from "./types/genericTypes";

export const CarList = () => {
  const users = useSelector((state) => state.users.users);

  const carLists = users.map(
    ({
      name,
      timeFromPoint,
      stars,
      price,
      formula,
      nbOfPassenger,
      timeEstimated,
      scheduledDropOff,
    }: DriverType) => (
      <CommandCard
        key={name}
        name={name}
        timeFromPoint={timeFromPoint}
        stars={stars}
        price={price}
        formula={formula}
        nbOfPassenger={nbOfPassenger}
        timeEstimated={timeEstimated}
        scheduledDropOff={scheduledDropOff}
      />
    )
  );
  return <Box>{carLists}</Box>;
};
