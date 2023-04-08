import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="greet">Hey!</h2>
          <h1 className="title">It's Me Toqeer Abid</h1>
          <p className="subtitle">
            Specializes in Frontend Development. Focused on building great User
            Interfaces.
          </p>
        </div>
      </div>
      <div className={"circle circle-big"}> </div>
      <div className={"circle circle-small"}> </div>
      <div className={"circle circle-small-left"}> </div>
    </section>
  );
};

export default Hero;
