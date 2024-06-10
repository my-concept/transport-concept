import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ConfirmationButton } from "./ConfirmationButton";
import { styled, useTheme } from "@mui/system";
import { Input, SelectChangeEvent, Typography } from "@mui/material";
import { UseTranslate, translate } from "./hooks/useTranslate";

import { useIntl } from "react-intl";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addDeparture,
  addNbOfPassenger,
  addDate,
  addArrival,
} from "src/redux/estimationSlice";
import { useNavigate } from "react-router-dom";

import { MapSelectInput } from "./map/MapSelectInput";

const CustomForm = styled(FormControl)`
  display: flex;
  flex-direction: column;
  margin: 2em;
`;

type FieldLabel = "departure" | "destination" | "dateHours" | "nbOfPassenger";

export const ReservationForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();

  const theme = useTheme();
  const [selectValue, setSelectValue] = useState<number>(1);
  const [selectDate, setSelectDate] = useState<string>("");
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm();
  const timeFromStore = useSelector(
    (state) => state.estimation.estimation.date
  );
  const nbPassengersFromStore = useSelector(
    (state) => state.estimation.estimation.nbOfPassengers
  );
  useEffect(() => {
    nbPassengersFromStore && setSelectValue(3);
    console.log("nb from store", nbPassengersFromStore);
    console.log("selectValue", selectValue);
    timeFromStore && setValue("dateHours", timeFromStore);
    nbPassengersFromStore && setValue("nbOfPassengers", nbPassengersFromStore);
  }, []);

  const handleChange = async (e: SelectChangeEvent<string>) => {
    setSelectValue(parseInt(e.target.value));
    await dispatch(addNbOfPassenger(e.target.value));
  };

  const handleDateChange = async (e) => {
    setSelectDate(
      intl.formatDate(e.target.value, {
        dateStyle: "full",
        timeStyle: "long",
      })
    );

    await dispatch(addDate(selectDate));
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await dispatch(addNbOfPassenger(data.nbOfPassengers));
    await dispatch(addDate(data.dateHours));
    data && navigate("/estimation");

    console.log("data", data);
  };

  const buttonIsVisible = window.location.href.includes("estimation");

  const selectInputField = [
    {
      title: "departure",
      label: translate("departure"),
      setInStore: addDeparture,
    },
    { title: "arrival", label: translate("arrival"), setInStore: addArrival },
  ];

  return (
    <div>
      <FormProvider {...methods}>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          {selectInputField.map((element) => (
            <Box sx={{ margin: "1em" }}>
              <MapSelectInput
                register={register}
                label={element.label}
                title={element.title}
                setInStoreAction={element.setInStore}
                setValue={setValue}
              />
              {errors[element.title] && (
                <UseTranslate id="formError.fieldRequired" />
              )}
            </Box>
          ))}
          <Box sx={{ margin: "1em" }}>
            <Input
              sx={{ margin: "1em" }}
              {...register("dateHours", { required: true })}
              onChange={handleDateChange}
              type="datetime-local"
            />
            {errors.dateHours && <UseTranslate id="formError.fieldRequired" />}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ padding: "2em" }}>
              <UseTranslate id="NbOfPassenger" />
            </Typography>
            <Select
              sx={{ margin: "1em" }}
              {...register("nbOfPassengers", { required: true })}
              labelId="nbOfPassengers"
              id="nbOfPassengers"
              value={
                (nbPassengersFromStore && nbPassengersFromStore) || selectValue
              }
              onChange={handleChange}
            >
              {[1, 2, 3, 4].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {errors.nbOfPassengers && (
              <UseTranslate id="formError.fieldRequired" />
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              marginLeft: "auto",
              display: !buttonIsVisible ? "visible" : "none",
            }}
          >
            <ConfirmationButton
              buttonTitle={translate("estimation")}
              buttonBottomColor={theme.palette.secondary.main}
              buttonAction={handleSubmit(onSubmit)}
            />
          </Box>
        </CustomForm>
      </FormProvider>
    </div>
  );
};
