import React from 'react'
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import img5 from "../assets/icon5.png";

const EventTab2 = () => {
  return (
    <div className='w-311.5 h-181.25 mx-auto mt-20 border-b border-[#ffffff14] bg-[#] '>
      <div className=" flex justify-between text-white ">
                <div className="group duration-200 hover:bg-primary w-85  p-10 rounded-[20px] bg-[#ffffff10] ">
                  <div className="group-hover:bg-[#ffffff10]  duration-200  w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
                    <img src={img1} alt="" />
                  </div>
                  <h3 className=" font-bold text-xl leading-5.5 ">
                    Event Planning Manage
                  </h3>
                  <p className="leading-[25.6px] pb-8 pt-3 border-b border-b-[#ffffff5b] ">
                    Deliver seamless virtual experience with high-quality streaming
                    and interactive tools.
                  </p>
                  <div className="flex items-center mt-8 gap-2">
                    <p>Read More</p>
                    <img src={img5} alt="" />
                  </div>
                </div>
                <div className="group duration-200 hover:bg-primary w-85  p-10 rounded-[20px] bg-[#ffffff10] ">
                  <div className="group-hover:bg-white  duration-200 w-12.5 h-12.5 flex justify-center items-center mb-25 bg-[#ffffff10] rounded-[10px] ">
                    <img src={img2} alt="" />
                  </div>
                  <h3 className=" font-bold text-xl leading-5.5 ">
                    Conference Coordination
                  </h3>
                  <p className="leading-[25.6px] pb-8 pt-3 border-b border-b-[#ffffff5b] ">
                    Deliver seamless virtual experience with high-quality streaming
                    and interactive tools.
                  </p>
                  <div className="flex items-center mt-8 gap-2">
                    <p>Read More</p>
                    <img src={img5} alt="" />
                  </div>
                </div>
                <div className="group duration-200 hover:bg-primary w-85  p-10 rounded-[20px] bg-[#ffffff10] ">
                  <div className="group-hover:bg-[#ffffff10]  duration-200 w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
                    <img src={img3} alt="" />
                  </div>
                  <h3 className=" font-bold text-xl leading-5.5 ">
                    Venue Booking & Setup
                  </h3>
                  <p className="leading-[25.6px] pb-8 pt-3 border-b border-b-[#ffffff5b] ">
                    Deliver seamless virtual experience with high-quality streaming
                    and interactive tools.
                  </p>
                  <div className="flex items-center mt-8 gap-2">
                    <p>Read More</p>
                    <img src={img5} alt="" />
                  </div>
                </div>
 
              </div>
    </div>
  )
}

export default EventTab2
