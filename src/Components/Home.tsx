import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../app/features/counterSlice";
import { addNewEmployee,deleteEmployee,updateEmployee } from "../app/features/employeeDetailsSlice";
import Modal from "./Modal";
import { useGetPokemonByNameQuery } from "../app/features/FetchData";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [modelState,setModelState] = useState(false)
  const count = useAppSelector((state) => state.counter.value);
  const employeeData = useAppSelector((state) => state.employee.employeeData);
  const dispatch = useAppDispatch();

  const {data,error,isLoading} = useGetPokemonByNameQuery("ditto")

  const handleIndex = (i: number) => {
    if (index < employeeData.length) {
      setIndex(i);
    }
  };

  const updateData ={
    name:"update",department:"IT",age:20,salary:50000,url:""
  }



  return (
    <>
    <div className={`p-4 md:px-6 md:py-10 ${modelState ? "opacity-30" : ""} relative`}>
      <button onClick={()=>setModelState(!modelState)} className="px-8 mb-4 py-3 rounded-md bg-slate-600 text-white text-[20px] font-bold">Click</button>
      {data && <h1>{data.name}</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-index md:gap-x-6 z-3">
        <div className="h-full md:h-[800px] bg-slate-100 rounded-md shadow-md p-4 md:px-6 md:py-10">
          {employeeData.map((item, i) => (
            <div
              key={i}
              onClick={() => handleIndex(i)}
              className="w-full max-h-[70px] bg-white rounded-lg px-6 py-3 md:px-8 md:py-4 mb-3 md:mb-6"
            >
              <div className="flex items-center justify-between">
                <img
                  src={
                    item.url
                      ? item.url
                      : "https://cdn-icons-png.flaticon.com/512/6997/6997490.png"
                  }
                  alt="user-img"
                  className="rounded-[50%] h-[30px] w-[30px]"
                />
                <h1 className="text-[20px] font-bold le ">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className="h-full md:h-[800px] bg-slate-100 rounded-md shadow-md px-2 py-4 md:px-6 md:py-10 ">
          <div className="flex flex-col items-center ">
            <img
              src={
                employeeData[index].url
                  ? employeeData[index].url
                  : "https://cdn-icons-png.flaticon.com/512/6997/6997490.png"
              }
              alt=""
              className="w-[200px] h-[200px] rounded-lg"
            />
            <div className="mt-6 flex flex-col items-center justify-center">
              <h1 className="text-[25px] font-bold mt-3">
                {employeeData[index].name}
              </h1>
              {employeeData[index].age && (
                <h1 className="text-[25px] font-bold mt-3">
                  Age:-{employeeData[index].age}
                </h1>
              )}
              {employeeData[index].salary && (
                <h1 className="text-[25px] font-bold mt-3">
                  Salary:-{employeeData[index].salary}
                </h1>
              )}
              {employeeData[index].department && (
                <h1 className="text-[25px] font-bold mt-3">
                  Department:-{employeeData[index].department}
                </h1>
              )}
              <div className="mt-3 flex items-center justify-center gap-x-4">
                <button onClick={()=>dispatch(updateEmployee({index,user:updateData}))} className="px-6 py-3 bg-green-200 text-white rounded-lg font-bold hover:bg-green-500">Update</button>
                <button onClick={()=>dispatch(deleteEmployee(index))} className="px-6 py-3 bg-red-200 text-white rounded-lg font-bold hover:bg-red-500">Delete</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {modelState && <Modal setModelState={setModelState} />}
    </>
  );
};

export default Home;
