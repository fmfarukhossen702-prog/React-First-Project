import React from 'react'
import logo from '../assets/logo.png'
import Button from './Button';

const Navbar = () => {
  return (
    <nav className=" backdrop-blur-lg bg-[#ffffff0d] py-7.75 absolute w-full">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul className="flex gap-10 font-medium text-white">
            <li>Home</li>
            <li>About Us</li>
            <li>Schedule</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <div>
            <Button>Join the Conference</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
