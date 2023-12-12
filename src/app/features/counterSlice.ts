import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface counterState{
    value : number
}

const initialState : counterState ={
    value : 0
}

export const counterSlice = createSlice({
name : "counter",
initialState,
reducers:{
    increment : state =>{
        state.value+=1
    }
}
})

export const {increment} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
