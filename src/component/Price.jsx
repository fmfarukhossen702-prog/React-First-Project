import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/priceLogo.png";
import img2 from "../assets/pricelogo2.png";
import img3 from "../assets/priceLogo3.png";
import img4 from "../assets/priceLogo4.png";
import symbol from "../assets/Symbol.png";
import Button from "./Button";

const Price = () => {
  return (
    <div className=" py-25">
      <Container>
        <SecHead
          title="Pricing Plan"
          heading="Discover our flexible pricing plans for attendees"
          className="w-200 mx-auto text-center"
          titleCss=" justify-center "
        />

        <div className="grid py-20 grid-cols-3">
          <div className=" col-span-1 w-117.75 p-2.5 rounded-[20px] bg-[#F6F6F7] ">
            <div className="flex gap-3.75 pl-10 items-center mt-7.5">
              <div>
                <img src={img1} alt="" />
              </div>
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  Basic Package
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  Perfect for first-time attend
                </p>
              </div>
            </div>
            <h2 className=" text-5xl my-10 pl-10 font-bold leading-13 ">
              $49
              <span className=" leading-5.5 text-[#737681] text-[16px] font-normal ">
                /One-Time
              </span>
            </h2>
            <div className="bg-white rounded-[10px] p-10">
              <div className=" pb-10 border-b border-[#100f0f31] ">
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  What's Included:
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  It could relate to a subscription
                </p>
              </div>

              <div className=" flex flex-col  gap-3.75 pt-10">
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Entry to all standard sessions
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Reserved seating in select session
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Meet & greet with speakers
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Premium networking lounge
                  </p>
                </div>
              </div>
              <Button btnCss="w-full mt-10 ">Get Standard Pass</Button>
            </div>
          </div>
          <div className=" col-span-1 w-117.75 p-2.5 rounded-[20px] bg-[#F6F6F7] ">
            <div className="flex gap-3.75 pl-10 items-center mt-7.5">
              <div>
                <img src={img2} alt="" />
              </div>
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  Standard Pass
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  Perfect for first-time attend
                </p>
              </div>
            </div>
            <h2 className=" text-5xl my-10 pl-10 font-bold leading-13 ">
              $59{" "}
              <span className=" leading-5.5 text-[#737681] text-[16px] font-normal ">
                {" "}
                /One-Time
              </span>
            </h2>
            <div className="bg-white rounded-[10px] p-10">
              <div className=" pb-10 border-b border-[#100f0f31] ">
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  What's Included:
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  It could relate to a subscription
                </p>
              </div>

              <div className=" flex flex-col  gap-3.75 pt-10">
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Entry to all standard sessions
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Reserved seating in select session
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Meet & greet with speakers
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Premium networking lounge
                  </p>
                </div>
              </div>
              <Button btnCss="w-full mt-10 ">Get Standard Pass</Button>
            </div>
          </div>
          <div className=" col-span-1 w-117.75 p-2.5 rounded-[20px] bg-[#F6F6F7] ">
            <div className="flex gap-3.75 pl-10 items-center mt-7.5">
              <div>
                <img src={img3} alt="" />
              </div>
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  Standard Pass
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  Perfect for first-time attend
                </p>
              </div>
            </div>
            <h2 className=" text-5xl my-10 pl-10 font-bold leading-13 ">
              $69
              <span className=" leading-5.5 text-[#737681] text-[16px] font-normal ">
                /One-Time
              </span>
            </h2>
            <div className="bg-white rounded-[10px] p-10">
              <div className=" pb-10 border-b border-[#100f0f31] ">
                <h5 className=" text-xl font-bold leading-5.5 mb-1.5">
                  What's Included:
                </h5>
                <p className=" leading-5.75 text-[#737681] ">
                  It could relate to a subscription
                </p>
              </div>

              <div className=" flex flex-col  gap-3.75 pt-10">
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Entry to all standard sessions
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Reserved seating in select session
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Meet & greet with speakers
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img src={symbol} alt="" />
                  </div>
                  <p className=" text-[#737681] leading-6 ">
                    Premium networking lounge
                  </p>
                </div>
              </div>
              <Button btnCss="w-full mt-10 ">Get Standard Pass</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Price;
