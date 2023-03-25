"use client";
import Link from "next/link";
import { useState } from "react";
import { BsList, BsXLg } from "react-icons/bs";
import SocialList from "../ui/SocialList";

const MainHeader = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  const navItemClickHandler = () => {
    if (window.matchMedia("(max-width: 890px").matches) {
      setShowNav(false);
    }
  };

  return (
    <header
      className={`header bg-gray-600 text-slate-50 ${
        showNav ? "nav-visible" : ""
      }`}
    >
      <div className="header-container">
        <h3 className={"logo "}>
          <Link href="/">Toqeer Abid</Link>
        </h3>
        <div className="nav-group">
          <nav className={"nav"}>
            <ul className="nav-list">
              <li className="nav-list-item">
                <a onClick={navItemClickHandler} href="#about">
                  About
                </a>
              </li>
              <li className="nav-list-item">
                <a onClick={navItemClickHandler} href="#services">
                  Services
                </a>
              </li>
              <li className="nav-list-item">
                <a onClick={navItemClickHandler} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-list-item">
                <a onClick={navItemClickHandler} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <SocialList />
        </div>
        <button onClick={toggleNav} className="nav-toggle">
          <BsList className="nav-open" />
          <BsXLg className="nav-close" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
