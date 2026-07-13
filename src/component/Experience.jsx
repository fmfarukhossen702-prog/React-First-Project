import React from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import img1 from "../assets/exper1.png";
import img2 from "../assets/exper2.png";
import img3 from "../assets/exper3.png";
import img4 from "../assets/exper4.png";
import Button from "./Button";
import vactor1 from "../assets/Vector1.png";
import vactor2 from "../assets/Vector2.png";
import vactor3 from "../assets/Vector3.png";
import ExperienceContent from "./ExperienceContent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = Slider?.default ?? Slider;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => <div className="w-3.5 h-3.5 mt-10 rounded-full bg-[#ffffff10] " ></div>,
  };

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

        <div className="flex  gap-4 text-white ">
          {/* first  */}
          <div className=" group duration-200  hover:bg-primary shrink-0  p-10 w-86.5 h-105 rounded-[20px] bg-[#ffffff13] ">
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

          <SliderComponent className="w-274  " {...settings}>
            <div>
              <ExperienceContent
                image={img2}
                name="Ralph Edwards"
                profession="Global Marketing Director"
                content="Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
              />
            </div>
            <div>
              <ExperienceContent
                image={img3}
                name="Kristin Watson"
                profession="Global Marketing Director"
                content="Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
              />
            </div>
            <div>
              <ExperienceContent
                image={img2}
                name="Ralph Edwards"
                profession="Global Marketing Director"
                content="Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
              />
            </div>
            <div>
              <ExperienceContent
                image={img3}
                name="Kristin Watson"
                profession="Global Marketing Director"
                content="Truly outstanding service! The team exceeded our expectations
              with their professionalism, creativity, and quick turnaround time.
              Highly recommended for anyone seeking quality and reliability."
              />
            </div>
          </SliderComponent>
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
