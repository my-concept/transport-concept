import { createSlice } from "@reduxjs/toolkit";

export const estimationSlice = createSlice({
  name: "estimation",
  initialState: {
    estimation: {
      departure: [],
      arrival: [],
      date: undefined,
      addNbOfPassenger: undefined,
    },
  },
  reducers: {
    updateEstimation: (state, action) => {
      return {
        ...state,
        estimation: action.payload,
      };
    },
    addDeparture: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          departure: action.payload,
        },
      };
    },
    addArrival: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          arrival: action.payload,
        },
      };
    },
    addDate: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          date: action.payload,
        },
      };
    },
    addNbOfPassenger: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          nbOfPassengers: action.payload,
        },
      };
    },
    addDistance: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          distance: action.payload,
        },
      };
    },
    addPrice: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          price: action.payload,
        },
      };
    },
    addFormul: (state, action) => {
      return {
        ...state,
        estimation: {
          ...state.estimation,
          formul: action.payload,
        },
      };
    },
  },
});

export const {
  updateEstimation,
  addDeparture,
  addNbOfPassenger,
  addDate,
  addArrival,
  addDistance,
  addPrice,
} = estimationSlice.actions;

export default estimationSlice.reducer;
