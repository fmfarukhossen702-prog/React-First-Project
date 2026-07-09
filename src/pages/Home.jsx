import React from 'react'
import Navbar from '../component/Navbar'
import Banner from "../component/Banner";

import LogoLoop from '../component/LogoLoop';
import About from '../component/About';
import Service from '../component/Service';
import Expert from '../component/Expert';
import EventShedule from '../component/EventShedule';
import Price from '../component/Price';
import VideoBg from '../component/VideoBg';
import CustomerAbout from '../component/CustomerAbout';
import Experience from '../component/Experience';
import OurUpdate from '../component/OurUpdate';



const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LogoLoop/>
      <About/>
      <Service/>
      <Expert/>
      <EventShedule/>
      <Price/>
      <VideoBg/>
      <CustomerAbout/>
      <Experience/>
      <OurUpdate/>

     
    </>
  );
}

export default Home

