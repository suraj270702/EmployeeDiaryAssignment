import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../app/features/counterSlice";
import { addNewEmployee } from "../app/features/employeeDetailsSlice";

const Home = () => {
  const [index, setIndex] = useState(0);
  const count = useAppSelector((state) => state.counter.value);
  const employeeData = useAppSelector((state) => state.employee.employeeData);
  const dispatch = useAppDispatch();

  const handleIndex = (i: number) => {
    if (index < employeeData.length) {
      setIndex(i);
    }
  };

  return (
    <div className="p-4 md:px-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-index md:gap-x-6">
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
          <div className="flex flex-col items-center">
            <img
              src={
                employeeData[index].url
                  ? employeeData[index].url
                  : "https://cdn-icons-png.flaticon.com/512/6997/6997490.png"
              }
              alt=""
              className="w-[200px] h-[200px] rounded-lg bg-[white]"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
