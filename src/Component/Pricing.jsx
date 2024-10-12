"use client";
import React from "react";

const Pricing = () => {
  return (
    <section>
      <h1 className="text-4xl pb-10 font-bold w-full max-w-2xl mx-auto text-center text-white">
        The easiest way to create content for your business
        <p className="text-xs pt-5">Add a little bit of body text</p>
      </h1>

      <div className="pricing">
        {/* Free Plan */}
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
            <a href="" className="cta-button-yellow" style={{ color: "#ff7551" }}>
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
            <a href="" className="cta-button-yellow" style={{ color: "#ff7551" }}>
              Download the app
            </a>
            <a className="cta-button-yellow">Clear anytime</a>
          </div>
        </div>

        <style jsx>{`
          .pricing {
            justify-content: center;
            padding-bottom: 50px !important;
            display: flex;
            flex-wrap: wrap; /* Allow cards to wrap */
            gap: 20px; /* Add spacing between cards */
          }

          .pricing .card-pricing {
            background: linear-gradient(
              103.87deg,
              hsla(0, 0%, 100%, 0.03) -0.24%,
              rgba(175, 62, 244, 0.09) 100.42%
            );
            padding: 43px 0;
            border-radius: 15px;
            flex: 1 1 280px; /* Allow cards to grow and shrink */
            max-width: 280px; /* Limit max width */
          }

          .pricing .card-pricing:last-child {
            margin-right: unset !important;
          }

          .pricing .card-pricing .card-header {
            background-color: transparent;
            padding: 0 46px 0 36px;
            height: 65px;
          }

          .pricing .card-pricing .card-body {
            padding: 10px 22px 0;
            margin: 0;
          }

          .pricing .card-pricing .subscription-price {
            display: inline;
            float: right;
            position: relative;
            top: -5px;
          }

          .pricing .card-pricing .subscription-price .price {
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
          }

          .pricing .card-pricing .subscription-price .price-text {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            font-size: 12px;
            line-height: 16px;
            color: hsla(0, 0%, 100%, 0.5);
          }

          .pricing .card-pricing .subscription-plan {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
          }

          .pricing .card-pricing .subscription-features {
            margin-bottom: 22px !important;
            padding-left: 15px;
          }

          .pricing .card-pricing .subscription-features li {
            font-weight: 400;
            font-size: 14px;
            line-height: 140%;
            padding-bottom: 15px;
          }

          .pricing .card-pricing .subscription-features li:last-of-type {
            padding-bottom: 0;
          }

          .pricing .cta-button-yellow {
            display: flex;
            justify-content: center;
          }

          .pricing .popular {
            border: 1px solid #9687fe;
          }

          @media (max-width: 768px) {
            .pricing .card-pricing {
              flex: 1 1 calc(100% - 20px); /* Full width on small screens */
            }
          }

          @media (min-width: 769px) {
            .pricing .card-pricing {
              flex: 1 1 calc(33% - 20px); /* Three cards per row */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Pricing;
