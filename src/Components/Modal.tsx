import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { useAppDispatch,useAppSelector } from '../app/hooks';
import { addNewEmployee } from '../app/features/employeeDetailsSlice';


type ModalProps = {
    setModelState: (state: boolean) => void;
  };

  interface User  {
    name: string,
    department : string,
    age?: number,
    salary?:number,
    url? : string
}



const Modal = ({setModelState}:ModalProps) => {
    const dispatch = useAppDispatch()
    const [employeeData,setEmployeeData] = useState({
        name : "",
        department : "",
        age : 0,
        salary : 0,
        url : ""
    })
    
    const [name,setName] = useState("")
    const [department,setDepartment] = useState("")
    const [age,setAge]  = useState(0)
    const [salary,setSalary]  = useState(0)
    const [url,setUrl] = useState("")
    
    const handleSubmit = () => {
        const updatedEmployeeData = {
          name: name.trim(),
          department: department.trim(),
          age,
          salary,
          url
        };
      
        setEmployeeData(prevState => ({
          ...prevState,
          ...updatedEmployeeData
        }));
      
        // Reset individual states
        setName("");
        setDepartment("");
        setAge(0);
        setSalary(0);
        setUrl("");
      };
    
    useEffect(()=>{
        console.log(employeeData)
    },[employeeData])
  return (
    <div className='fixed top-0 left-0 md:left-[35%] md:top-[30%] z-50 p-4 md:px-6 md:py-10 flex items-center justify-center'>
        
        <div className='bg-white rounded-[20px] w-full md:max-w-[400px] shadow-md p-2 md:px-6 md:py-6'>
            <HiOutlineTrash onClick={()=>setModelState(false)}/>
           <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter A Name' className='h-[40px] w-full bg-slate-50  border-solid rounded-md focus:outline-none mb-3 md:mb-5' required/>
           <input type='text' value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder='Enter Department' className='h-[40px] w-full bg-slate-50  border-solid rounded-md focus:outline-none mb-3 md:mb-5' required/>
           <input type='number' value={age} onChange={(e)=>setAge(parseInt(e.target.value))} placeholder='Enter Age' className='h-[40px] w-full bg-slate-50  border-solid rounded-md focus:outline-none mb-3 md:mb-5' />
           <input type='number' value={salary} onChange={(e)=>setSalary(parseInt(e.target.value))} placeholder='Enter A Salary' className='h-[40px] w-full bg-slate-50  border-solid rounded-md focus:outline-none mb-3 md:mb-5' />
           <input type='text' value={url} onChange={(e)=>setUrl(e.target.value)} placeholder='Enter A URL' className='h-[40px] w-full bg-slate-50  border-solid rounded-md focus:outline-none mb-3 md:mb-5' />
           <button onClick={()=>dispatch(addNewEmployee({name:name.trim(),department:department.trim(),age,salary,url}))} className='px-6 py-3  font-bold rounded-lg mt-3 text-white bg-slate-200'>Submit</button>
        </div>
    </div>
  )
}

export default Modal