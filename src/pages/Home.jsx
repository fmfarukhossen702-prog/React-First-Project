import React from 'react'
import Navbar from '../component/Navbar'
import Banner from "../component/Banner";

import LogoLoop from '../component/LogoLoop';
import About from '../component/About';



const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <LogoLoop/>
      <About/>

     
    </>
  );
}

export default Home

