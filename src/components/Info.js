import React from "react";
import PropTypes from "prop-types";

function Info({ description, current, credit }) {
  const currentTemperature = Math.round(current - 273.15);

  return (
    <div>
      {description} {currentTemperature} {credit}
    </div>
  );
}

// Info.propTypes = {
//   description: PropTypes.string
// };

export default Info;
