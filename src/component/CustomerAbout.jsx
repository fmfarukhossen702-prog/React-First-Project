import React, { useState } from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/Customer.png";
import img2 from "../assets/plus.png";
import img3 from "../assets/pluss.png";

const CustomerAbout = () => {
  const [active, setActive] = useState(null);

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
            <div className="flex flex-col w-198  gap-7.5 justify-center">
              <div className="flex flex-col w-198 gap-7.5 justify-center">
                {/*FAQ 1 */}
                <div className="bg-[#F6F6F7] w-full rounded-[20px]">
                  <div
                    onClick={() => setActive(active === 0 ? null : 0)}
                    className="flex justify-between py-5.75 px-6.25"
                  >
                    <p className="text-lg font-semibold text-black">
                      1. How does the complete event register process actually
                      work?
                    </p>

                    <img
                      className="cursor-pointer"
                      src={active === 0 ? img3 : img2}
                      alt=""
                    />
                  </div>

                  {active === 0 && (
                    <p className="pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925]">
                      One Our event is designed with flexible scheduling,
                      allowing you to move between halls, select sessions that
                      interest you most, and customize your learning experience
                      throughout the day.
                    </p>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-[#F6F6F7] w-full rounded-[20px]">
                  <div
                    onClick={() => setActive(active === 1 ? null : 1)}
                    className="flex justify-between py-5.75 px-6.25"
                  >
                    <p className="text-lg font-semibold text-black">
                      2. How do I register for the event?
                    </p>

                    <img
                      className="cursor-pointer"
                      src={active === 1 ? img3 : img2}
                      alt=""
                    />
                  </div>

                  {active === 1 && (
                    <p className="pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925]">
                      You can register online by filling out the registration
                      form and completing the payment process.
                    </p>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-[#F6F6F7] w-full rounded-[20px]">
                  <div className="flex justify-between py-5.75 px-6.25">
                    <p className="text-lg font-semibold text-black">
                      3. Will I receive a certificate after attending?
                    </p>

                    <img
                      className="cursor-pointer"
                      onClick={() => setActive(active === 2 ? null : 2)}
                      src={active === 2 ? img3 : img2}
                      alt=""
                    />
                  </div>

                  {active === 2 && (
                    <p className="pl-6.25 py-7 pr-8 leading-6.25 border-t border-[#37353925]">
                      Yes, every participant who attends the event will receive
                      a certificate after the event is completed.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerAbout;
