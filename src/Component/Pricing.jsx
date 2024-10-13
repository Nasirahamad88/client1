"use client";
import React from "react";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h1 className="text-4xl pb-10 font-bold w-full max-w-2xl mx-auto text-center text-white">
        The easiest way to create content for your business
        <p className="text-xs pt-5">Add a little bit of body text</p>
      </h1>

      <div className="pricing">
        {/* Weekly Plan */}
        <div className="card-pricing">
          <div className="card-header">
            <span className="subscription-plan">Weekly</span>
            <div className="subscription-price">
              <span className="price">$4.99</span>
              <br />
              <span className="price-text">per week</span>
            </div>
          </div>
          <div className="card-body">
          <ul className="subscription-features">
              <li>1000+ templates</li>
              <li>100+ filters</li>
              <li>Trendy music library</li>
              <li>Easy-to-use adjustment tools</li>
              <li>Advanced text editor tools</li>
              <li>New templates every week</li>
              <li>Editor</li>
              <li>Auto-sync files to song</li>
            </ul>
            <a href="#" className="cta-button-yellow" style={{ color: "#ff7551" }}>
              Download the app
            </a>
            <a className="cta-button-yellow">Clear anytime</a>
          </div>
        </div>

        {/* Annual Plan */}
        <div className="card-pricing popular">
          <div className="card-header">
            <span className="subscription-plan">Annual</span>
            <div className="subscription-price">
              <span className="price">$39.99</span>
              <br />
              <span className="price-text">$3.39 per month</span>
            </div>
          </div>
          <div className="card-body">
          <ul className="subscription-features">
              <li>1000+ templates</li>
              <li>100+ filters</li>
              <li>Trendy music library</li>
              <li>Easy-to-use adjustment tools</li>
              <li>Advanced text editor tools</li>
              <li>New templates every week</li>
              <li>Editor</li>
              <li>Auto-sync files to song</li>
            </ul>
            <a
              href="#"
              className="cta-button-yellow text-white rounded-full py-3 px-6 hover:bg-orange-300"
              style={{ backgroundColor: "#ff7551" }}
            >
              Continue
            </a>
            <a className="cta-button-yellow">Clear anytime</a>
          </div>
        </div>

        {/* Monthly Plan */}
        <div className="card-pricing">
          <div className="card-header">
            <span className="subscription-plan">Monthly</span>
            <div className="subscription-price">
              <span className="price">$9.99</span>
              <br />
              <span className="price-text">per month</span>
            </div>
          </div>
          <div className="card-body">
          <ul className="subscription-features">
              <li>1000+ templates</li>
              <li>100+ filters</li>
              <li>Trendy music library</li>
              <li>Easy-to-use adjustment tools</li>
              <li>Advanced text editor tools</li>
              <li>New templates every week</li>
              <li>Editor</li>
              <li>Auto-sync files to song</li>
            </ul>
            <a href="#" className="cta-button-yellow" style={{ color: "#ff7551" }}>
              Download the app
            </a>
            <a className="cta-button-yellow">Clear anytime</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-section {
          padding: 50px 0;
        }

        .pricing {
          display: flex;
          gap: 20px;
          overflow-x: auto; /* Enable horizontal scroll */
          padding-bottom: 50px;
          scroll-snap-type: x mandatory; /* Snap effect */
        }

        .card-pricing {
          background: linear-gradient(
            103.87deg,
            rgba(255, 255, 255, 0.03) -0.24%,
            rgba(175, 62, 244, 0.09) 100.42%
          );
          padding: 40px;
          border-radius: 15px;
          min-width: 280px; /* Minimum width for mobile */
          flex: 0 0 auto; /* Prevent shrinking */
          scroll-snap-align: start; /* Snap card to viewport */
        }

        .card-header {
          height: 65px;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
        }

        .subscription-price {
          text-align: right;
        }

        .cta-button-yellow {
          display: block;
          text-align: center;
          margin: 10px 0;
        }

        @media (min-width: 768px) {
          .pricing {
            flex-wrap: wrap;
            justify-content: center;
            overflow-x: hidden; /* Disable scroll for larger screens */
          }

          .card-pricing {
            flex: 1 1 calc(33.33% - 20px); /* 3 cards per row */
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
