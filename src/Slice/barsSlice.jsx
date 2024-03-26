import { createSlice } from "@reduxjs/toolkit";

const BarsSlice = createSlice({
    name: 'BarsSlice',
    initialState: {
        openBars:false,
    },

    reducers: {
        OpenBars: (state) =>{
            state.openBars = !state.openBars
        },
       
    }
})
export const {OpenBars} = BarsSlice.actions
export default BarsSlice.reducer