import { Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import transactions from "./FakeData/transactions/transaction";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ListItemButton from "@mui/material/ListItemButton";

import { Box } from "@mui/system";
import { UseTranslate } from "./hooks/useTranslate";

export const LastTransactionList = () => {
  const displayList = transactions.map((el) => (
    <Box key={el.hour}>
      <ListItemButton
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <RouteRoundedIcon sx={{ marginRight: "1em" }} />
          <ListItemText primary={el.date} />
        </Box>
        <ListItemText primary={el.hour} />
        <ListItemText primary={`${el.price}€`} />
      </ListItemButton>
      <Divider component="li" />
    </Box>
  ));
  return (
    <Paper sx={{ padding: "1em", margin: "1em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "0 1em 3em 1em",
        }}
      >
        <AccessTimeRoundedIcon sx={{ marginRight: "0.5em" }} />
        <Typography variant="h5">
          <UseTranslate id="lastTransactions" />
        </Typography>
      </Box>

      <List>{displayList}</List>
    </Paper>
  );
};
