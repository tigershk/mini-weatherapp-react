import React from "react";
import Thumb from "./Thumb";

function Thumbs({ images, description, receiveImage }) {
  console.log("Inside Thumbs Component", { images });

  return (
    <div className="thumbs">
      {images.map(image => {
        return (
          <Thumb
            receiveImage={receiveImage}
            key={image.id}
            image={image}
            description={description}
          />
        );
      })}
    </div>
  );
}

Thumbs.defaultProps = {};

export default Thumbs;
