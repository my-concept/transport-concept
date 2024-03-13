import { createSlice } from '@reduxjs/toolkit'

const activeStepLayout = createSlice({
  name: 'step',
  initialState: {
    isOrdering: true,
    activeStep:0
  },
  reducers: {
    toggleIsOrdering:(state) => {
      state.isOrdering = !state.isOrdering
    }
  }
})


export const { toggleIsOrdering } = activeStepLayout.actions



export default activeStepLayout.reducer