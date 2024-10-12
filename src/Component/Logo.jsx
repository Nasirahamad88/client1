import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import Logo1 from "../../public/logo/1.png"
import Logo2 from "../../public/logo/2.png"
import Logo3 from "../../public/logo/3.png"
import Logo4 from "../../public/logo/4.png"
import Logo5 from "../../public/logo/1.png"
import Logo6 from "../../public/logo/2.png"
import Logo7 from "../../public/logo/3.png"
import Logo8 from "../../public/logo/4.png"
import Logo9 from "../../public/logo/1.png"

import Logo10 from "../../public/logo/3.png"
const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,]
const AllLogo = () => {
    const settings = {
      direction: "left",
      speed: 50,
      pauseOnHover: true,
      gradient: false,
      gradientColor: "#ffffff00",
      gradientWidth: 10,
    };
  
    return (
      <section className=" py-20">
        <div className="space-x-6 w-[80%] mx-auto">
          <h2 className="pb-10 text-4xl font-bold text-white hover:underline text-center">
          We Work with
          </h2>
          <Marquee
            {...settings}
            className="flex space-x-4 py-4  rounded-lg shadow-lg"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="h-32 w-32 mx-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    );
  };
  
  export default AllLogo;