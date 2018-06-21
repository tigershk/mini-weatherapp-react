import React from "react";

function Photo({ images }) {
  return (
    <a href={images.url}>
      <img src={images.reg} />
    </a>
  );
}

export default Photo;
