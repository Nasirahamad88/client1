"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';

// Sample testimonial data
const testimonials = [
  {
    quote: "This is an amazing product! It has changed my life.",
    author: "John Doe",
    position: "CEO, Company A",
  },
  {
    quote: "I can't believe how easy it is to use.",
    author: "Jane Smith",
    position: "Manager, Company B",
  },
  {
    quote: "Fantastic experience! Will definitely use it again.",
    author: "Alice Johnson",
    position: "Developer, Company C",
  },
  {
    quote: "Great customer service and an excellent product!",
    author: "Bob Brown",
    position: "Designer, Company D",
  },
  {
    quote: "A game changer for my business. Thank you!",
    author: "Charlie Green",
    position: "Entrepreneur, Company E",
  },
  {
    quote: "I loved the features and how intuitive it is!",
    author: "Emily White",
    position: "Marketer, Company F",
  },
  {
    quote: "Excellent value for money. I'm very satisfied!",
    author: "David Black",
    position: "Analyst, Company G",
  },
];

const testimonialsToShow = 3; // Number of testimonials to show at once in the carousel

const TestimonialCarousel = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Handle moving to the next testimonial
  const handleNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length); // Cyclic behavior
  };

  // Handle moving to the previous testimonial
  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Cyclic behavior
  };

  return (
    <div className="testimonial-carousel flex flex-col items-center w-[90%] mx-auto py-40 relative">
      <h1 className="text-4xl pb-10 font-bold w-full text-center text-white">
        What Our Clients Say
      </h1>
      <p className='pb-5'>Add a little bit of body text</p>

      {/* Carousel Container */}
      <div className="flex overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentTestimonialIndex * 100) / testimonialsToShow}%)`
          }}
        >
          {/* Loop over the testimonials array and display testimonials */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 p-4">
              <div className="w-full p-12 rounded-lg shadow-2xl bg-[rgba(146,107,228,.1)]">
                <p className="text-gray-500 text-lg italic">{testimonial.quote}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <FontAwesomeIcon key={starIndex} icon={faStar} className="text-yellow-500" />
                  ))}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{testimonial.author}</h3>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="controls mt-10 space-x-4 absolute flex justify-between w-full mx-auto top-1/2 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="prev-button rounded-full flex items-center p-2 bg-custom-purple text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="next-button rounded-full flex items-center p-2 bg-custom-purple text-white"
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
