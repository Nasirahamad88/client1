"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import Button from './Button';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null); // State to track the currently open FAQ

  const toggleFAQ = (index) => {
    setIsOpen(isOpen === index ? null : index); // Toggle the clicked FAQ
  };

  const faqs = [
    {
      question: "How does video editing improve podcast-related content?",
      answer: "Video editing enhances podcast content by removing unnecessary segments, adding visual elements like captions or graphics, and improving pacing for better viewer engagement.",
    },
    {
      question: "What enhancements are possible for podcast video clips?",
      answer: "Enhancements include adding intros, outros, transitions, subtitles, animations, and optimized thumbnails to increase audience retention and brand recognition.",
    },
    {
      question: "What is the significance of audio enhancement in podcast videos?",
      answer: "Audio enhancement ensures clear and high-quality sound by reducing background noise, balancing levels, and adding effects, which improves the overall listening experience for the audience.",
    }
    
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url('/podcast.jpeg')", // Background image
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center relative z-10 w-full">
          <div className="w-full">
            <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold text-white">Download the app to begin creating beautiful content
            </h1>
            
            <div className="py-10 px-5 w-full">
              <h2 className="lg:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
              <div className="mx-auto w-full max-w-3xl text-xl">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4 relative">
                    <div
                      className="bg-black  p-2 rounded-lg shadow-lg flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFAQ(index)} // Toggle FAQ on click
                    >
                      <h3 className=" lg:text-xl text-white font-thin text-xs">{faq.question}</h3>
                      {isOpen === index ? (
                        <FontAwesomeIcon icon={faMinus} className="text-white border rounded-full p-2" />
                      ) : (
                        <FontAwesomeIcon icon={faPlus} className="text-white border rounded-full p-2" />
                      )}
                    </div>
                    {isOpen === index && (
                      <div className="bg-gray-800 text-white p-4 mt-2 rounded-lg shadow-lg">
                        <p className="text-base lg:text-xl">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
        
            <Button />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
    </div>
  );
};

export default Faq;
