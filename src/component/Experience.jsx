import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/exper1.png";
import img2 from "../assets/exper2.png";
import img3 from "../assets/exper3.png";
import img4 from "../assets/exper4.png";
import star from '../assets/star.png'
import Button from "./Button";
import icon from '../assets/icon.png'
import vactor1 from '../assets/Vector1.png'
import vactor2 from '../assets/Vector2.png'
import vactor3 from '../assets/Vector3.png'


const Experience = () => {
  return (
    <div className=" bg-[#161A2D] bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat  py-25 ">
      <Container>
        <SecHead
          title="Testimonials"
          heading="What our customers say about their experience"
          className="w-197.5 mx-auto text-center text-white mb-20"
          titleCss=" justify-center "
          bgCss=" bg-white "
        />

        <div className="flex gap-4 text-white ">
          {/* first  */}
          <div className=" group duration-200  hover:bg-primary  p-10 w-86.5 h-105 rounded-[20px] bg-[#ffffff13] ">
            <div className=" relative w-full h-10.5 rounded-full ">
              <div className=" absolute  ">
                <img className="w-full h-full" src={img1} alt="" />
              </div>
              <div className=" absolute left-8 ">
                <img className="w-full h-full" src={img2} alt="" />
              </div>
              <div className=" absolute left-16 ">
                <img className="w-full h-full" src={img3} alt="" />
              </div>
              <div className=" absolute left-24  ">
                <img className="w-full h-full" src={img4} alt="" />
              </div>
            </div>
            <p className=" leading-6.25 pt-4.5 pb-24.5 ">
              Over 15,000+ Attendees{" "}
              <span className="block">Connected Worldwide</span>
            </p>
            <h3 className="text-xl font-bold leading-5.5 mb-10 ">
              Client Experience Speak For Themselves
            </h3>
            <Button btnCss=" duration-200 group-hover:bg-white group-hover:text-black ">
              View All Reviews
            </Button>
          </div>
          {/* secend  */}
          <div className=" group duration-200 hover:bg-primary  p-10 w-133.25 h-105  rounded-[20px] bg-[#ffffff13] ">
            <div className="flex duration-200 group-hover:bg-[#7c917ca7] gap-2 ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className=" pt-6 pb-17.5 border-b border-[#cfbbbb26] text-lg font-semibold leading-7 ">
              "Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
            </p>
            <div className="flex justify-between items-center mt-10 ">
              <div className="flex gap-3 items-center">
                <img src={img2} alt="" />
                <div>
                  <h5 className=" font-bold text-xl leading-5.5 ">
                    Ralph Edwards
                  </h5>
                  <p className=" whitespace-nowrap ">
                    Global Marketing Director
                  </p>
                </div>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>

          {/* three  */}
          <div className=" group duration-200 hover:bg-primary p-10 w-133.25 h-105 rounded-[20px] bg-[#ffffff13] ">
            <div className=" duration-200 group-hover:bg-[#7c917ca7] flex gap-2 ">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className=" pt-6 pb-17.5 border-b border-[#cfbbbb26] text-lg font-semibold leading-7 ">
              "Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
            </p>
            <div className="flex justify-between items-center mt-10 ">
              <div className="flex gap-3 items-center">
                <img src={img3} alt="" />
                <div>
                  <h5 className=" font-bold text-xl leading-5.5 ">
                    Kristin Watson
                  </h5>
                  <p className=" whitespace-nowrap ">
                    Global Marketing Director
                  </p>
                </div>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>
        </div>

        <div className=" mt-25 flex justify-between items-center ">
          <div className="w-100 border border-[#c5c5e119]  "></div>
          <p className=" text-xl text-white font-semibold ">
            Supported by Brands That Inspire Innovation
          </p>
          <div className="w-100 border border-[#c5c5e119]  "></div>
        </div>

        <div className="flex justify-evenly items-center text-white mt-17.5">
          <div className="flex gap-4 items-center">
            <img src={vactor1} alt="" />
            <p className=" text-lg font-semibold ">Logoipsum</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={vactor2} alt="" />
            <p className=" text-lg font-semibold ">Logoipsum</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={vactor3} alt="" />
            <p className=" text-lg font-semibold ">Logoipsum</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={vactor2} alt="" />
            <p className=" text-lg font-semibold ">Logoipsum</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={vactor1} alt="" />
            <p className=" text-lg font-semibold ">Logoipsum</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
