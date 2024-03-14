import { Box, Paper, Typography } from "@mui/material";

interface AddElementPropsType {
  title: string;
  action?: () => void;
}

const action = () => console.log("add");
export const AddElement = ({ title }: AddElementPropsType) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        ":hover": { cursor: "pointer" },
      }}
      onClick={action}
    >
      <Typography variant="h5">{title}</Typography>
      <Paper
        sx={{
          width: "6em",
          height: "6em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0.8em",
        }}
      >
        <Typography variant="h4">+</Typography>
      </Paper>
    </Box>
  );
};
