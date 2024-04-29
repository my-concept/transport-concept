import { createSlice } from "@reduxjs/toolkit";
import rides from "src/components/FakeData/rides/rides";

export const rideSlice = createSlice({
  name: "rides",
  initialState: {
    rides: [...rides],
  },
  reducers: {
    updateRide: (state, actions) => {
      state.rides = actions.payload;
    },
  },
});

export const { updateRide } = rideSlice.actions;

export default rideSlice.reducer;
