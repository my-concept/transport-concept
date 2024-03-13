import { AuthForm } from "./AuthForm";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { UseTranslate, translate } from "./hooks/useTranslate";
import { LoginFieldsType } from "src/components/types/genericTypes";

export const Login = () => {
  const fields: LoginFieldsType[] = [
    {
      label: translate("loginFormLabelUsername"),
      placeholder: "Nom d'utilisateur",
      register: "username",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("loginFormLabelOrganisation"),
      placeholder: "Organisation",
      register: "organisation",
      icon: <Person2Icon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("loginFormLabelPassword"),
      placeholder: "xxxxxxxxxxxxxx",
      register: "password",
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
        <UseTranslate id="login" />
      </Typography>
      <AuthForm
        fields={fields}
        action={action}
        buttonTitle={translate("login")}
      />
    </Box>
  );
};
