import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { UseTranslate, translate } from "./hooks/useTranslate";
import { FormFieldsType } from "./types/genericTypes";
import { GenericForm } from "./GenericForm";

export const Register = () => {
  const fields: FormFieldsType[] = [
    {
      label: translate("username"),
      placeholder: translate("username"),
      register: "username",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("email"),
      placeholder: translate("email"),
      register: "email",
      icon: <Person2Icon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("phone"),
      placeholder: "+33 1234567890 ",
      register: "telephone",
      icon: <LocalPhoneIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("password"),
      placeholder: "xxxxxxxxxxxxxx",
      register: "password",
      icon: <LockIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("confirmationPassword"),
      placeholder: "xxxxxxxxxxxxxx",
      register: "confirmationPassword",
      icon: <LockIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
  ];

  const action = (values: Record<string, string>) => console.log(values);

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "2em" }}
      >
        <UseTranslate id="register" />
      </Typography>
      <GenericForm
        fullWidth
        fields={fields}
        action={action}
        buttonTitle={translate("register")}
      />
    </Box>
  );
};
