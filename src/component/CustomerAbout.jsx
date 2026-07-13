import React, { useState } from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/Customer.png";
import img2 from "../assets/plus.png";
import img3 from "../assets/pluss.png";

const CustomerAbout2 = () => {
  const [active, setActive] = useState(null);

  const dataObj = [
    {
      id: "1",
      question:
        "1. How does the complete event register process actually work?",
      answere:
        " One : Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
    {
      id: "2",
      question: "2. Where is the main event venue located precisely?",
      answere:
        "Two : Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
    {
      id: "3",
      question: "3. Can attendees freely switch between sessions and tracks?",
      answere:
        "Three : Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
    {
      id: "4",
      question:
        "4. Does the event provide virtual participation options online?",
      answere:
        "Four : Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
    {
      id: "5",
      question: "5. What is the event refund and cancellation policy?",
      answere:
        "Five :Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.",
    },
  ];

  return (
    <div className="my-25">
      <Container>
        <div className="grid grid-cols-12 gap-11">
          <div className=" col-span-5 ">
            <img className=" w-full " src={img1} alt="" />
          </div>
          <div className=" col-span-7  ">
            <SecHead
              title="FAQ's "
              heading="What our customers say about their experience"
              className=" mb-11 "
            />
            {/* content  */}
            <div className="w-full flex flex-col justify-center gap-7.5 ">
              {dataObj.map((data) => (
                <div
                  onClick={() => setActive(active === data.id ? null : data.id)}
                  className=" rounded-[20px] cursor-pointer  bg-[#F6F6F7] py-5.75 px-6.25"
                >
                  <div className="flex justify-between ">
                    <p className={`font-semibold text-lg `}>{data.question}</p>
                    <div>
                      <img src={active === data.id ? img3 : img2} />
                    </div>
                  </div>
                  {active === data.id && (
                    <p className=" text-[#737681] mt-11 leading-6.25 ">
                      {data.answere}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerAbout2;
