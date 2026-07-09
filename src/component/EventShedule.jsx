import React, { useState } from "react";
import Container from "./Container";
import SecHead from "./SecHead";
import EvenTab1 from "./EvenTab1";
import EventTab2 from "./EventTab2";
import EventTab3 from "./EventTab3";


const EventShedule = () => {
  const [active, setActive] = useState("day1");

  const rendarTab = () => {
    return active == 'day1'? (<EvenTab1/>) : active == 'day2' ? (<EventTab2/>) : (<EventTab3/>)
    // if (active == "day1"){
    //    return  <EvenTab1/>
    // }
    // if(active == 'day2'){
    //    return  <EventTab2/>
    // }
    // else{
    //     return   <EventTab3/>
    // }
  }

  return (
    <div className="bg-[#161A2D] bg-[url(./assets/bg.png)] bg-cover bg-no-repeat bg-center py-25">
      <Container>
        <SecHead
          title="Our Event Schedule"
          heading="Explore the complete schedule for our event"
          className=" w-187.5 mx-auto text-white text-center"
          bgCss="bg-white "
          titleCss=" justify-center "
        />
        <div className="">
          <div className="flex text-white gap-7.5 justify-center w-125 mx-auto mb-10 mt-20 rounded-full p-2.5 bg-[#ffffff12] ">
            <div
              onClick={() => setActive("day1")}
              className={`text-xl font-bold ${active === "day1" ? "bg-white text-black" : "bg-transparent"} leading-4 py-4.5 px-9 rounded-full `}
            >
              Day 01
            </div>
            <div
              onClick={() => setActive("day2")}
              className={`text-xl font-bold ${active === "day2" ? "bg-white text-black" : "bg-transparent"} leading-4 py-4.5 px-9 rounded-full `}
            >
              Day 02
            </div>
            <div
              onClick={() => setActive("day3")}
              className={`text-xl font-bold ${active === "day3" ? "bg-white text-black" : "bg-transparent"} leading-4 py-4.5 px-9 rounded-full `}
            >
              Day 03
            </div>
          </div>
        </div>
        <div>{rendarTab()}</div>
      </Container>
    </div>
  );
};

export default EventShedule;
