import { useEffect, useState } from "react";
import {
  Autocomplete,
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";

import { useFetchAddresses } from "../hooks/useFetchAdress";
import { useDispatch, useSelector } from "react-redux";

export const MapSelectInput = ({
  setInStoreAction,
  title,
  label,
  register,
  setValue,
  // control,
}) => {
  const itinerary = useSelector((state) => state.estimation);
  const [choices, setChoices] = useState([]);
  const [inputVal, setInputVal] = useState(null || "");
  const [inputValue, setInputValue] = useState(null || "");
  const dispatch = useDispatch();

  useEffect(() => {
    title === "departure"
      ? setInputValue(itinerary?.estimation?.departure[0]?.properties?.label)
      : title === "arrival"
      ? setInputValue(itinerary?.estimation?.arrival[0]?.properties?.label)
      : "";
  }, []);

  const handleChange = async (event, value) => {
    if (!value) return null;
    setInputValue(value);
    if (value?.length >= 4) {
      const data = await useFetchAddresses(event?.target?.value);
      setChoices(data?.data?.features);
    }
    const selectedElement = choices?.filter(
      (choice) => choice?.properties?.label == event?.target?.innerText
    );

    setValue(title, selectedElement[0]?.properties?.label);
    await dispatch(setInStoreAction(selectedElement));
  };

  return (
    <>
      <Autocomplete
        clearIcon={
          <IconButton
            onClick={async (e) => {
              setInputValue("");
              await dispatch(setInStoreAction(""));
            }}
            sx={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          >
            <CloseIcon />
          </IconButton>
        }
        id={title}
        key={title}
        disablePortal
        blurOnSelect={true}
        onInputChange={handleChange}
        autoHighlight
        {...register(title, { required: true })}
        inputValue={
          inputValue ||
          itinerary?.estimation?.[title]?.[0]?.properties?.label ||
          ""
        }
        value={{}}
        options={choices || []}
        getOptionLabel={(option) => option?.properties?.label || ""}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" />
        )}
      />
    </>
  );
};
