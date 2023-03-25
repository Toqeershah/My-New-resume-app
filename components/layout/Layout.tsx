import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainHeader />
      <main className="main">{children}</main>
      <MainFooter />
    </>
  );
};

export default Layout;
