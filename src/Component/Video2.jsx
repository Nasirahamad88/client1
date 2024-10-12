"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// Define your video data with the video source and an image
const videos = [
  { src: "/hero.mp4", image: "/logo/1.png" },
  { src: "/hero.mp4", image: "/logo/2.png" },
  { src: "/hero.mp4", image: "/logo/3.png" },
  { src: "/hero.mp4", image: "/logo/4.png" },
  { src: "/hero.mp4", image: "/logo/1.png" },
  { src: "/hero.mp4", image: "/logo/2.png" },
  { src: "/hero.mp4", image: "/logo/3.png" }
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideoIndex, setShowVideoIndex] = useState(null); // Tracks which video to show

  const videosToShow = 2; // Number of videos to show on small screens

  // Handle moving to the next video/image
  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length); // Cyclic behavior
    setShowVideoIndex(null); // Reset video on carousel change
  };

  // Handle moving to the previous video/image
  const handlePrev = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length); // Cyclic behavior
    setShowVideoIndex(null); // Reset video on carousel change
  };

  // Toggle between showing image or video
  const handleImageClick = (index) => {
    setShowVideoIndex(index); // Show video on click
  };

  return (
    <div className="video-carousel flex flex-col items-center w-[90%] mx-auto py-20 relative">
  <h1 className="text-3xl md:text-4xl text-white pb-6 font-bold lg:w-1/2 text-center">
    Ready-made templates for your design ideas
  </h1>
  <p className="pb-6 text-center">Add a little bit of body text</p>

  {/* Carousel Container */}
  <div className="flex overflow-hidden w-full">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${(currentVideoIndex * 100) / videosToShow}%)`
      }}
    >
      {/* Loop over the videos array and display either image or video */}
      {videos.map((video, index) => (
        <div
          key={index}
          className="flex-none w-[33.33%] sm:w-[25%] md:w-[20%] p-2"
        >
          {showVideoIndex === index ? (
            <video
              className="w-full h-[140px] md:h-[300px] lg:h-[400px] rounded-lg object-cover"
              controls
              muted
              autoPlay
              playsInline
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              className="w-full h-[140px] md:h-[300px] lg:h-[400px] rounded-lg object-cover cursor-pointer"
              width={224}
              height={164} // Adjust height proportionally
              src={video.image}
              alt={`Video thumbnail ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          )}
        </div>
      ))}
    </div>
  </div>

  {/* Control Buttons */}
  <div className="controls mt-16 space-x-4 absolute flex justify-between w-full top-1/2 transform -translate-y-1/2">
    <button
      onClick={handlePrev}
      className="prev-button rounded-full flex items-center p-2 bg-custom-purple"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 md:w-7 md:h-7 text-white" />
    </button>
    <button
      onClick={handleNext}
      className="next-button rounded-full flex items-center p-2 bg-custom-purple"
    >
      <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 md:w-7 md:h-7 text-white" />
    </button>
  </div>
</div>

  );
};

export default VideoCarousel;
