import React, { useState } from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/Customer.png";
import img2 from "../assets/plus.png";
import img3 from "../assets/pluss.png";
const CustomerAbout = () => {

    const [active, setActive] = useState('rule1')

    const dataObj = {
      rule1:
        " One Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day. ",
      rule2:
        "Two Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day. ",
      rule3:
        "Three Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day. ",
      rule4:
        "Four Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day. ",
      rule5:
        "Five Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day. ",
    };


  return (
    <div className="py-25">
      <Container>
        <div className="flex items-center  ">
          <div className=" h-full w-full ">
            <img src={img1} alt="" />
          </div>
          <div className=" py-11.25  ">
            <SecHead
              title="FAQ's "
              heading="What our customers say about their experience"
              className="1.5 mb-8.75"
            />
            <div className="flex flex-col  gap-7.5 justify-center">
              <div className="bg-[#F6F6F7] rounded-[20px]  ">
                <div className="flex justify-between py-5.75 px-6.25  ">
                  <p
                    className={`text-lg font-semibold ${active === "rule1" ? "text-red-700" : "text-black"} `}
                  >
                    1. How does the complete event register process actually
                    work?
                  </p>
                  <img
                    onClick={() => setActive("rule1")}
                    src={active === "rule1" ? img3 : img2}
                    alt=""
                  />
                </div>
                {active === "rule1" && (
                  <p className=" pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925] ">
                    {dataObj[active]}
                  </p>
                )}
              </div>
              <div className="bg-[#F6F6F7] rounded-[20px]  ">
                <div className="flex justify-between py-5.75 px-6.25  ">
                  <p
                    className={`text-lg font-semibold ${active === "rule2" ? "text-red-700" : "text-black"}  `}
                  >
                    2. Where is the main event venue located precisely?
                  </p>
                  <img
                    onClick={() => setActive("rule2")}
                    src={active === "rule2" ? img3 : img2}
                    alt=""
                  />
                </div>
                {active === "rule2" && (
                  <p className=" pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925] ">
                    {dataObj[active]}
                  </p>
                )}
              </div>
              <div className="bg-[#F6F6F7] rounded-[20px]  ">
                <div className="flex justify-between py-5.75 px-6.25  ">
                  <p
                    className={`text-lg font-semibold  ${active == "rule3" ? "text-red-700" : "text-black"}`}
                  >
                    3. Can attendees freely switch between sessions and tracks?
                  </p>
                  <img
                    onClick={() => setActive("rule3")}
                    src={active === "rule3" ? img3 : img2}
                    alt=""
                  />
                </div>
                {active == "rule3" && (
                  <p className=" pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925] ">
                    {dataObj[active]}
                  </p>
                )}
              </div>
              <div className="bg-[#F6F6F7] rounded-[20px]  ">
                <div className="flex justify-between py-5.75 px-6.25  ">
                  <p
                    className={` text-lg font-semibold  ${active == "rule4" ? "text-red-700" : "text-black"}`}
                  >
                    4. Does the event provide virtual participation options
                    online?
                  </p>
                  <img
                    onClick={() => setActive("rule4")}
                    src={active == "rule4" ? img3 : img2}
                    alt=""
                  />
                </div>
                {active == "rule4" && (
                  <p className=" pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925] ">
                    {dataObj[active]}
                  </p>
                )}
              </div>
              <div className="bg-[#F6F6F7] rounded-[20px]  ">
                <div className="flex justify-between py-5.75 px-6.25  ">
                  <p className={`text-lg font-semibold  ${active == 'rule5' ? 'text-red-700' : 'text-black' }`}>
                    5. What is the event refund and cancellation policy?
                  </p>
                  <img
                    onClick={() => setActive("rule5")}
                    src={active == "rule5" ? img3 : img2}
                    alt=""
                  />
                </div>
                {active == 'rule5' && (
                    <p className=" pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925] ">
                  {dataObj[active]}
                </p>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerAbout;
