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
        backgroundColor: "hsla(240,93%,5%,1)",
        backgroundImage: `
        radial-gradient(at 52% 81%, hsla(184,100%,8%,1) 0px, transparent 50%),
radial-gradient(at 52% 70%, hsla(187,90%,15%,1) 0px, transparent 50%);
      `,
      }}
    >
      <div className="main-wrapper w-[90%] lg:w-[70%] mx-auto pt-10">


        <div className="content-wrapper ">
          <div className="heading-div">
            <h1 className="h2 font-extrabold">Let’s work together</h1>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="form">
            <div className="wpcf7 js" id="wpcf7-f279-o1" lang="en-US" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form
                action="/contact/#wpcf7-f279-o1"
                method="post"
                className="wpcf7-form init"
                aria-label="Contact form"
                noValidate
                data-status="init"
              >
                <div style={{ display: "none" }}>
                  <input type="hidden" name="_wpcf7" value="279" />
                  <input type="hidden" name="_wpcf7_version" value="5.7.4" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f279-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="0" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                </div>

                <p>
                  <span className="wpcf7-form-control-wrap" data-name="checkbox-609">
                    <span className="wpcf7-form-control wpcf7-checkbox wpcf7-exclusive-checkbox" id="male-check"></span>
                  </span>
                </p>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p>
                        <label htmlFor="name">Name</label>
                        <span className="wpcf7-form-control-wrap" data-name="Name">
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                            autoComplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="text"
                            name="Name"
                          />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <p>
                        <label htmlFor="business-name">What Is the Name of Your Business/Project?</label>
                        <span className="wpcf7-form-control-wrap" data-name="NameofYourBusiness">
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                            autoComplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="text"
                            name="NameofYourBusiness"
                          />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <p>
                        <label htmlFor="email">Your Email</label>
                        <span className="wpcf7-form-control-wrap" data-name="email">
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                            autoComplete="off"
                            aria-required="true"
                            aria-invalid="false"
                            type="email"
                            name="email"
                          />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <p>
                        <label htmlFor="Yourwebsite">Link to your website or social media</label>
                        <br />
                        <span className="wpcf7-form-control-wrap" data-name="Yourwebsite">
                          <input
                            size="40"
                            className="wpcf7-form-control wpcf7-text form-control"
                            aria-invalid="false"
                            type="text"
                            name="Yourwebsite"
                          />
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="checkbox-wrapper">
                    <p>Services Required (Required)</p>
                    <div className="form-group">
                      <p>
                        <span className="wpcf7-form-control-wrap" data-name="Checkboxbarns">
                          <span
                            className="wpcf7-form-control wpcf7-checkbox wpcf7-validates-as-required checkbox-column"
                            id="logo-design"
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'auto',
                              margin: '10px 0 20px 0',
                              gap: '15px',
                            }}
                          >
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Logo Design" />
                              <span className="wpcf7-list-item-label">Logo Design</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Visual Identity Design" />
                              <span className="wpcf7-list-item-label">Visual Identity Design</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Brand Strategy" />
                              <span className="wpcf7-list-item-label">Brand Strategy</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Social Media Design" />
                              <span className="wpcf7-list-item-label">Social Media Design</span>
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Illustration" />
                              <span className="wpcf7-list-item-label">Illustration</span>
                            </label>

                            <label className="mb-16" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <input type="checkbox" name="Checkboxbarns[]" value="Packaging" />
                              <span className="wpcf7-list-item-label ">Packaging</span>
                            </label>
                          </span>
                        </span>




                      
                    </p>
                  </div>
                </div>


                

                

                <div className="col-md-12">
                  <div className="form-group">
                    <p>
                      <label htmlFor="ProjectDetails">Project Details</label>
                      <span className="wpcf7-form-control-wrap" data-name="ProjectDetails">
                        <textarea
                          cols="40"
                          rows="10"
                          className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-control"
                          name="ProjectDetails"
                        ></textarea>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <p>
                      <label htmlFor="Aboutmybusiness">How did you hear about my business?</label>
                      <span className="wpcf7-form-control-wrap" data-name="Aboutmybusiness">
                        <input
                          size="40"
                          className="wpcf7-form-control wpcf7-text form-control bg-none"
                          type="text"
                          name="Aboutmybusiness"
                        />
                      </span>
                    </p>
                  </div>
                </div>

                <div className="note" style={{ margin: "30px 0" }}>
                  <p>
                    <strong style={{ color: "#DEF95E", fontWeight: 600 }}>Note:</strong> If you haven’t received a reply
                    via email in 48 hours, please check your spam folder or reach out to me through my{" "}
                    <a href="#" style={{ color: "#DEF95E" }}>
                      LinkedIn
                    </a>{" "}
                    or{" "}
                    <a href="#" style={{ color: "#DEF95E" }}>
                      Instagram
                    </a>{" "}
                    DMs.
                  </p>
                </div>

                <p>
                  <input
                    className="wpcf7-form-control has-spinner wpcf7-submit btn-style small"
                    type="submit"
                    value="Submit"
                  />
                  <span className="wpcf7-spinner"></span>
                </p>
            </div>
            <div className="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
      </div >

    </section >
  );
}
