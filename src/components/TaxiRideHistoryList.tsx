import SwipeDownAltIcon from "@mui/icons-material/SwipeDownAlt";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Paper, Typography } from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { RideType } from "./types/genericTypes";
import { styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const CustomGrid = styled(Grid)`
  display: flex;
  flexdirection: row;
`;

export const TaxiRideHistoryList = ({
  startingPoint,
  pointOfArrival,
  price,
  driverName,
  date,
  status,
}: RideType) => {
  const statusColor =
    status === "Done"
      ? "lightgreen"
      : status === "Cancelled"
      ? "red"
      : "darkgrey";

  return (
    <Box sx={{ flexGrow: 1, padding: "1em" }}>
      <Paper>
        <Grid container spacing={1} padding={2}>
          <Grid item xs={12}>
            <Typography variant="h5">{date}</Typography>
          </Grid>

          <Grid item xs={5}>
            <List>
              <ListItem>
                <SwipeDownAltIcon />
                <ListItemText>{startingPoint}</ListItemText>
              </ListItem>
              <ListItem>
                <FiberManualRecordIcon />
                <ListItemText>{pointOfArrival}</ListItemText>
              </ListItem>
            </List>
          </Grid>

          <CustomGrid item xs={5}>
            <EuroIcon sx={{ margin: "0 0.5em" }} />
            <Typography>{price}</Typography>
          </CustomGrid>

          <Grid item xs={2}>
            <IconButton>
              <AddCircleRoundedIcon sx={{ color: "green" }} />
            </IconButton>
          </Grid>
          <CustomGrid item xs={5}>
            <CalendarTodayIcon sx={{ margin: "0 0.5em" }} />
            <Typography>{date}</Typography>
          </CustomGrid>
          <CustomGrid item xs={5}>
            <PersonIcon sx={{ margin: "0 0.5em" }} />
            <Typography>{driverName}</Typography>
          </CustomGrid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Divider
              sx={{
                marginTop: "4em",
                border: `0.2em solid ${statusColor}`,
                borderRadius: "10px",
                width: "90%",
                margin: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
