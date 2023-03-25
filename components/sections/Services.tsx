import React from "react";
import { BsMenuDown, BsStickies, BsWindowSidebar } from "react-icons/bs";
import ServiceItem from "../ServiceItem";

const DUMMY_DECS =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="overlay"></div>
      <div className="container">
        <h3 className="subtitle-short section-subtitle">SERVICES</h3>
        <h2 className="section-title">What Can I Do For You?</h2>
        <div className="grid">
          <ServiceItem title="Web Design" desc={DUMMY_DECS} Icon={BsMenuDown} />
          <ServiceItem
            title="Web Development"
            desc={DUMMY_DECS}
            Icon={BsWindowSidebar}
          />
          <ServiceItem title="Branding" desc={DUMMY_DECS} Icon={BsStickies} />
        </div>
      </div>
    </section>
  );
};

export default Services;
