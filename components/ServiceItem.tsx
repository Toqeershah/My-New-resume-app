import React from "react";
import { IconType } from "react-icons/lib";

const ServiceItem = ({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: IconType;
}) => {
  return (
    <article className="service">
      <div className="service-icon">
        <Icon />
      </div>
      <h3 className="section-subtitle service-title">{title}</h3>
      <p className="section-description service-description">{desc}</p>
    </article>
  );
};

export default ServiceItem;
