import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

type Anchor = "top" | "left" | "bottom" | "right";
const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    margin-top: 5vh;
    width: 25vw;
    height: 90vh;
    background-color: red;
  }
`;

export const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Box>
      {(["left", "right", "top", "bottom"] as const).map((anchor) => (
        <Box key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <StyledDrawer
            anchor="left"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)} */}
            <Box sx={{ backgroundColor: "black", flex: 1 }}>Header</Box>
            <Box sx={{ backgroundColor: "blue", flex: 4 }}>Main</Box>
            <Box sx={{ backgroundColor: "black", flex: 1 }}>Footer</Box>
          </StyledDrawer>
        </Box>
      ))}
    </Box>
  );
};
