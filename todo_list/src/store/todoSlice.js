import { createSlice } from "@reduxjs/toolkit"; 
const initialState = {
    data: [],
};
const todoSlice = createSlice({
    initialState ,
    name : "todolist",
    reducers : {
        add : (state , action)=>{
            state.data.push(action.payload)
        },
        remove : (state , action)=>{
            state.data = state.data.filter(item => item.id !== action.payload)
        }
    }

})

export default todoSlice.reducer
export const { add , remove } = todoSlice.actions
