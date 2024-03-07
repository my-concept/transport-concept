import { Typography, Box, useTheme } from "@mui/material";
import { ReservationForm } from "./ReservationForm";
import { UseTranslate } from "./hooks/useTranslate";

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
      <Typography
        variant="h4"
        sx={{
          marginBottom: 5,
          marginTop: 5,
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        <UseTranslate id="landingPage.title" />
      </Typography>
      <Box sx={{ width: "fit-content", margin: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          <UseTranslate id="landingPage.subtitle" />
        </Typography>
        <Typography
          sx={{
            border: `4px solid ${theme.palette.secondary.main}`,
            borderRadius: "115px",
          }}
        ></Typography>
      </Box>
      <ReservationForm />
    </Box>
  );
};
