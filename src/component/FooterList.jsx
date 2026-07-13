import React from "react";

const FooterList = ({ header, list }) => {
  return (
    <div className=" flex gap-22.5 ">
      <div>
        <h3 className=" text-xl font-bold leading-5.5 mb-7.5 ">{header}</h3>
        <div className="flex flex-col gap-4.5 ">
            {list.map((items, index) => (
                <p key={index} className=" leading-6 ">{items}</p>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default FooterList;
