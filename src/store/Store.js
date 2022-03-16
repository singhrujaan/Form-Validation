import { configureStore } from '@reduxjs/toolkit'
import FormReducer from '../components/FormSlice'
export const store = configureStore({
  reducer: {
      form: FormReducer,
  },
})