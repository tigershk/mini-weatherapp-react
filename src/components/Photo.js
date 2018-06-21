import React from "react";

function Photo({ reg }) {
  return (
    <figure className="photo" id="photo">
      <img src={reg} alt={"photo"} />
    </figure>
  );
}

export default Photo;
