"use client"

import Hero from "@/Component/Hero";

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
      backgroundColor: "hsla(240,100%,4%,1)",
      backgroundImage: `
        radial-gradient(at 51% 27%, hsla(240,96%,15%,1) 0px, transparent 50%),
radial-gradient(at 50% 66%, hsla(240,96%,15%,1) 0px, transparent 50%);
      `,
    }}
    >
      
  
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
