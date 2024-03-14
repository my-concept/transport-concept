import { createSlice } from '@reduxjs/toolkit'
import rides from 'src/components/FakeData/rides/rides'

export const userSlice = createSlice({
  name: 'rides',
  initialState: {
    rides: [...rides]
  },
  reducers: {}
})


export default userSlice.reducer