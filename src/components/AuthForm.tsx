import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { ConfirmationButton } from "./ConfirmationButton";
import { useTheme } from "@mui/system";

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

export const AuthForm = ({ fields, action, buttonTitle }) => {
  const onSubmit: SubmitHandler<Input> = (data) => action(data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const theme = useTheme();
  return (
    <CustomBox>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((componentFields) => {
          return (
            <>
              <Controller
                key={componentFields.label}
                name={componentFields.register}
                control={control}
                render={({ field }) => (
                  <CustomTextField
                    label={componentFields.label}
                    defaultValue={componentFields.defaultValue}
                    placeholder={componentFields.placeholder}
                    variant="filled"
                    InputProps={{
                      startAdornment:
                        componentFields.icon && componentFields.icon,
                      disableUnderline: true,
                    }}
                    {...field}
                  />
                )}
              />
            </>
          );
        })}

        {errors.exampleRequired && <span>This field is required</span>}

        <ConfirmationButton
          buttonTitle={buttonTitle}
          buttonBottomColor={theme.palette.secondary.main}
        />
      </CustomForm>
    </CustomBox>
  );
};
