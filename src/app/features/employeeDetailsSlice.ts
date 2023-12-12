import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface User  {
    name: string,
    department : string,
    age?: number,
    salary?:number,
    url? : string
}

const initialState  = {
    employeeData  : [
        {name:"John Doe",department:"IT"},
        {name:"Jane Smith",department:"Marketing",age:32},
        {name:"Richard Roe",department:"Finance",salary:5000},
        {name:"Suraj ",department:"Finance",salary:5000},
        {name:"Ankit",department:"Marketing",salary:5000},
        {name:"Khushi",department:"IT",salary:5000},
    ] as User []
} 

const employeeSlice = createSlice ({
    name:"employee",
    initialState,
    reducers : {
        addNewEmployee : (state,action : PayloadAction <User>)=>{
            state.employeeData.push(action.payload)
        }
    }
})

export const {addNewEmployee} = employeeSlice.actions

export default employeeSlice.reducer

