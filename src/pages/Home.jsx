import React from 'react'
import Navbar from '../component/Navbar'
import Banner from "../component/Banner";

import LogoLoop from '../component/LogoLoop';
import About from '../component/About';
import Service from '../component/Service';



const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LogoLoop/>
      <About/>
      <Service/>

     
    </>
  );
}

export default Home

