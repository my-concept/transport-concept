import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ConfirmationButton } from "./ConfirmationButton";
import { styled, useTheme } from "@mui/system";
import { SelectChangeEvent } from "@mui/material";

import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  LoginFieldsType,
  ReservationFormValueType,
} from "./types/genericTypes";

const CustomForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

type FieldLabel = "username" | "organisation" | "password" | "nbOfPassenger";

export const ReservationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      organisation: "",
      password: "",
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
    console.log("uu", typeof e.target.value);
  };

  const buttonTitle = "Estimation";

  const fields: LoginFieldsType[] = [
    {
      label: "Depart",
      placeholder: "Nom d'utilisateur",
      register: "departure",
      required: true,
    },
    {
      label: "Destination",
      placeholder: "Organisation",
      register: "organisation",
      required: true,
    },
    {
      label: "Date / Heure",
      placeholder: "xxxxxxxxxxxxxx",
      register: "password",
      required: true,
    },
    {
      label: "Nombre de passagers",
      register: "nbOfPassenger",
      option: "select",
      required: true,
    },
  ];

  console.log("k", errors);
  return (
    <div>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((componentFields) => {
          return (
            <Controller
              key={componentFields.label}
              name={componentFields.register as FieldLabel}
              control={control}
              rules={{ required: componentFields.required }}
              render={({ field }) =>
                !componentFields.option ? (
                  <>
                    <TextField
                      {...componentFields}
                      sx={{ marginBottom: "0.5em" }}
                      // error={true}
                      color="primary"
                      InputProps={{
                        style: { background: "transparent" },
                        startAdornment:
                          componentFields.icon && componentFields.icon,
                      }}
                      {...field}
                    />
                    {errors[componentFields.register as FieldLabel] && (
                      <span>This field is required</span>
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
            buttonTitle={buttonTitle}
            buttonBottomColor={theme.palette.secondary.main}
            buttonAction={handleSubmit(onSubmit)}
          />
        </Box>
      </CustomForm>
    </div>
  );
};
