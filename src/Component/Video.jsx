"use client";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const videos = [
  { src: "/1.mp4", image: "/1.jpeg" },
  { src: "/2.mp4", image: "/1.jpeg" },
  { src: "/3.mp4", image: "/1.jpeg" },
  { src: "/4.mp4", image: "/1.jpeg" },
  { src: "/5.mp4", image: "/1.jpeg" },
  { src: "/6.mp4", image: "/1.jpeg" },
  { src: "/7.mp4", image: "/1.jpeg" },
  { src: "/8.mp4", image: "/1.jpeg" },
  { src: "/9.mp4", image: "/1.jpeg" },
  { src: "/10.mp4", image: "/1.jpeg" },
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showVideoIndex, setShowVideoIndex] = useState(null);
  const videosToShow = 5; // Updated to 5 images shown at a time
  const trackRef = useRef(null);

  const totalVideos = videos.length;

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.3s ease-in-out";
      setCurrentVideoIndex((prev) => (prev + 1) % totalVideos); // Loop to start
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.3s ease-in-out";
      setCurrentVideoIndex((prev) => (prev - 1 + totalVideos) % totalVideos); // Loop to end
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${(currentVideoIndex * 100) / videosToShow}%)`;
    }
  }, [currentVideoIndex]);

  const handleImageClick = (index) => setShowVideoIndex(index);

  return (
    <div className="video-carousel flex flex-col items-center w-[80%] mx-auto py-20 relative">
      <h1 className="text-3xl md:text-4xl text-white pb-6 font-bold lg:w-1/2 text-center">
        Ready-made templates for your design ideas
      </h1>
      <p className="pb-6 text-center">Add a little bit of body text</p>

      <div className="flex overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentVideoIndex * 100) / videosToShow}%)`,
          }}
        >
          {/* Create a seamless carousel by duplicating the first few elements */}
          {videos.map((video, index) => (
            <div
              key={index}
              className="flex-none w-[25%] p-0"
            >
              {showVideoIndex === index ? (
                <video
                  className="w-48 h-56 md:h-96 rounded-lg"
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
                  className="w-48 h-56 md:h-96 rounded-lg object-cover cursor-pointer"
                  width={224}
                  height={364}
                  src={video.image}
                  alt={`Video thumbnail ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              )}
            </div>
          ))}
          {/* Duplicate the first few videos to create an infinite effect */}
          {videos.slice(0, videosToShow).map((video, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-none w-[20%] p-0"
            >
              <Image
                className="w-full h-56 md:h-96 rounded-lg object-cover cursor-pointer"
                width={224}
                height={364}
                src={video.image}
                alt={`Video thumbnail duplicate ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="controls mt-16 space-x-4 absolute flex justify-between w-full top-1/2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="prev-button rounded-full flex items-center p-2 bg-custom-purple hover:bg-white"
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="w-5 h-5 md:w-7 md:h-7 text-white hover:text-custom-purple"
          />
        </button>
        <button
          onClick={handleNext}
          className="next-button rounded-full flex items-center p-2 bg-custom-purple hover:bg-white"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="w-5 h-5 md:w-7 md:h-7 text-white hover:text-custom-purple"
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
