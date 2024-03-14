import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ConfirmationButton } from "./ConfirmationButton";
import { styled, useTheme } from "@mui/system";
import { SelectChangeEvent } from "@mui/material";
import { UseTranslate, translate } from "./hooks/useTranslate";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { FormFieldsType, ReservationFormValueType } from "./types/genericTypes";

const CustomForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

type FieldLabel = "departure" | "destination" | "dateHours" | "nbOfPassenger";

export const ReservationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      departure: "",
      destination: "",
      dateHours: "",
      nbOfPassenger: 1,
    },
  });

  const theme = useTheme();
  const [selectValue, setSelectValue] = useState<number>(1);

  const onSubmit = (values: ReservationFormValueType) => {
    console.log("values", values);
  };

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectValue(parseInt(e.target.value));
  };

  const fields: FormFieldsType[] = [
    {
      label: translate("departure"),
      register: "departure",
      required: true,
    },
    {
      label: translate("destination"),
      register: "destination",
      required: true,
    },
    {
      label: translate("dateHours"),
      register: "dateHours",
      required: true,
    },
    {
      label: translate("nbOfPassenger"),
      register: "nbOfPassenger",
      option: "select",
      required: true,
    },
  ];

  return (
    <div>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((componentFields) => {
          return (
            <Controller
              key={String(componentFields.label)}
              name={componentFields.register as FieldLabel}
              control={control}
              rules={{ required: componentFields.required }}
              render={({ field }) =>
                !componentFields.option ? (
                  <>
                    <TextField
                      {...componentFields}
                      sx={{ marginBottom: "0.5em" }}
                      color="primary"
                      InputProps={{
                        style: { background: "transparent" },
                        startAdornment:
                          componentFields.icon && componentFields.icon,
                      }}
                      {...field}
                    />
                    {errors[componentFields.register as FieldLabel] && (
                      <UseTranslate id="formError.fieldRequired" />
                    )}
                  </>
                ) : (
                  <FormControl fullWidth>
                    <InputLabel id="nbOfPassengers">
                      {componentFields.label}
                    </InputLabel>
                    <Select
                      {...componentFields}
                      labelId="nbOfPassengers"
                      id="nbOfPassengers"
                      value={selectValue.toString()}
                      onChange={handleChange}
                      {...componentFields}
                    >
                      {[1, 2, 3, 4].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )
              }
            />
          );
        })}

        <Box sx={{ width: "50%", marginLeft: "auto" }}>
          <ConfirmationButton
            buttonTitle={translate("estimation")}
            buttonBottomColor={theme.palette.secondary.main}
            buttonAction={handleSubmit(onSubmit)}
          />
        </Box>
      </CustomForm>
    </div>
  );
};
