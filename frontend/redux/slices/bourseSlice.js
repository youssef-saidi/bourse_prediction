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


}

export const bourseSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {



  

  },
})

export const {  } = bourseSlice.actions

export default bourseSlice.reducer