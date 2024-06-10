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
  formula,
  nbOfPassenger,
  price,
  timeEstimated,
  setActiveBoxId,
  activeBox,
}: DriverType) => {
  const [listIsActive, setListIsActive] = useState(false);
  const users = useSelector((state) => state.users.users);

  const handleClick = (formula) => {
    // setListIsActive(!listIsActive);
    setActiveBoxId({ formula, price });
  };

  // const otherDriver = users.filter((user: DriverType) => user.name !== name);
  // const displayOtherDriver = otherDriver.map((driver: DriverType) => (
  //   <DriverList key={driver.name} {...driver} />
  // ));

  const getRecap = () => (
    <Typography>
      <UseTranslate id="price" />
    </Typography>
  );
  return (
    <Box>
      <StyledCard
        onClick={() => handleClick(formula)}
        sx={{ backgroundColor: `${activeBox ? "red" : "transparent"}` }}
      >
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
            <Typography margin={2}>{price}€</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AccessTimeIcon />
            {/* <Typography sx={{ textAlign: "start" }}>
              {timeEstimated} min / Depose Prévu {scheduledDropOff}
            </Typography> */}
          </Box>
        </Box>
      </StyledCard>

      {/* {listIsActive ? getRecap() : null} */}
    </Box>
  );
};
