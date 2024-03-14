import { useForm, SubmitHandler, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { ConfirmationButton } from "./ConfirmationButton";
import { useTheme } from "@mui/system";
import { UseTranslate } from "./hooks/useTranslate";
import { Paper } from "@mui/material";
import { FormFieldsType } from "./types/genericTypes";

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    color: grey;
    background-color: white;
  }
  width: 100%;
`;
const CustomBox = styled(Box)`
  width: 100%;
`;

const CustomForm = styled("form")`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  padding: 0.5em;
`;

interface GenericFormPropsType {
  fields: FormFieldsType[];
  action: (data: Record<string, string>) => void;
  buttonTitle: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const GenericForm = ({
  fields,
  action,
  buttonTitle,
  fullWidth = false,
  disabled = false,
}: GenericFormPropsType) => {
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
              key={String(componentFields.label)}
              name={componentFields.register}
              rules={{ required: componentFields.required }}
              control={control}
              disabled={disabled}
              render={({ field }) => (
                <Paper
                  sx={{ margin: "1.5em", width: fullWidth ? "100%" : null }}
                >
                  <CustomTextField
                    {...componentFields}
                    variant="filled"
                    InputProps={{
                      startAdornment: componentFields?.icon || null,
                    }}
                    {...field}
                  />
                  {errors[componentFields.register] && (
                    <UseTranslate id="formError.fieldRequired" />
                  )}
                </Paper>
              )}
            />
          );
        })}

        {errors.exampleRequired && (
          <UseTranslate id="formError.fieldRequired" />
        )}
        {!disabled && (
          <ConfirmationButton
            buttonTitle={buttonTitle}
            buttonBottomColor={theme.palette.secondary.main}
            buttonAction={handleSubmit(onSubmit)}
          />
        )}
      </CustomForm>
    </CustomBox>
  );
};
