import React from 'react'
import img1 from "../assets/event-1.png";
import img2 from "../assets/event-2.png";
import img3 from "../assets/event-3.png";
import img4 from "../assets/event-4.png";
import border from "../assets/Border.png";

const EvenTab1 = () => {
  return (
    <div>
      <div className=" text-white h-191.25 pt-10  px-[127.5px] ">
        {/* first content */}
        <div className="flex justify-between items-center pb-13 border-b border-[#ffffff2f] ">
          <div className="flex gap-17.75 items-center">
            <div className="flex gap-7.5 items-center">
              <img src={img1} alt="" />
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                  9:00 AM - 5:30 PM
                </h5>
                <p className=" leading-6.25 ">22 March 2025</p>
              </div>
            </div>
            <div>
              <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                Professional Skills Development Workshop
              </h5>
              <p className=" leading-6.25 ">
                Unlock your potential and elevate your career with our
                Professional Skills{" "}
                <span className="block">
                  Development designed students, working professionals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-center">
            <img src={border} alt="" />
            <p>
              Street, Block 12{" "}
              <span className="block">Sector 4, Ipsum City</span>{" "}
            </p>
          </div>
        </div>
        {/* secend content  */}
        <div className="flex justify-between items-center pt-10 pb-13 border-b border-[#ffffff2f] ">
          <div className="flex gap-17.75 items-center">
            <div className="flex gap-7.5 items-center">
              <img src={img2} alt="" />
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                  10:00 AM - 4:00 PM
                </h5>
                <p className=" leading-6.25 ">05 May 2025</p>
              </div>
            </div>
            <div>
              <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                Leadership & Growth Conference
              </h5>
              <p className=" leading-6.25 ">
                Unlock your potential and elevate your career with our
                Professional Skills{" "}
                <span className="block">
                  Development designed students, working professionals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-center">
            <img src={border} alt="" />
            <p>
              Street, Block 12{" "}
              <span className="block">Sector 4, Ipsum City</span>{" "}
            </p>
          </div>
        </div>
        {/* third content  */}
        <div className="flex justify-between items-center pt-10 pb-13 border-b border-[#ffffff2f] ">
          <div className="flex gap-17.75 items-center">
            <div className="flex gap-7.5 items-center">
              <img src={img3} alt="" />
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                  8:30 AM - 6:00 PM
                </h5>
                <p className=" leading-6.25 ">20 June 2025</p>
              </div>
            </div>
            <div>
              <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                Digital Marketing Masterclass
              </h5>
              <p className=" leading-6.25 ">
                Unlock your potential and elevate your career with our
                Professional Skills{" "}
                <span className="block">
                  Development designed students, working professionals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-center">
            <img src={border} alt="" />
            <p>
              Street, Block 12{" "}
              <span className="block">Sector 4, Ipsum City</span>{" "}
            </p>
          </div>
        </div>
        {/* four content  */}
        <div className="flex justify-between items-center  ">
          <div className="flex gap-17.75 items-center">
            <div className="flex gap-7.5 items-center">
              <img src={img4} alt="" />
              <div>
                <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                  11:00 AM - 3:00 PM
                </h5>
                <p className=" leading-6.25 ">10 April 2025</p>
              </div>
            </div>
            <div>
              <h5 className=" text-xl font-bold leading-5.5 mb-3 ">
                Annual Innovation Summit 2025
              </h5>
              <p className=" leading-6.25 ">
                Unlock your potential and elevate your career with our
                Professional Skills{" "}
                <span className="block">
                  Development designed students, working professionals.
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3.75 items-center">
            <img src={border} alt="" />
            <p>
              Street, Block 12{" "}
              <span className="block">Sector 4, Ipsum City</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EvenTab1
