import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title underline-heading">About Me</h2>
        <div className="flex-md">
          <article className="about-content">
            <h3 className="section-subtitle">Hi! I'm Toqeer Abid</h3>
            <p className="section-description">
              I am a Frontend Developer, a student and a passionate Programmer.
              One and a half year back, I started learning Frontend develpoment
              and now, I have become a professional developer.
            </p>
            <p className="section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </article>
          <div className="about-img-container">
            <Image
              src="/imgs/profile.jpg"
              alt=""
              width={500}
              height={800}
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
