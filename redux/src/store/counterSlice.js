import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState : 0,
    name : "counter",
    reducers : {
        increament : (state)=> state + 1,
        decreament :  (state)=> state - 1
    }
})

export default counterSlice.reducer
export const {increament , decreament} = counterSlice.actions