import cameradata from '@/constants/cameradata';
import { getCategoryPerZone } from '@/constants/filter';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: cameradata,
    filteredData: cameradata ,
    categories:[],
    zones:[]
    

}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setCategoriesAndZones:(state)=>{
            state.categories =  [...new Set(state.data.map(item => item.category))].sort();
            state.zones = [...new Set(state.data.map(item => item.zone_in))].sort((a, b) => a - b);
      
        },
        filterdata: (state, action) => {
            const { category, zones } = action.payload;
              state.filteredData = getCategoryPerZone(state.data,category, zones)
        },


    },
})

export const { filterdata,setCategoriesAndZones } = dataSlice.actions

export default dataSlice.reducer