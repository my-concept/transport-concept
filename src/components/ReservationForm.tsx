import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ConfirmationButton } from "./ConfirmationButton";
import { styled, useTheme } from "@mui/system";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const CustomForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

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

  const onSubmit = (values: Record<string, string>) => {
    console.log("values", values);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const buttonTitle = "Estimation";

  const fields = [
    {
      label: "Depart",
      placeholder: "Nom d'utilisateur",
      register: "username",
    },
    {
      label: "Destination",
      placeholder: "Organisation",
      register: "organisation",
    },
    {
      label: "Date / Heure",
      placeholder: "xxxxxxxxxxxxxx",
      register: "password",
    },
    {
      label: "Nombre de passagers",
      register: "nbOfPassenger",
      option: "select",
    },
  ];

  return (
    <div>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {fields?.map((componentFields) => {
          return (
            <Controller
              key={componentFields.label}
              name={componentFields.register}
              control={control}
              render={({ field }) =>
                !componentFields.option ? (
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
                ) : (
                  <FormControl fullWidth>
                    <InputLabel id="nbOfPassengers">
                      {componentFields.label}
                    </InputLabel>
                    <Select
                      {...componentFields}
                      labelId="nbOfPassengers"
                      id="nbOfPassengers"
                      value={selectValue}
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

        {errors.exampleRequired && <span>This field is required</span>}

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
