import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";
import star from "../assets/star.png";
import ServiceContent from "./ServiceContent";

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
          <ServiceContent heading="Event Planning">
            <i className="fa-regular fa-copy text-2xl "></i>
          </ServiceContent>
          <ServiceContent heading="Conference Coordination">
            <i className="fa-regular fa-bell text-2xl "></i>
            </ServiceContent>
          <ServiceContent image={img3} heading="Venue Booking & Setup" />
          <ServiceContent image={img4} heading="Post-Event Analytics" />
        </div>
        <p className=" leading-15.5 mt-15 mb-5.5 text-white text-center ">
          Join our team and help weave innovation, quality, and success together
          worldwide.
        </p>
        <div className="">
          <h2 className="flex justify-center gap-3 text-white text-xl font-bold">
            <span>4.9/5</span>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <div>
              <img src={star} alt="" />
            </div>
            <span>Our 4200 Review</span>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Service;
