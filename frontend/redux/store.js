import { configureStore } from '@reduxjs/toolkit'
import buttonSlice from './slices/buttonSlice'
import userSlice from './slices/userSlice'
import bourseSlice from './slices/bourseSlice';
import dataSlice from './slices/dataSlice';





 const store = configureStore({
    reducer: {
      user: userSlice,
      button:buttonSlice,
      bourse:bourseSlice,
      data:dataSlice
    },
  })

  export default store ;
