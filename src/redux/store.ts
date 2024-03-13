import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import ridesReducer from './ridesSlices'
import ordersSlice from './ordersSlice'
 
export default configureStore({
  reducer: {
    users:userReducer,
    rides:ridesReducer,
    isOrdering:ordersSlice
  }
})