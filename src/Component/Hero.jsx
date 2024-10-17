"use client"
import React, { useState, useEffect } from 'react';
import Button from './Button';

const Hero = () => {
  // State for animated words
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["virality", "fantastic", "awesome"];

  // Cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, );

  return (
    <section className="flex flex-col-reverse md:flex-row items-center w-[80%] mx-auto gap-10 md:gap-28 py-10 md:py-20">
      {/* Video Section */}
      <div className="w-full md:w-[40%]">
        <video
          className="rounded-lg w-full h-auto shadow-full"
          controls
          preload="none"
          autoPlay
          muted
          loop
        >
          <source src="/hero.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
      </div>

      {/* Text and Button Section */}
      <div className="w-full lg:w-[40%] md:w-1/2 text-center md:text-left">
        <h1 className="text-start text-5xl pb-2 font-extrabold text-white">
          Boost the{" "}
          <span className="hearts"></span>
          <span className="animated-word text-orange">{words[currentWordIndex]}</span><br/> of
          your content
        </h1>
        <p className="text-start pb-7 md:text-xl text-white py-3 md:py-5">
          Creating amazing social content has never been easier with hundreds of
          templates, text effects, and high-quality animations.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
