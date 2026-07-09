import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import photo1 from "../assets/photo1.png";
import photo2 from '../assets/photo-icon.png'
import photo3 from '../assets/Image.png'
import photo4 from '../assets/image-5.png'
import photo5 from '../assets/image6.png'

const OurUpdate = () => {
  return (
    <div className="py-25">
      <Container>
        <SecHead
          title="Latest Blog"
          heading="Explore our latest insights stories and updates"
          className="w-200 mx-auto text-center mb-20"
          titleCss=" justify-center "
        />

        <div className="grid grid-cols-2 gap-7.5">
          {/* first content  */}
          <div className=" col-span-1 bg-[#F6F6F7] rounded-[20px] ">
            <div className="p-2.5">
              <img className=" w-full" src={photo1} alt="" />
            </div>
            <div className="px-10 mt-7.5">
              <div className="flex items-center gap-2.5">
                <div>
                  <img src={photo2} alt="" />
                </div>

                <h5 className=" text-[#737681] ">Esther Howard</h5>
              </div>
              <h3 className=" text-xl font-bold leading-7 mt-5 mb-3.75 ">
                Mastering Public Speaking: Expert Tips for Confident
                <span className="block">Presentations</span>
              </h3>
              <p className=" leading-6.25 pb-8 border-b border-[#06060617] ">
                Improve your communication skills with proven techniques used by
                world-class speakers to captivate and inspire audiences.
              </p>
              <div className="flex items-center gap-2.5 pt-8 pb-10">
                <h6 className=" font-bold text-primary ">Read More</h6>
                <div>
                  <img src={photo3} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* secent content  */}
          <div className=" col-span-1 h-full">
            <div className="grid grid-rows-2 h-full w-full gap-7.5 ">
              {/* row first  */}
              <div className=" row-span-1  bg-[#F6F6F7] rounded-[20px] ">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1 p-2.5 ">
                    <img className=" w-full h-full " src={photo4} alt="" />
                  </div>

                  <div className="py-12.5 pr-20">
                    <div className="flex items-center gap-2.5">
                      <div>
                        <img src={photo2} alt="" />
                      </div>

                      <h5 className=" text-[#737681] ">Esther Howard</h5>
                    </div>
                    <h3 className=" text-xl font-bold leading-7 pt-5 pb-20 border-b border-[#06060617]  ">
                      Simple Self-Defense Skills Everyone Should Learn for
                      Safety
                    </h3>
                    <div className="flex items-center gap-2.5 pt-8 ">
                      <h6 className=" font-bold text-primary ">Read More</h6>
                      <div>
                        <img src={photo3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row secend  */}
              <div className=" row-span-1  bg-[#F6F6F7] rounded-[20px] ">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-1 p-2.5 ">
                    <img className=" w-full h-full " src={photo5} alt="" />
                  </div>

                  <div className="py-12.5 pr-20">
                    <div className="flex items-center gap-2.5">
                      <div>
                        <img src={photo3} alt="" />
                      </div>

                      <h5 className=" text-[#737681] ">Esther Howard</h5>
                    </div>
                    <h3 className=" text-xl font-bold leading-7 pt-5 pb-20 border-b border-[#06060617]  ">
                      Simple Self-Defense Skills Everyone Should Learn for
                      Safety
                    </h3>
                    <div className="flex items-center gap-2.5 pt-8 ">
                      <h6 className=" font-bold text-primary ">Read More</h6>
                      <div>
                        <img src={photo3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurUpdate;
