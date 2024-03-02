import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { ConfirmationButton } from "./ConfirmationButton";
import { useTheme } from "@mui/system";
import { LoginFieldsType } from "src/components/types/genericTypes";

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    color: grey;
    background-color: white;
  }
  border-bottom: 2px solid grey;
  border-top: none;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  margin-bottom: 10px;
  border-radius: 7px;
`;

const CustomBox = styled(Box)``;

const CustomForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

interface authFormField {
  fields: LoginFieldsType[];
  action: (data: Record<string, string>) => void;
  buttonTitle: string;
}

export const AuthForm = ({ fields, action, buttonTitle }: authFormField) => {
  const defaultValues: Record<string, string> = {};
  fields.forEach((el) => (defaultValues[el.register] = ""));
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
  });
  const onSubmit: SubmitHandler<typeof defaultValues> = (data) => action(data);
  const theme = useTheme();

  return (
    <CustomBox>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((componentFields) => {
          return (
            <Controller
              key={componentFields.label}
              name={componentFields.register}
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...componentFields}
                  variant="filled"
                  InputProps={{
                    startAdornment: componentFields?.icon || null,
                  }}
                  {...field}
                />
              )}
            />
          );
        })}

        {errors.exampleRequired && <span>This field is required</span>}

        <ConfirmationButton
          buttonTitle={buttonTitle}
          buttonBottomColor={theme.palette.secondary.main}
          buttonAction={handleSubmit(onSubmit)}
        />
      </CustomForm>
    </CustomBox>
  );
};
