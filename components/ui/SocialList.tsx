import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const SocialList = ({ includesTitle = false }: { includesTitle?: boolean }) => {
  return (
    <div className="social-links">
      {includesTitle && <h3 className="section-subtitle">Social Media</h3>}
      <ul className={"social-list"}>
        <li className={"social-list-item"}>
          <a href="https://web.facebook.com/toqeer.anker">
            <FaFacebook />
          </a>
        </li>
        <li className={"social-list-item"}>
          <a href="https://twitter.com/ToqeerS17253999">
            <FaTwitter />
          </a>
        </li>
        <li className={"social-list-item"}>
          <a href="https://www.instagram.com/toqeer_chemist/">
            <FaInstagram />
          </a>
        </li>
        <li className={"social-list-item"}>
          <a href="https://github.com/Toqeershah">
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
