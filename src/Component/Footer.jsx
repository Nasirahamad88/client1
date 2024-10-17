import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import for WhatsApp icon
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <>
   <section className="bg-gray-800 text-white py-12 ">
  <div className="container  flex  justify-between items-start w-[90%] mx-auto">
    
    {/* Logo Section */}
    <div className='lg:flex lg:justify-between items-start lg:w-1/3'>
    <div className="w-full md:w-1/2 lg:w-full mb-8 md:mb-0">
      <Image src="/logo.png" alt="footer-logo" width={150} height={50} />
    </div>
    
    {/* Links Section 1 */}
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Explore</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Blog</a></li>
        <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
      </ul>
    </div>
    </div>

    <div className='lg:flex lg:justify-between items-start lg:w-1/3'>
      {/* Links Section 2 */}
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Resources</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
        <li><a href="#" className="hover:text-gray-400">Support</a></li>
        <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
      </ul>
    </div>

    {/* Contact Section */}
    <div className="w-full  md:w-1/2 lg:w-1/2">
      <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
      <button className="py-2 px-4 bg-purple-600 rounded-lg hover:bg-purple-700 mb-4">Schedule a Call</button>
      <p className="mb-2">info@gmail.com</p>
      
      {/* WhatsApp Icon */}
      <a href="https://wa.me/123456789" className="flex items-center space-x-2 text-white ">
        <FontAwesomeIcon icon={faWhatsapp} className="w-10 h-6" />
        <span>WhatsApp Us</span>
      </a>
    </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Footer;
