import React from "react";
import { AboutWrapper } from "../wrappers.js/AboutWrapper";

const AboutUs = () => {
  return (
    <AboutWrapper id="about-us">
      <div className="images">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="content">
        <h1>O nas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          pariatur atque, harum similique modi eveniet quasi deleniti vel nihil
          aperiam reiciendis eaque, impedit dolores saepe facilis vitae
          reprehenderit doloremque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          pariatur atque, harum similique modi eveniet quasi deleniti vel nihil
          aperiam reiciendis eaque.
        </p>
        <div>
          <p>
            <span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Mollitia pariatur atque,
          </p>
          <span className="sign">JohnDoe</span>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default AboutUs;
