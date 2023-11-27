import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  options:[{
    label:"option1",
    value: 1
  },
  {
    label:"option2",
    value: 2
  },
  {    
    label:"option3",
    value: 3
  },
  ],
  cameraChoosed:"",
  analysisType:""

}

export const bourseSlice = createSlice({
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

export const { selectCamera ,selectAnalysis } = bourseSlice.actions

export default bourseSlice.reducer