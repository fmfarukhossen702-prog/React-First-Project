import React from 'react'
import speaker1 from "../assets/speaker1.png";
import speaker2 from "../assets/speaker2.png";
import speaker3 from "../assets/speaker3.png";
import share from "../assets/share.png";

const EventTab3 = () => {
  return (
    <div className="w-311.5 h-181.25 mx-auto mt-20 border-b border-[#ffffff14] bg-[#] ">
      <div className=" flex justify-between gap-3 ">
        <div className=" w-117.75 p-2.5 bg-[#F6F6F7] rounded-[20px] ">
          <div>
            <img src={speaker1} alt="" />
          </div>
          <div className="flex justify-between items-center px-7 mt-7 mb-6">
            <div>
              <h4 className=" font-bold text-xl leading-5.5 mb-2.5 ">
                Sophia Rodrigues
              </h4>
              <p className="text-[#737681] leading-6">
                Global Marketing Director
              </p>
            </div>
            <img src={share} alt="" />
          </div>
        </div>
        <div className=" w-117.75 p-2.5 bg-[#F6F6F7] rounded-[20px] ">
          <div>
            <img src={speaker2} alt="" />
          </div>
          <div className="flex justify-between items-center px-7 mt-7 mb-6">
            <div>
              <h4 className=" font-bold text-xl leading-5.5 mb-2.5 ">
                Jacob Jones
              </h4>
              <p className="text-[#737681] leading-6">
                Lead AI Research Scientist
              </p>
            </div>
            <img src={share} alt="" />
          </div>
        </div>
        <div className=" w-117.75 p-2.5 bg-[#F6F6F7] rounded-[20px] ">
          <div>
            <img src={speaker3} alt="" />
          </div>
          <div className="flex justify-between items-center px-7 mt-7 mb-6">
            <div>
              <h4 className=" font-bold text-xl leading-5.5 mb-2.5 ">
                Arlene McCoy
              </h4>
              <p className="text-[#737681] leading-6">
                Innovation Strategy Expert
              </p>
            </div>
            <img src={share} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventTab3
