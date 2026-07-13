import React from "react";
import Container from "./Container";
import btn from "../assets/Button.png";
import icon from "../assets/footerIcon.png";
import logo from "../assets/logo.png";
import link from "../assets/ItemLink.png";
import facebook from "../assets/facebook.png";
import linkdin from "../assets/linkdin.png";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="bg-[#161A2D] text-white bg-[url(./assets/bg.png)] bg-cover bg-center bg-no-repeat  pt-25 ">
      <Container>
        {/* heading  */}
        <div className="flex justify-between items-center pb-20 border-b border-[#ffffff1c] ">
          <h3 className=" font-semibold text-5xl w-159.75 leading-13 tracking-[-0.96px]  ">
            Join our newsletter for event important announcement
          </h3>
          <div className=" w-120  ">
            <div className="flex items-center gap-3.75 mb-5.5">
              <div className=" flex justify-center items-center  ">
                <img src={icon} alt="" />
              </div>
              <p className="leading-6.25 ">
                Stay informed with instant updates delivered straight to your
                inbox.
              </p>
            </div>
            <div className="w-full py-2.5 pl-5 pr-2.5 rounded-[20px] bg-[#ffffff12] flex justify-between items-center gap-3">
              <input
                type="text"
                className=" w-full outline-none border-none "
              />
              <div className="  ">
                <img src={btn} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* content  */}
        <div className=" mt-20 mb-15 grid grid-cols-2 items-center ">
          {/* grid cols-1  */}
          <div className=" col-span-1 ">
            <div className="w-90.25 ">
              <div>
                <img src={logo} alt="" />
              </div>
              <p className=" leading-6.25 mt-7.25 mb-10 ">
                Experience a world-class conference designed to inspire
                innovation, empower professionals, and connect leaders from
                around the globe.
              </p>
              <div className="flex items-center gap-3.75">
                <div>
                  <img src={link} alt="" />
                </div>
                <div>
                  <img src={link} alt="" />
                </div>
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <img src={linkdin} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* grid cols-2  */}
          <div className="col-span-1 ">
            <div className="flex justify-between ">
              <div className=" flex gap-22.5 ">
                <FooterList
                  header="Quick Links"
                  list={[
                    "Home",
                    "About Us",
                    "Speakers",
                    "Events",
                    "Contact Us",
                  ]}
                />
                <FooterList
                  header="Schedules"
                  list={[
                    "Event Management",
                    "Live Streaming",
                    "Virtual Event Setup",
                    "Keynote Sessions",
                    "Networking Programs",
                  ]}
                />
              </div>
              <div className=" w-71.75 ">
                <h3 className=" text-xl font-bold leading-5.5 mb-7.5 ">
                  Get In Touch
                </h3>
                <p className="leading-6 ">+00 123 456 789</p>
                <p className=" leading-6  pt-4.5 pb-7 border-b border-[#ffffff12] ">
                  support@domainname.com
                </p>
                <p className=" mt-7 leading-6 ">
                  45/2 Central Business Innovation
                  <span className=" block ">
                    Near International Trade Tower
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <h6 className="py-15.5 border-t border-[#ffffff13] text-center ">Copyright © 2025 All Rights Reserved.</h6>
    </div>
  );
};

export default Footer;
