import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="grid">
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio1.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 1 ipsum.</h3>
            </figcaption>
          </figure>
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio2.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 2 ipsum.</h3>
            </figcaption>
          </figure>
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio3.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 3 ipsum.</h3>
            </figcaption>
          </figure>
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio4.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 4 ipsum.</h3>
            </figcaption>
          </figure>
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio5.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 5 ipsum.</h3>
            </figcaption>
          </figure>
          <figure className="portfolio-item">
            <Image
              width={400}
              height={300}
              src="/imgs/portfolio6.jpg"
              alt=""
              className="portfolio-img"
            />
            <figcaption className="portfolio-content">
              <h3 className="section-subtitle">Lorem, 6 ipsum.</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
