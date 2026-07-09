import React from 'react'
import Container from './Container';


const VideoBg = () => {
  return (
    <div className=" bg-[url(./assets/videoBg.png)] py-90 w-full bg-no-repeat bg-cover bg-center ">
      <Container>
        <div className="flex w-full h-full justify-center items-center ">
           <div className="flex animate-slide h-25 justify-center items-center w-25 rounded-full bg-primary">
          <i class="fa-solid fa-play text-white text-[30px] "></i>
        </div>
        </div>
       
      </Container>
    </div>
  );
} 

export default VideoBg
