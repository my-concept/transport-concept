import { createSlice } from '@reduxjs/toolkit'
import drivers from 'src/components/FakeData/Drivers/Drivers'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [...drivers]
  },
  reducers: {}
})


export default userSlice.reducer