"use client"; // Indicate this is a client component
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .scroll-to-top {
          display: none; /* Initially hidden */
          padding: 0;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 26.5px;
          position: fixed;
          right: 44px;
          bottom: 44px;
          z-index: 99999;
          color: #fff;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
          border: 1px solid #7361df;
          border-left: none;
          display: flex;
          align-items: center; /* Center items vertically */
          gap: 10px; /* Space between icon and text */
        }

        @media (max-width: 767px) {
          .scroll-to-top {
            right: 22px;
            bottom: 22px;
          }

          .scroll-to-top span {
            display: none; /* Hide text on mobile */
          }
        }

        .scroll-to-top i {
          background: #7361df;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          font-size: 20px; /* Adjust icon size */
          color: #fff; /* Icon color */
        }

        @media (max-width: 767px) {
          .scroll-to-top i {
            width: 36px;
            height: 36px;
            font-size: 18px; /* Adjust icon size for mobile */
          }
        }

        .scroll-to-top:hover {
          cursor: pointer;
          color: #fff;
        }

        .scroll-to-top:hover i {
          background: #fff;
          color: #17171d;
        }

        /* Show button when scrolling down */
        .show {
          display: flex; /* Use flex to show icon and text */
        }
      `}</style>

      <a
        className={`scroll-to-top ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
         <div className="flex   text-center justify-center align-middle gap-2">

         <FontAwesomeIcon icon={faArrowUp} className="bg-custom-purple text-xl hover:text-black hover:bg-white   p-3 rounded-full"/>
         <span className="pt-3 pr-4 font-bold" >Back to top</span> 
         </div>
       
      </a>
    </>
  );
};

export default ScrollToTopButton;
