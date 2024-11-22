import React from "react";
import Navigation from "./Navigation";
import { HeaderWrapper } from "../wrappers.js/HeaderWrapper";

const Header = () => {
  return (
    <HeaderWrapper id="header">
      <Navigation />
      <div className="content">
        <h2>Znakomita kawa</h2>
        <h1>Windmills</h1>
        <p>cukiernia</p>
        <span>Od 2001 z Tobą</span>
        <button>Dowiedz się więcej</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
