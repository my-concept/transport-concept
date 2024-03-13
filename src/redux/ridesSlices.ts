import { createSlice } from '@reduxjs/toolkit'
import rides from 'src/components/FakeData/rides/rides'

export const userSlice = createSlice({
  name: 'rides',
  initialState: {
    rides: [...rides]
  },
  reducers: {}
})

// Action creators are generated for each case reducer function

export default userSlice.reducer