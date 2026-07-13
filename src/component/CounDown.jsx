import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from "countdown-date-time";  

const CounDown = () => {

    const conduct_date = "2026-12-31 11:59:59";
    const [count,setCount] = useState({})
    useEffect ( () => {
           
            setInterval(() => {
                 const countDown = countDownDateAndTime(conduct_date);
                 setCount(countDown)
            }, 1000);
    },[])
    const {days,hours,minutes,seconds} = count
  return (
    <div className="flex gap-7.5">
      <div className="  backdrop-blur-lg bg-[#ffffff0d] w-31.25 h-30 flex gap-1 flex-col rounded-[20px] justify-center items-center">
        <h1 className=" text-[40px] font-bold text-center leading-11">{days}</h1>
        <p className=" leading-4.25 ">Days</p>
      </div>
      <div className="  backdrop-blur-lg bg-[#ffffff0d] w-31.25 h-30 flex gap-1 flex-col rounded-[20px] justify-center items-center">
        <h1 className=" text-[40px] font-bold text-center leading-11"> {hours} </h1>
        <p className=" leading-4.25 "> Hours </p>
      </div>
      <div className="  backdrop-blur-lg bg-[#ffffff0d] w-31.25 h-30 flex gap-1 flex-col rounded-[20px] justify-center items-center">
        <h1 className=" text-[40px] font-bold text-center leading-11"> {minutes} </h1>
        <p className=" leading-4.25 "> Minutes </p>
      </div>
      <div className="  backdrop-blur-lg bg-[#ffffff0d] w-31.25 h-30 flex gap-1 flex-col rounded-[20px] justify-center items-center">
        <h1 className=" text-[40px] font-bold text-center leading-11"> {seconds}  </h1>
        <p className=" leading-4.25 ">Seconds</p>
      </div>
    </div>
  );
}

export default CounDown
