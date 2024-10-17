"use client"

import Hero from "@/Component/Hero";
import Head from "next/head";
import Pricing from "@/Component/Pricing";
import AllLogo from "@/Component/Logo";
import Video from "@/Component/Video";
import TestimonialSlider from "@/Component/Testimonial";
import Video2 from "@/Component/Video2";

import Faq from "@/Component/Faq";
export default function Home() {
  return (
    <div className="pt-40" 
    style={{
      backgroundColor: "hsla(240,93%,5%,1)",
      backgroundImage: `
        radial-gradient(at 44% 77%, hsla(220,90%,12%,1) 0px, transparent 50%),
radial-gradient(at 63% 78%, hsla(221,100%,14%,1) 0px, transparent 50%),
radial-gradient(at 53% 57%, hsla(226,100%,1%,1) 0px, transparent 50%);
      `,
    }}
    >
     <Head>
        <script src="./js/e-202442.js" type="text/javascript" defer></script>
        <script
          src="./js/jquery-jquery-migrate.min.js"
          type="text/javascript"
          defer
        ></script>
        <script
          src="./js/jquery-jquery.min.js"
          type="text/javascript"
          defer
        ></script>
        <script
          src="./js/js-autoptimize_bc8345473f61291f4cb2ecd602c47bc0.js"
          type="text/javascript"
          defer
        ></script>
        <script
          src="./js/js-bilmur.min.js"
          type="text/javascript"
          defer
        ></script>
        <script
          src="./js/js-lazysizes.min.js"
          type="text/javascript"
          defer
        ></script>
      </Head>

      
  
      <Hero/>
      <AllLogo/>
      <Video/>
      <Video2/> 
      <TestimonialSlider/>
      <Pricing/>
      <Faq/>
    
    </div>
    );
}
