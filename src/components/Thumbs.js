import React from "react";
import Thumb from "./Thumb";

function Thumbs({ images, description, receiver, }) {

  return (
    <div className="thumbs">
      {images.map(image => {
        return (
          <Thumb
            receiver={receiver}
            key={image.id}
            image={image}
            description={description}
            credit={image.credit}
          />
        );
      })}
    </div>
  );
}

Thumbs.defaultProps = {};

export default Thumbs;
