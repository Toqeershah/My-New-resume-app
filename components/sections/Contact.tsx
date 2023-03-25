import React from "react";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="circle circle-big"> </div>
      <div className="circle circle-small"> </div>
      <div className="container">
        <h2 className="section-title underline-heading">Contact Me</h2>
        <div className="grid">
          <form action="" className="contact-form">
            <div className="input-group">
              <input
                type="text"
                required
                placeholder="Enter your Name"
                id="username"
              />
            </div>
            <div className="input-group">
              <input
                type="emails"
                required
                placeholder="Enter your Email"
                id="email"
              />
            </div>
            <div className="message">
              <textarea
                name=""
                id="user-message"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <Button text="Submit" />
          </form>
          <article className="form-content">
            <h3 className="section-subtitle">
              Have any Questions? Feel free to contact us!
            </h3>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
