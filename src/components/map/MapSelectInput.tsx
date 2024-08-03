import { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

import { useFetchAddresses } from "../hooks/useFetchAdress";
import { useDispatch, useSelector } from "react-redux";

export const MapSelectInput = ({
  setInStoreAction,
  title,
  label,
  register,
  setValue,
}) => {
  const itinerary = useSelector((state) => state.estimation);
  const [choices, setChoices] = useState();
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setInputValue(e?.target.value);
    if (Array.from(e?.target?.value).length >= 4) {
      const data = await useFetchAddresses(e?.target?.value);
      setChoices(data?.data?.features);
    }
    const selectedElement = choices?.filter(
      (choice) => choice?.properties?.label == e?.target?.innerText
    );
    setValue(title, selectedElement[0]?.properties?.label);
    await dispatch(setInStoreAction(selectedElement));
  };
  useEffect(() => {
    title === "departure"
      ? setInputValue(itinerary.estimation?.departure[0]?.properties?.label)
      : title === "arrival"
      ? setInputValue(itinerary.estimation?.arrival[0]?.properties?.label)
      : null;
  }, []);

  return (
    <>
      {register && setValue && (
        <Autocomplete
          id={title}
          autoHighlight
          {...register(title, { required: true })}
          inputValue={
            inputValue || itinerary?.estimation?.[title][0]?.properties?.label
          }
          value={inputValue}
          onInputChange={handleChange}
          onChange={async (e) => {
            const selectedElement = choices?.filter(
              (choice) => choice?.properties?.label == e?.target?.innerText
            );
            // setValue(title, selectedElement[0]?.properties.label);
            await dispatch(setInStoreAction(selectedElement));
          }}
          options={choices || []}
          getOptionLabel={(option) => option?.properties?.label}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    </>
  );
};
