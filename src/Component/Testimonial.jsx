import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const testimonialsData = [
  {
    title: 'An app that does all the work for you',
    message:
      'I love this app. It has ready-made templates, and you don’t need to worry about editing photos/videos.',
    user: 'msvystun',
  },
  {
    title: 'Very Impressive',
    message:
      'The moment I downloaded Templify I was incredibly impressed. I created sweet content for my ski trip in less than 2 minutes!',
    user: 'C_eej',
  },
  {
    title: 'Fun and easy',
    message:
      'It takes less than 10 seconds to produce a great-quality video. It’s fun and addicting!',
    user: 'RSP2019',
  },
  {
    title: 'Easy to use, Great experience',
    message:
      'Brilliant design, soft flow, and user-friendly. I really enjoyed using it. Well done!',
    user: 'Mike Juni',
  },
  {
    title: 'Free music inside app',
    message:
      'It’s a magic wand to create Instagram stories. I love the music, filters, and new templates every week!',
    user: 'correy_lawson',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = 3;

  

  return (
    <section>   <div >
    <h2 className="section__title text-center pt-20">What Our Users say</h2>
  <div className="section__description text-center"> Join our creative small business community</div>
  </div>
    <div className="testimonials testimonials-slider slick-slider slick-dotted w-[80%] mx-auto">
   
      <div className="slick-list draggable">
        <div className="slick-track" style={{ opacity: 1, width: '1825px', transform: 'translate3d(0px, 0px, 0px)' }}>
          {testimonialsData
            .slice(currentIndex, currentIndex + testimonialsToShow)
            .map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial slick-slide slick-current ${index === 0 ? 'slick-active' : ''}`}
                style={{ width: '343px' }}
                role="tabpanel"
                aria-hidden={index !== 0}
                id={`slick-slide0${index}`}
              >
                <div className="testimonial-title">{testimonial.title}</div>
                <div className="testimonial-rating">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="clip-star clip-star-active"></span>
                    ))}
                </div>
                <div className="testimonial-message">{testimonial.message}</div>
                <div className="testimonial-information">
                  <div className="testimonial-information-user">{testimonial.user}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ul className="slick-dots " role="tablist">
        {testimonialsData.map((_, index) => (
          <li key={index} role="presentation" className={index === currentIndex ? 'slick-active' : ''}>
            <button
              type="button"
              role="tab"
              aria-controls={`slick-slide0${index}`}
              aria-label={`${index + 1} of ${testimonialsData.length}`}
              aria-selected={index === currentIndex}
              onClick={() => setCurrentIndex(index)} // Allow direct navigation to a specific testimonial
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      
    </div></section>
  );
};

export default Testimonial;
