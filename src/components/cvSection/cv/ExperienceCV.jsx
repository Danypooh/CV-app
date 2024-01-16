import React from "react";
import PropTypes from "prop-types";

function ExperienceCV({ companyProject, role, description, location, date }) {

  ExperienceCV.propTypes = {
    companyProject: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
  
  return(
    <div id="experienceCV">
      <div>
        <h3>Experience</h3>
      </div>
      <div className="experienceInfo">
        <div className="institutionAndGrade">
          <div className="companyProject">{companyProject}</div>
          <div className="role">{role}</div>
          <div className="description">{description}</div>
        </div>
        <div className="timeAndPlace">
          <div className="location">{location}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </div>
  )

}

export default ExperienceCV;