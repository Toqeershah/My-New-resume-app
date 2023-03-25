import React from "react";
import Button from "../ui/Button";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container cta-container">
        <h2 className="cta-title section-title underline-heading">
          Need some Help?
        </h2>
        <p className="section-description cta-content mb-7">
          Modern websites are the need of the hour. No matter what profession do
          you have, a website is your need. If you are a seller and want to sell
          your products during the pandamic, a website can be a useuful tool for
          you. Here I provide my services to a number of customers just like
          you.
        </p>
        <Button link="#" text="Contact Now" />
      </div>
    </section>
  );
};

export default Cta;
