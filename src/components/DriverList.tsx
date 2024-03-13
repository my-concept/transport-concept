import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import { List } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import { DriverType } from "./types/genericTypes";

const CustomListItemIcon = styled(ListItemIcon)`
  min-width: 2em;
  display: flex;
  align-items: center;
`;

export const DriverList = (driverInfo: DriverType) => {
  return (
    <List>
      <ListItem>
        <List
          sx={{
            paddingTop: 0,
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            width: "100%",
          }}
        >
          <ListItem>
            <CustomListItemIcon>
              <DirectionsCarIcon />
            </CustomListItemIcon>
            <ListItemText primary={driverInfo.name} />
          </ListItem>
          <ListItem>
            <CustomListItemIcon>
              <AccessTimeIcon />
            </CustomListItemIcon>
            <ListItemText primary={driverInfo.timeEstimated} />
          </ListItem>
          <ListItem>
            <CustomListItemIcon>
              <WorkIcon />
            </CustomListItemIcon>
            <ListItemText primary={driverInfo.nbOfPassenger} />
          </ListItem>
          <ListItem>
            <CustomListItemIcon>
              <ListItemText primary={driverInfo.stars} />
              <StarsIcon />
            </CustomListItemIcon>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
};
