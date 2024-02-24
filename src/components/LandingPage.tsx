import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { Login } from "./Login ";
import { ReservationForm } from "./ReservationForm";

export const LandingPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "35%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      {/* <div class="main-container"> */}
      {/* <div class="bg-transparent text-center"> */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 5,
          marginTop: 5,
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        La liberté de se déplacer,à portée de clic!
      </Typography>
      <Box sx={{ width: "fit-content", margin: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Réservez dès maintenant
        </Typography>
        <Typography
          sx={{
            border: `4px solid ${theme.palette.secondary.main}`,
            borderRadius: "115px",
          }}
        ></Typography>
      </Box>
      <ReservationForm />
      {/* <p class="ligne-t"></p> */}
      {/* </div> */}
      {/* </div> */}
    </Box>
  );
};
