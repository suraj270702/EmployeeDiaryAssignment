import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";


interface User  {
    name: string,
    department : string,
    age?: number,
    salary?:number,
    url? : string
}

type updateEmployee = {
    index : number,
    user : User
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
        },
        deleteEmployee : (state,action : PayloadAction <number>)=>{
            const index = action.payload;
           state.employeeData= state.employeeData.filter((_,i)=>i!==index)
        },
        updateEmployee : (state,action : PayloadAction<updateEmployee>)=>{
            const { index, user } = action.payload;
    const { name, department, age, salary, url } = user;
            state.employeeData = state.employeeData.map((employee,i)=>(
                i === index
            ? {
                  ...employee,
                  name: name ? name.trim() : employee.name,
                  department: department ? department.trim() : employee.department,
                  age: age !== undefined || NaN ? age : employee.age,
                  salary: salary !== undefined || NaN ? salary : employee.salary,
                  url: url ? url : employee.url,
              }
            : employee
            ))
        }
    }
})

export const {addNewEmployee,deleteEmployee,updateEmployee} = employeeSlice.actions

export default employeeSlice.reducer

