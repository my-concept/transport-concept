import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { styled } from "@mui/system";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerMain } from "./DrawerMain";
import { DrawerFooter } from "./DrawerFooter";

const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    margin-top: 5vh;
    width: 25vw;
    height: 90vh;
    background-color: black;
  }
`;

export const AppDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(true);
  };

  return (
    <Box>
      <Button onClick={toggleDrawer}>Ouvrir</Button>
      <StyledDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box sx={{ flex: 1 }}>
          <DrawerHeader />
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            flex: 4,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <DrawerMain />
        </Box>
        <Box sx={{ backgroundColor: "black" }}>
          <DrawerFooter />
        </Box>
      </StyledDrawer>
    </Box>
  );
};
