import React from "react";
import { Oswald, Roboto } from "@next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--ff-secondary",
});

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--ff-primary",
});

import "./global.css";
import Layout from "../components/layout/Layout";

export default function RootLayout({ children }) {
  return (
    <html
      style={{
        "--ff-secondary": oswald.style.fontFamily,
        "--ff-primary": roboto.style.fontFamily,
      }}
    >
      <head />

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
