import React, { useState } from "react";
import Container from "./Container";
import img1 from "../assets/about.png";
import img2 from "../assets/receive.png";
import img3 from "../assets/receiveLogo.png";
import call from '../assets/call.png'

import SecHead from "./SecHead";
import Button from "./Button";

const About = () => {
  const [active, setActive] = useState("vision");
  let number = "+00 123 456 789";
  const handleCall = () =>{
    navigator.clipboard.writeText(number)
    alert(`Calling.... ${number}  \nNumber copy : ${number}`);
  }

  return (
    <div className="mt-25">
      <Container>
        <div className=" grid grid-cols-2">
          <div className=" col-span-1 ">
            <img src={img1} alt="" />
          </div>
          <div className="col-span-1">
            <SecHead title="About Us" heading="Behind this event" />
            <p className=" text-[#737681] leading-[25.6px] py-11 ">
              Discover the vision that drives this event—a commitment to
              bringing together innovators,{" "}
              <span className="block ">
                leaders, and c hangemakers to share knowledge, spark
                inspiration, and create
              </span>{" "}
              meaningful connections.
            </p>
            <div className="flex justify-between bg-[#F6F6F7] rounded-[20px] gap-7 p-2.5 ">
              <div
                onClick={() => setActive("mission")}
                className={` ${active === "mission" ? "bg-white" : "bg-transparent"} cursor-pointer font-bold leading-5 py-5 px-15 rounded-[10px]  `}
              >
                Our Mission
              </div>
              <div
                onClick={() => setActive("vision")}
                className={`${active === "vision" ? "bg-white" : "bg-transparent"} cursor-pointer font-bold leading-5 py-5 px-15 rounded-[10px]`}
              >
                Our Vision
              </div>
              <div
                onClick={() => setActive("goal")}
                className={` ${active === "goal" ? "bg-white" : "bg-transparent"} cursor-pointer font-bold leading-5 py-5 px-15 rounded-[10px]  `}
              >
                Our Goal
              </div>
            </div>
            <p className="text-[#737681] leading-[25.6px] pt-11 pb-13.5">
              Our vision is to build a global community where collaboration
              fuels innovation we aim encourage fresh thinking, spark inspiring
              dialogues, and create a space.
            </p>
            <div className="flex justify-between pb-6 border-b border-b-[#8f8c8c52] ">
              <div className="flex items-center gap-3.75">
                <img src={img2} alt="" />
                <h5 className=" text-xl font-bold leading-5.5 text-[#161A2D] ">
                  Receive real-time event updates.
                </h5>
              </div>
              <div className="flex gap-3.75 items-center">
                <img src={img3} alt="" />
                <h5 className=" text-xl font-bold leading-5.5 text-[#161A2D] ">
                  Receive real-time event updates.
                </h5>
              </div>
            </div>
            <div className="flex pt-10 items-center gap-7.5">
              <Button>Learn More About</Button>
              <div className="flex gap-3.75 items-center">
                <img onClick={handleCall} src={call} alt="" />
                <div className="flex flex-col gap-1 ">
                  <h5
                    onClick={handleCall}
                    className=" text-xl font-bold leading-5.5 text-[#161A2D] "
                  >
                    Call Now!
                  </h5>
                  <p className=" leading-5.2 text-[#737681] whitespace-nowrap ">
                    +00 123 456 789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
