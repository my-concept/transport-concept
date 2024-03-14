import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";

import { GenericForm } from "./GenericForm";
import { UseTranslate, translate } from "./hooks/useTranslate";
import Person2Icon from "@mui/icons-material/Person2";
import { ProfilActionBar } from "./ProfilActionBar";

export const MyProfil = () => {
  const fields = [
    {
      label: translate("lastName"),
      placeholder: translate("lastName"),
      register: "lastName",
      icon: <Person2Icon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("firstName"),
      placeholder: translate("firstName"),
      register: "firstName",
      icon: <Person2Icon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("email"),
      placeholder: translate("email"),
      register: "email",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("phone"),
      placeholder: translate("phone"),
      register: "+12 345678912",
      icon: <LocalPhoneIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("password"),
      placeholder: translate("password"),
      register: "xxxxxxxxxxxxxxxx",
      icon: <LockIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
  ];

  const action = (values: Record<string, string>) => console.log(values);

  return (
    <Box
      padding={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
        width: "75%",
      }}
    >
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "2em" }}
        >
          <UseTranslate id="modifyMyProfil" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={() => console.log("change avatar")}>
            <img
              style={{ height: "10em", width: "10em" }}
              src="https://picsum.photos/200/300"
              alt="car image"
            />
          </IconButton>
        </Box>
        <GenericForm
          disabled
          fields={fields}
          action={action}
          buttonTitle={translate("login")}
        />
        <Box sx={{ padding: "4em" }}>
          <ProfilActionBar />
        </Box>
      </Box>
    </Box>
  );
};
