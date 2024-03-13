import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import ridesReducer from './ridesSlices'
 
export default configureStore({
  reducer: {
    users:userReducer,
    rides:ridesReducer
  }
})