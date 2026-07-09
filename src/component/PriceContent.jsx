import React from "react";
import Button from "./Button";
import symbol from "../assets/Symbol.png";

const PriceContent = ({image,title, number }) => {
  return (
    <div className=" col-span-1 w-117.75 p-2.5 rounded-[20px] bg-[#F6F6F7] ">
      <div className="flex gap-3.75 pl-10 items-center mt-7.5">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
           {title}
          </h5>
          <p className=" leading-5.75 text-[#737681] ">
            Perfect for first-time attend
          </p>
        </div>
      </div>
      <h2 className=" text-5xl my-10 pl-10 font-bold leading-13 ">
        {number}
        <span className=" leading-5.5 text-[#737681] text-[16px] font-normal ">
          /One-Time
        </span>
      </h2>
      <div className="bg-white rounded-[10px] p-10">
        <div className=" pb-10 border-b border-[#100f0f31] ">
          <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
            What's Included:
          </h5>
          <p className=" leading-5.75 text-[#737681] ">
            It could relate to a subscription
          </p>
        </div>

        <div className=" flex flex-col  gap-3.75 pt-10">
          <div className="flex gap-2 items-center">
            <div>
              <img src={symbol} alt="" />
            </div>
            <p className=" text-[#737681] leading-6 ">
              Entry to all standard sessions
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src={symbol} alt="" />
            </div>
            <p className=" text-[#737681] leading-6 ">
              Reserved seating in select session
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src={symbol} alt="" />
            </div>
            <p className=" text-[#737681] leading-6 ">
              Meet & greet with speakers
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src={symbol} alt="" />
            </div>
            <p className=" text-[#737681] leading-6 ">
              Premium networking lounge
            </p>
          </div>
        </div>
        <Button btnCss="w-full mt-10 ">Get Standard Pass</Button>
      </div>
    </div>
  );
};

export default PriceContent;
