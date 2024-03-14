import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

interface AddElementPropsType {
  title: string;
  action?: () => void;
}

export const AddElement = ({ title }: AddElementPropsType) => {
  const [image, setImage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };
  console.log(image);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <input
        onChange={handleChange}
        id="gogo"
        type="file"
        style={{ visibility: "hidden" }}
      />
      <Typography variant="h5">{title}</Typography>
      <label htmlFor="gogo">
        <Paper
          sx={{
            width: "6em",
            height: "6em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0.8em",
            ":hover": { cursor: "pointer" },
          }}
        >
          <Typography variant="h4">+</Typography>
        </Paper>
      </label>
    </Box>
  );
};
