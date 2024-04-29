import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Autocomplete, TextField } from "@mui/material";

import { useFetchAddresses } from "../hooks/useFetchAdress";
import { useDispatch, useSelector } from "react-redux";
import { useFormContext } from "react-hook-form";

export const MapSelectInput = ({ setInStoreAction, title }) => {
  const itinerary = useSelector((state) => state.estimation);
  const [choices, setChoices] = useState();
  const [selectedAddress, setSelectedAddress] = useState();
  const [inputValue, setInputValue] = useState();
  const [inputValue2, setInputValue2] = useState();
  const dispatch = useDispatch();
  const { register } = useFormContext();

  const handleChange = async (e) => {
    setInputValue(e?.target.value);
    if (Array.from(e?.target.value).length >= 4) {
      const data = await useFetchAddresses(e.target.value);
      setChoices(data?.data.features);
    }
  };
  useEffect(() => {
    title === "departure"
      ? setInputValue(itinerary.estimation?.departure[0]?.properties?.label)
      : title === "arrival"
      ? setInputValue(itinerary.estimation?.arrival[0]?.properties?.label)
      : null;
  }, [itinerary]);

  return (
    <Box>
      <Autocomplete
        id={title}
        autoHighlight
        {...register(title, { required: true })}
        value={itinerary?.departure || inputValue}
        inputValue={
          itinerary?.estimation?.[title][0]?.properties?.label || inputValue
        }
        onInputChange={handleChange}
        onChange={async (e) => {
          const selectedElement = choices?.filter(
            (choice) => choice.properties.label == e.target.innerText
          );
          setSelectedAddress(selectedElement);
          setInputValue2(selectedElement[0]?.properties.label);
          dispatch(setInStoreAction(selectedElement));
        }}
        options={choices || []}
        getOptionLabel={(option) => option?.properties?.label}
        renderInput={(params) => <TextField {...params} label={title} />}
      />
    </Box>
  );
};
