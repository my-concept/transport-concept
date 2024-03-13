import { CommandCard } from "./CommandCard";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { DriverType } from "./types/genericTypes";

export const CarList = () => {
  const users = useSelector((state) => state.users.users);

  const carLists = users.map((user: DriverType) => (
    <CommandCard key={user.name} {...user} />
  ));
  return <Box>{carLists}</Box>;
};
