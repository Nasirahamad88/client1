"use client";

import { useState } from "react";
import "../globals.css";
import Button from "@/Component/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    website: "",
    services: [],
    timeFrame: "",
    budget: "",
    projectDetails: "",
    referralSource: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedServices = checked
        ? [...formData.services, value]
        : formData.services.filter((service) => service !== value);
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      style={{
        backgroundColor: "hsla(240, 100%, 4%, 1)",
        backgroundImage: `
          radial-gradient(at 51% 27%, hsla(240, 96%, 15%, 1) 0px, transparent 50%),
          radial-gradient(at 50% 66%, hsla(240, 96%, 15%, 1) 0px, transparent 50%)
        `,
        paddingTop: "150px",
      }}
    >
      <div id="enquire-wrapper" className="w-[80%] mx-auto pb-32">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div className="main-wrapper">
                <div className="content-wrapper">
                  <h1 className="text-4xl font-extrabold">Let’s work together</h1>
                </div>
                <div className="form-wrapper">
                  <form
                    onSubmit={handleSubmit}
                    aria-label="Contact form"
                    novalidate
                  >
                    <div className="row">
                      <div className="lg:flex md:flex gap-7">
                        <div className="col-md-6 form-group lg:w-1/2">
                          <label
                            className=""
                            htmlFor="name"
                            style={{ color: "#fff", fontSize: "16px" }}
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-control mt-5"
                          />
                        </div>
                        <div className="col-md-6 form-group lg:w-1/2 md:1/2">
                          <label
                            htmlFor="businessName"
                            style={{ color: "#fff", fontSize: "16px" }}
                          >
                            What Is the Name of Your Business/Project?
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            className="form-control mt-5"
                          />
                        </div>
                      </div>
                      <div className="lg:flex md:flex gap-7">
                        <div className="col-md-6 form-group lg:w-1/2 md:w-1/2 w-full">
                          <label
                            htmlFor="email"
                            style={{ color: "#fff", fontSize: "16px" }}
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control mt-5"
                          />
                        </div>
                        <div className="col-md-6 form-group lg:w-1/2 md:w-1/2 w-full">
                          <label htmlFor="website">
                            Link to your website or social media
                          </label>
                          <input
                            type="text"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="form-control mt-5"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <label>Services Required (Required)</label>
                        <div>
                          {[
                            "Logo Design",
                            "Visual Identity Design",
                            "Brand Strategy",
                            "Social Media Design",
                            "Illustration",
                            "Packaging",
                          ].map((service) => (
                            <div
                              key={service}
                              className="flex items-center gap-3 mb-2"
                            >
                              <input
                                className="rounded-full border border-custom-purple focus:outline-none focus:ring-2 focus:bg-custom-purple"
                                type="checkbox"
                                name="services"
                                value={service}
                                checked={formData.services.includes(service)}
                                onChange={handleChange}
                              />
                              <label className="text-white">{service}</label>
                            </div>
                          ))}
                        </div>

                        <p style={{ fontSize: "14px", marginTop: "20px" }}>
                          You can choose multiple.
                        </p>
                      </div>
                      <div className="lg:flex md:flex gap-7">
                      <div className="col-md-6 form-group lg:w-1/2 md:w-1/2 w-full">
                        <label>What is your timeframe for this project?</label>
                        <input
                          type="text"
                          name="timeFrame"
                          value={formData.timeFrame}
                          onChange={handleChange}
                          className="form-control mt-5"
                        />
                      </div >
                      <div className="col-md-6 form-group lg:w-1/2 md:w-1/2 w-full">
                        <label>What is your budget for this project?</label>
                        <input
                          type="text"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="form-control mt-5"
                        />
                      </div>
                      </div>
                      <div className="col-md-12 form-group">
                        <label style={{ color: "#fff", fontSize: "16px" }}>
                          Project Details
                        </label>
                        <textarea
                          name="projectDetails"
                          value={formData.projectDetails}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="form-control mt-5"
                        />
                      </div>
                      <div className="col-md-12 form-group">
                        <label style={{ color: "#fff", fontSize: "16px" }}>
                          How did you hear about my business?
                        </label>
                        <input
                          type="text"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className="form-control mt-5"
                        />
                      </div>
                    </div>
                    <div className="note" style={{ margin: "30px 0" }}>
                      <strong style={{ color: "#DEF95EFF", fontWeight: 600 }}>
                        Note:
                      </strong>{" "}
                      If you haven’t received a reply via email in 48 hours,
                      please check your spam folder or reach out to me through
                      my{" "}
                      <a href="#" style={{ color: "#DEF95EFF" }}>
                        LinkedIn
                      </a>{" "}
                      or{" "}
                      <a href="#" style={{ color: "#DEF95EFF" }}>
                        Instagram
                      </a>{" "}
                      DMs.
                    </div>
                   <Button/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
