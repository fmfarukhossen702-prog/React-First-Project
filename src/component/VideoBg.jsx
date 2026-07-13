import React, { useState } from "react";
import Container from "./Container";
import video from "../assets/video2.mp4";

const VideoBg = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="bg-[url(./assets/videoBg.png)] w-full h-205.5 bg-cover  bg-center bg-no-repeat">
      <Container className= 'h-full' >
        <div className="flex justify-center items-center h-full">
          {!play ? (
            // Play Button
            <div
              onClick={() => setPlay(true)}
              className="w-25 h-25 rounded-full bg-primary flex justify-center items-center cursor-pointer"
            >
              <i className="fa-solid fa-play text-white text-3xl"></i>
            </div>
          ) : (
            // Video
            <div className="relative">
              <button
                onClick={() => setPlay(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#74179f62] text-white font-bold z-10"
              >
                ✕
              </button>

              <video
                src={video}
                controls
                autoPlay
                className="w-300 h-full"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default VideoBg;
