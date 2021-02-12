import React from "react";
import {css} from "@emotion/react";
import Nav from "./Nav";
import Footer from "./Footer";
export default function Layout({children}) {
  return (
    <div
      css={css`
        margin: 0 auto;
      `}
    >
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
