import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBar: true,

}

export const buttonSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar
    },

  },
})

export const { toggleSideBar } = buttonSlice.actions

export default buttonSlice.reducer