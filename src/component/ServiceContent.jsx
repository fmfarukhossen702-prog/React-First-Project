import React from "react";
import img5 from "../assets/icon5.png";

const ServiceContent = ({ image, heading, children }) => {
  return (
    <div className="group duration-200 hover:bg-primary w-85 col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
      <div className="group-hover:bg-white group-hover:text-black duration-200  w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
       <img src={image} alt="" />
       {children}
      </div>
      <h3 className=" font-bold text-xl leading-5.5 "> {heading} </h3>
      <p className="leading-[25.6px] pb-8 pt-3 border-b border-b-[#ffffff5b] ">
        Deliver seamless virtual experience with high-quality streaming and
        interactive tools.
      </p>
      <div className="flex items-center mt-8 gap-2">
        <p>Read More</p>
        <img src={img5} alt="" />
      </div>
    </div>
  );
};

export default ServiceContent;
