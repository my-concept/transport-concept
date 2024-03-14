import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { FormFieldsType } from "src/components/types/genericTypes";
import { UseTranslate, translate } from "./hooks/useTranslate";
import { GenericForm } from "./GenericForm";

export const Login = () => {
  const fields: FormFieldsType[] = [
    {
      label: translate("loginFormLabelUsername"),
      placeholder: translate("username"),
      register: "username",
      icon: <EmailIcon sx={{ height: "20px", paddingTop: "15px" }} />,
      required: true,
    },
    {
      label: translate("loginFormLabelOrganisation"),
      placeholder: translate("loginFormLabelOrganisation"),
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
      <GenericForm
        fullWidth
        fields={fields}
        action={action}
        buttonTitle={translate("login")}
      />
    </Box>
  );
};
