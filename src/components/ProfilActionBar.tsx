import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";

export const ProfilActionBar = () => {
  const barElements = [
    {
      label: "Ajouter / Modifier un document ",
      Icon: AddCircleIcon,
      action: () => console.log("ji"),
    },
    {
      label: "Modifier la méthode de paiement",
      Icon: PaymentIcon,
      action: () => console.log("ji"),
    },
    {
      label: "Supprimer mon compte",
      Icon: DeleteIcon,
      action: () => console.log("ji"),
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
