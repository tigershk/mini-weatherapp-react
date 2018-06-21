import React from "react";


function Info({ description, current, credit }) {

  const currentTemperature = Math.round(current - 273.15);

  return (
    <div className="info">
      <p className="info__item info__item--conditions" id="conditions">{description} {currentTemperature} degrees</p>
      <p className="info__item info__item--credits">
        <a href="#" id="credit-user">{credit}</a>
        <span>on</span>
        <a href="#" id="credit-platform">Unsplash</a>
      </p>
    </div>
  );
}



export default Info;
