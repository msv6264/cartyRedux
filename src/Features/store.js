import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlicer/cartSlice"

export const store = configureStore({
    reducer: {
        countItems: cartReducer,
      },
})