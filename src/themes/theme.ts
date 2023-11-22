import { createTheme, PaletteOptions } from "@mui/material/styles";

interface CustomPaletteOptions extends PaletteOptions {
  lightGreyColor: { main: string };
  darkGreyColor: { main: string };
  lightGreenColor: { main: string };
  mediumGreenColor: { main: string };
  darkGreenColor: { main: string };
  redColor: { main: string };
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FDAD00",
    },
    lightGreyColor: {
      main: "#E5E5E5",
    },
    darkGreyColor: {
      main: "#737272",
    },
    lightGreenColor: {
      main: "#14C034",
    },
    mediumGreenColor: {
      main: "rgba(21.77, 118.65, 13.35, 0.82)",
    },
    darkGreenColor: {
      main: "#0A520C",
    },
    redColor: {
      main: "#DC1C50",
    },
  } as CustomPaletteOptions,
});
