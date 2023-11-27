import { configureStore } from '@reduxjs/toolkit'
import buttonSlice from './slices/buttonSlice'
import userSlice from './slices/userSlice'
import cameraSlice from './slices/cameraSlice';
import dataSlice from './slices/dataSlice';





 const store = configureStore({
    reducer: {
      user: userSlice,
      button:buttonSlice,
      camera:cameraSlice,
      data:dataSlice
    },
  })

  export default store ;
