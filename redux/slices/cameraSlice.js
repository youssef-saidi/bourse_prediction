import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  options:[{
    option: "Camera 1"
  },
  {
    option: "Camera 2"
  },
  {
    option: "Camera 3"
  },
  ],
  cameraChoosed:"",
  analysisType:""

}

export const cameraSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    selectCamera: (state,action) => {
      state.cameraChoosed = action.payload
    },
    selectAnalysis: (state,action) => {
      state.analysisType = action.payload
    },


  

  },
})

export const { selectCamera ,selectAnalysis } = cameraSlice.actions

export default cameraSlice.reducer