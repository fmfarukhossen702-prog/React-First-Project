import React from 'react'
import icon from '../assets/icon.png'


const ExperienceContent = ({image,content,name , profession }) => {
  return (
    <div className=" group duration-200 shrink-0 hover:bg-primary  p-10 w-133.25 h-105  rounded-[20px] bg-[#ffffff13] ">
      <div className="flex duration-200   p-1 rounded-[5px]    gap-2 ">
        <i className="fa-solid fa-star text-primary group-hover:text-white" />
        <i className="fa-solid fa-star text-primary group-hover:text-white" />
        <i className="fa-solid fa-star text-primary group-hover:text-white" />
        <i className="fa-solid fa-star text-primary group-hover:text-white" />
        <i className="fa-solid fa-star text-primary group-hover:text-white" />
      </div>
      <p className=" pt-6 pb-17.5 border-b border-[#cfbbbb26] text-lg  font-semibold leading-7 ">
        {content}
      </p>
      <div className="flex justify-between items-center mt-10 ">
        <div className="flex gap-3 items-center">
          <img src={image} alt />
          <div>
            <h5 className=" font-bold text-xl leading-5.5 ">{name}</h5>
            <p className=" whitespace-nowrap ">{profession}</p>
          </div>
        </div>
        <div className="group-hover:text-white text-primary p-0.5 text-[30px] ">
          <i class="fa-solid fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
}

export default ExperienceContent
