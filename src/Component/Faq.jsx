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
      question: "What is your return policy?",
      answer: "Our return policy allows you to return products within 30 days of receipt. Items must be in their original condition.",
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order using the tracking number provided in the shipping confirmation email.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email at support@example.com or through our contact form on the website.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url('/hd.jpg')", // Background image
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center relative z-10 w-full">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            
            <div className="py-10 px-5 w-full">
              <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
              <div className="mx-auto w-full max-w-3xl text-xl">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-4 relative">
                    <div
                      className="bg-white p-3 rounded-lg shadow-lg flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFAQ(index)} // Toggle FAQ on click
                    >
                      <h3 className="text-xl lg:text-2xl font-semibold">{faq.question}</h3>
                      {isOpen === index ? (
                        <FontAwesomeIcon icon={faMinus} className="text-purple-600" />
                      ) : (
                        <FontAwesomeIcon icon={faPlus} className="text-purple-600" />
                      )}
                    </div>
                    {isOpen === index && (
                      <div className="bg-white p-4 mt-2 rounded-lg shadow-lg">
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
