import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ConfirmationButton } from "./ConfirmationButton";
import { translate } from "./hooks/useTranslate";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const GenericModal = ({
  open,
  setIsOpen,
  estimation,
  price,
  timeEstimated,
}: {
  open: boolean;
  setIsOpen: () => void;
}) => {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setIsOpen(false);

  const submitEstimation = () =>
    console.log("submit estimation, navigate to Stripe");
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {price}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {estimation.date}
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {timeEstimated}
          </Typography>
          <ConfirmationButton
            buttonTitle={translate("confirm")}
            buttonAction={submitEstimation}
          />
        </Box>
      </Modal>
    </div>
  );
};
