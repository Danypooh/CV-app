import React from "react";
import PropTypes from "prop-types";

function PersonalCV({ name, mail, tel, location, links }) {

  PersonalCV.propTypes = {
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    links: PropTypes.string.isRequired,
  };
  
  return(
    <div id="personalCV">
      <div id="personalName">
        <h1>{name}</h1>
      </div>
      <div id="contactInfo">
        <div className="mail">{mail}</div>
        <div className="tel">{tel}</div>
        <div className="location">{location}</div>
        <div className="links">{links}</div>
      </div>
    </div>
  )

}

export default PersonalCV;