"use client";
import React, { useState } from 'react';

const Button = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);

    // Reset the clicked state after 300ms for animation reset
    setTimeout(() => setIsClicked(false), 300);

    // Handle other button interactions, such as navigation or form submission
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center">
      {/* Scoped Styles using JSX */}
      <style jsx>{`
        .glow-on-hover {
          background: linear-gradient(40deg, #ff2d16, #7a00ff, #ff7300, #fd0, #ff7300, #7a00ff, #ff00c8, #ff2d16);
          animation: glowing 10s linear infinite, water-flow 5s linear infinite;
          cursor: pointer;
          position: relative;
          z-index: 0;
          padding: 12px 50px;
          border-radius: 31px;
          transition: all 0.8s ease;
          font-weight: 800;
          color: #fff;
          font-size: 16px;
          text-decoration: none; /* Ensure no underline on the text */
        }

        .glow-on-hover:hover {
          color: #fff;
        }

        .glow-on-hover:before {
          content: "";
          background: linear-gradient(90deg, #ff2d16, #7a00ff, #ff00c8, #ff7300, #fd0, #ff7300, #7a00ff, #ff00c8, #ff2d16);
          animation: glowing 40s linear infinite;
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          filter: blur(6px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          opacity: 1;
          border-radius: 31px;
          transition: all 1s ease;
          z-index: -1; /* Keep this behind the button text */
        }

        .glow-on-hover:hover:before {
          background: linear-gradient(45deg, #ff2d16, #7a00ff, #ff00c8, #ff7300, #fd0, #ff7300, #7a00ff, #ff00c8, #ff2d16);
          filter: blur(40px);
        }

        .extra-glow:after {
          content: "";
          background: linear-gradient(45deg, #ff2d16, #7a00ff, #ff00c8, #ff7300, #fd0, #ff7300, #7a00ff, #ff00c8, #ff2d16);
          animation: glowing 40s linear infinite;
          position: absolute;
          top: -8px;
          left: -2px;
          background-size: 400%;
          filter: blur(35px);
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          opacity: 1;
          border-radius: 31px;
          transition: all 1s ease;
          z-index: -2; /* Keep this behind the button text */
        }

        /* Water flow animation */
        @keyframes water-flow {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }

        /* Additional styles for button text */
        .button-text {
          position: relative;
          z-index: 1; /* Bring text in front of the glowing effects */
          color: #fff; /* Ensure the text is white for visibility */
        }
      `}</style>

      <div className="text-center relative">
        <div
          className="extra-glow glow-on-hover"
          onClick={handleClick}
        >
          <span className="button-text">Get started</span> {/* Use a span for button text */}
        </div>
      </div>
    </div>
  );
};

export default Button;
