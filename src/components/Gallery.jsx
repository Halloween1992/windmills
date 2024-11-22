import React from "react";
import { GalleryWrapper } from "../wrappers.js/GalleryWrapper";

const Gallery = () => {
  return (
    <GalleryWrapper id="gallery">
      <div className="top">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bottom">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button>Zobacz więcej</button>
    </GalleryWrapper>
  );
};

export default Gallery;
