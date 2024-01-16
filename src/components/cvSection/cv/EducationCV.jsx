import React from "react";
import PropTypes from "prop-types";

function EducationCV({ schoolName, degree, location, date }) {

  EducationCV.propTypes = {
    schoolName: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  
  return(
    <div id="educationCV">
      <div>
        <h3>Education</h3>
      </div>
      <div className="educationInfo">
        <div className="institutionAndGrade">
          <div className="schoolName">{schoolName}</div>
          <div className="degree">{degree}</div>
        </div>
        <div className="timeAndPlace">
          <div className="location">{location}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  )

}

export default EducationCV;