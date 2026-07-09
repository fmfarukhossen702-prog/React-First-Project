import React from "react";
import share from "../assets/share.png";

const ExpertContent = ({ image, title, heading }) => {
  return (
    <div className=" w-117.75 p-2.5 bg-[#F6F6F7] rounded-[20px] ">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex justify-between items-center px-7 mt-7 mb-6">
        <div>
          <h4 className=" font-bold text-xl leading-5.5 mb-2.5 ">{title}</h4>
          <p className="text-[#737681] leading-6"> {heading} </p>
        </div>
        <img src={share} alt="" />
      </div>
    </div>
  );
};

export default ExpertContent;
