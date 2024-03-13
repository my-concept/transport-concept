import { AuthForm } from "./AuthForm";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { UseTranslate, translate } from "./hooks/useTranslate";
import { LoginFieldsType } from "./types/genericTypes";

export const Register = () => {
  const fields: LoginFieldsType[] = [
    {
      label: translate("username"),
      placeholder: "Nom d'utilisateur",
      register: "username",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("email"),
      placeholder: "Email",
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
      <AuthForm
        fields={fields}
        action={action}
        buttonTitle={translate("register")}
      />
    </Box>
  );
};
