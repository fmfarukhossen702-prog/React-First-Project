import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import img5 from "../assets/icon5.png";
import star from '../assets/star.png'


const Service = () => {
  return (
    <div className="bg-[#161A2D] bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat  py-25">
      <Container>
        <SecHead
          title="Core Feature"
          heading=" Core features that power our exceptional services"
          className="text-white text-center mb-20 w-160.5 mx-auto "
          titleCss="justify-center"
          bgCss="bg-white"
        />

        {/* content  */}
        <div className="grid grid-cols-4 gap-7.5 text-white">
          <div className="group duration-200 hover:bg-primary w-85 col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
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
          <div className="group duration-200 hover:bg-primary w-85 col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
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
          <div className="group duration-200 hover:bg-primary w-85 col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
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
          <div className="group duration-200 hover:bg-primary w-85 col-span-1 p-10 rounded-[20px] bg-[#ffffff10] ">
            <div className="group-hover:bg-[#ffffff10]  duration-200 w-12.5 h-12.5 flex justify-center items-center mb-25 bg-primary rounded-[10px] ">
              <img src={img4} alt="" />
            </div>
            <h3 className=" font-bold text-xl leading-5.5 ">
              Post-Event Analytics
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
        <p className=" leading-15.5 mt-15 mb-5.5 text-white text-center ">
          Join our team and help weave innovation, quality, and success together
          worldwide.
        </p>
        <div className="">
          <h2 className="flex justify-center gap-3 text-white text-xl font-bold">
            <span>4.9/5</span>
            <div><img src={star} alt="" /></div>
            <div><img src={star} alt="" /></div>
            <div><img src={star} alt="" /></div>
            <div><img src={star} alt="" /></div>
            <div><img src={star} alt="" /></div>
            <span>Our 4200 Review</span>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Service;
