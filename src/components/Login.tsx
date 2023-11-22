import { AuthForm } from "./AuthForm";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Login = () => {
  const fields = [
    {
      label: "* Nom d'utilisateur / Email",
      placeholder: "Nom d'utilisateur",
      register: "username",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
    },
    {
      label: "Organisation",
      placeholder: "Organisation",
      register: "organisation",
      icon: <Person2Icon sx={{ height: "20px", paddingTop: "15px" }} />,
    },
    {
      label: "* Password",
      placeholder: "xxxxxxxxxxxxxx",
      register: "password",
      icon: <LockIcon sx={{ height: "20px", paddingTop: "15px" }} />,
    },
  ];

  const action = (values) => console.log(values);
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
        Login
      </Typography>
      <AuthForm fields={fields} action={action} buttonTitle="Login" />
    </Box>
  );
};
