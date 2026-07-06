import React from 'react'
import Button from './Button';
import CounDown from './CounDown';


const Banner = () => {
  return (
    <div className=" bg-[url(./assets/Background.png)]  text-white bg-cover bg-center bg-no-repeat pt-70 pb-37.5  ">
      <h1 className=" text-center text-[76px] font-extrabold leading-20.75 tracking-[-1.52px] ">
        Connecting Minds to Shape{" "}
        <span className="block">Tomorrow's Big Ideas</span>
      </h1>
      <p className="leading-6.25 text-center mt-4 mb-13">
        Experience a powerful gathering of visionaries, creators, and industry
        experts united by one goal—{" "}
        <span className="block">
          exchanging ideas that spark growth, innovation, and meaningful change.
        </span>
      </p>
      <div className="flex gap-10 justify-center items-center ">
        <Button>Explore Schedule</Button>
        <div className="flex  ">
          <div className=" flex  items-center gap-5 ">
            <div className="  animate-slide  w-9 h-9 border-4 border-[#8A92A4] rounded-full flex justify-center items-center bg-primary ">
              <i class="fa-solid fa-play text-white text-[13px] "></i>
            </div>
            <p>Watch Video</p>
          </div>
        </div>
      </div>
      <p className=" text-xl font-bold leading-5.5 text-center mt-15 mb-20 ">
        Upcoming Speaker Reveal - Don't Miss Out
      </p>
      <div className=" flex justify-center ">
        <CounDown />
      </div>
    </div>
  );
};

export default Banner;
