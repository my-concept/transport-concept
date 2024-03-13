import { createSlice } from '@reduxjs/toolkit'
import drivers from 'src/components/FakeData/Drivers/Drivers'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [...drivers]
  },
  reducers: {}
})

// Action creators are generated for each case reducer function

export default userSlice.reducer