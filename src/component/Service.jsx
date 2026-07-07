import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import img5 from "../assets/icon5.png";

const Service = () => {
  return (
    <div className="bg-[#161A2D] py-25">
      <Container>
        <div className="text-white mb-20">
          <SecHead
            center={true}
            title="Core Feature"
            heading={
              <div className=" text-center text-white ">
                Core features that power our
                <span className="block">exceptional services</span>
              </div>
            }
          ></SecHead>
        </div>
        {/* content  */}
        <div className="grid grid-cols-4 gap-7.5 text-white">
          <div className=" col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
            <div className="w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
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
          <div className=" col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
            <div className="w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
              <img src={img2} alt="" />
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
          <div className=" col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
            <div className="w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
              <img src={img3} alt="" />
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
          <div className=" col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
            <div className="w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
              <img src={img4} alt="" />
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
        </div>
      </Container>
    </div>
  );
};

export default Service;
