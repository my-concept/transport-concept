import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";
import { translate } from "./hooks/useTranslate";

export const ProfilActionBar = () => {
  const barElements = [
    {
      label: translate("updateADocument"),
      Icon: AddCircleIcon,
      action: () => console.log("update document"),
    },
    {
      label: translate("changePaymentMethod"),
      Icon: PaymentIcon,
      action: () => console.log("change payment method"),
    },
    {
      label: translate("deleteAccount"),
      Icon: DeleteIcon,
      action: () => console.log("delete account"),
    },
  ];

  const displayActionBar = barElements.map(({ label, Icon, action }) => (
    <Box
      key={label}
      onClick={action}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "center",
        color: "gray",
        ":hover": { color: "red", cursor: "pointer" },
        ":active": { color: "blue" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", margin: "0 1em" }}>
        <Icon
          sx={{
            mr: 1,
            my: 0.5,
          }}
        />
        <Typography
          sx={{
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  ));
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {displayActionBar}
    </Box>
  );
};
