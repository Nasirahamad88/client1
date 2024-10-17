"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay,faArrowRight, faArrowLeft, faA } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const videos = [
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
  { src: "/hero.mp4", },
]
  

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  laptop: {
    breakpoint: { max: 2700, min: 924 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const VideoCarousel = () => {
  const [showVideoIndex, setShowVideoIndex] = useState(null);

  const handlePlayClick = (index) => {
    setShowVideoIndex(index);
  };

  const handleVideoEnded = () => {
    setShowVideoIndex(null);
  };

  // Custom arrow components
  const CustomLeftArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute left-0 z-10 rounded-full flex items-center p-2 bg-custom-purple ">
      <FontAwesomeIcon icon={faArrowLeft} className="text-white lg:text-3xl md:text-2xl hover:text-black" />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button onClick={onClick} className="absolute right-0 z-10 rounded-full flex items-center p-2 bg-custom-purple">
      <FontAwesomeIcon icon={faArrowRight} className="text-white lg:text-3xl md:text-2xl hover:text-black" />
    </button>
  );

  return (
    <div className="video-carousel flex flex-col items-center lg:w-[80%] w-[98%] mx-auto py-20 relative">
      <h1 className="text-3xl md:text-4xl text-white pb-6 font-bold lg:w-1/2 text-center">
        Ready-made templates for your design ideas
      </h1>
      <p className="pb-6 text-center">Add a little bit of body text</p>

      <Carousel
        responsive={responsive}
        infinite={true}
        className="w-full relative"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {videos.map((video, index) => (
          <div key={index} className="flex flex-col items-center">
            {showVideoIndex === index ? (
              <video
                className="w-32 lg:w-64 h-24  lg:h-44 md:h-96 rounded-2xl"
                controls
                autoPlay
                muted
                onEnded={handleVideoEnded} // Reset index when video ends
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                className="relative bg-slate-800 w-32 lg:w-64 h-24  lg:h-44 md:h-96 rounded-2xl cursor-pointer flex items-center justify-center"
                onClick={() => handlePlayClick(index)}
              >
                <FontAwesomeIcon icon={faPlay} className="text-white lg:text-6xl md:text-3xl text-xl z-10" />
                
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoCarousel;
