import React from "react";
import PersonalCV from "./cv/PersonalCV";
import EducationCV from "./cv/EducationCV.jsx";
import ExperienceCV from "./cv/ExperienceCV";
import PropTypes from "prop-types";
import "./../../styles/cvSection.css";

function CvSection({ info }) {

  CvSection.PropTypes = {
    info: PropTypes.object.isRequired,
  }
  
  return(
    <div id="cvSection">
      <PersonalCV 
        name={info.personal.name}
        mail={info.personal.mail}
        tel={info.personal.tel}
        location={info.personal.location}
        links={info.personal.links}
      />
      <EducationCV
        schoolName={info.education.schoolName}
        degree={info.education.degree}
        location={info.education.location}
        date={info.education.date}
      />
      <ExperienceCV
        companyProject={info.experience.companyProject}
        role={info.experience.role}
        location={info.experience.location}
        date={info.experience.date}
        description={info.experience.description}
      />
    </div>
  )

}

export default CvSection;