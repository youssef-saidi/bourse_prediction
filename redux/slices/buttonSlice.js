import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideBar: true,
  chooseCamera:true

}

export const buttonSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.sideBar = !state.sideBar
    },
    toggleChooseCamera: (state) => {
      state.chooseCamera = !state.chooseCamera
    },

  

  },
})

export const { toggleSideBar,toggleChooseCamera } = buttonSlice.actions

export default buttonSlice.reducer