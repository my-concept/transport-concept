import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ConfirmationButton } from "./ConfirmationButton";
import { styled, useTheme } from "@mui/system";
import { Input, SelectChangeEvent, Typography } from "@mui/material";
import { translate } from "./hooks/useTranslate";

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

import { FormFieldsType, ReservationFormValueType } from "./types/genericTypes";
import { MapSelectInput } from "./map/MapSelectInput";

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
    register,
    watch,
  } = useForm({
    defaultValues: {
      departure: "",
      arrival: "",
      dateHours: "",
      nbOfPassenger: 1,
    },
  });

  const theme = useTheme();
  const [selectValue, setSelectValue] = useState<number>(1);
  const [selectDate, setSelectDate] = useState<string>("");
  const intl = useIntl();
  const dispatch = useDispatch();
  const itinerary = useSelector((state) => state.estimation);
  const navigate = useNavigate();
  const methods = useForm();

  useEffect(() => {
    dispatch(addNbOfPassenger(selectValue));
    selectDate && dispatch(addDate(selectDate));
  }, [selectValue]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectValue(parseInt(e.target.value));
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
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href !== "/estimation" &&
      itinerary.estimation.departure &&
      navigate("/estimation");
  };
  const buttonIsVisible = window.location.href.includes("estimation");

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
      <FormProvider {...methods}>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <Box margin={1}>
            <MapSelectInput
              title={"departure"}
              setInStoreAction={addDeparture}
            />
            {errors.departure && <span>This field is required</span>}
          </Box>
          <Box margin={1}>
            <MapSelectInput title={"arrival"} setInStoreAction={addArrival} />
            {errors.arrival && <span>This field is required</span>}
            <label>{itinerary?.estimation.date}</label>
          </Box>
          <Box margin={1}>
            <Input
              margin={1}
              {...register("dateHours", { required: true })}
              onChange={handleDateChange}
              type="datetime-local"
            />
            {errors.dateHours && <span>This field is required</span>}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ padding: "2em" }}>Nb of passengers</Typography>
            <Select
              margin={1}
              {...register("nbOfPassengers", { required: true })}
              labelId="nbOfPassengers"
              id="nbOfPassengers"
              value={selectValue.toString()}
              onChange={handleChange}
            >
              {[1, 2, 3, 4].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {errors.nbOfPassengers && <span>This field is required</span>}
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
