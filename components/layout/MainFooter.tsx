import React from "react";
import SocialList from "../ui/SocialList";

const MainFooter = () => {
  return (
    <footer className={"footer"}>
      <div className={"container flex"}>
        <article className={"credits"}>
          <p className={"section-description rights"}>
            Copyright © All rights reserved. Portfolio 2023
          </p>
          <p className={"section-description"}>Made with ❤️ by Toqeer Shah</p>
        </article>
        <SocialList includesTitle />
      </div>
    </footer>
  );
};

export default MainFooter;
