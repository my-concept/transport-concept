import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useState } from "react";
import { useSelector } from "react-redux";
import { DriverList } from "./DriverList";
import { DriverType } from "./types/genericTypes";

const StyledCard = styled(Card)`
  padding: 2px;
  display: flex;
  flex-direction: row;
  img {
    width: 8em;
    height: 8em;
    border-radius: 5%;
  }
`;

export const CommandCard = ({
  name,
  formula,
  nbOfPassenger,
  price,
  timeEstimated,
  scheduledDropOff,
}: DriverType) => {
  const [listIsActive, setListIsActive] = useState(false);
  const users = useSelector((state) => state.users.users);

  const handleClick = () => {
    setListIsActive(!listIsActive);
  };

  const otherDriver = users.filter((user) => user.name !== name);
  const displayOtherDriver = otherDriver.map((driver: DriverType) => (
    <DriverList
      key={driver.name}
      name={driver.name}
      timeEstimated={driver.timeEstimated}
      nbOfPassenger={driver.nbOfPassenger}
      stars={driver.stars}
      price={driver.stars}
    />
  ));
  console.log(displayOtherDriver);

  return (
    <>
      <StyledCard onClick={handleClick}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img src="https://picsum.photos/200/300" alt="car image" />
        </Box>
        <Box
          sx={{
            width: 1,
            padding: "1em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography>{formula}</Typography>
              <PersonIcon />
              <Typography>{nbOfPassenger}</Typography>
            </Box>
            <Typography>{price}€</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AccessTimeIcon />
            <Typography sx={{ textAlign: "start" }}>
              {timeEstimated} min / Depose Prévu {scheduledDropOff}
            </Typography>
          </Box>
        </Box>
      </StyledCard>

      {listIsActive ? displayOtherDriver : null}
    </>
  );
};
