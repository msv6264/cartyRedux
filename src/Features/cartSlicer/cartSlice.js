import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'countItems',
  initialState: {
    items: {},
  },
  reducers: {
    increment: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    decrement: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) - 1;
    },
    reset: (state, action) => {
      const id = action.payload;
      state.items[id] = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer