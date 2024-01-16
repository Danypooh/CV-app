import React, { useState } from "react";
import PropTypes from "prop-types";
import FormType from "./infoForm/FormType";
import "./../../styles/infoSection.css"

function InfoSection(handleInfoChange) {

  InfoSection.propTypes = {
    handleInfoChange: PropTypes.func.isRequired,
  };
  
  const [isOpen, setIsOpen] = useState(null);

  const handleButtonClick = (button) => {
    if (isOpen === button) {
      setIsOpen(null);
    } else {
      setIsOpen(button);
    }
  }

  return (
   <div id="infoSection">
      <FormType 
        type="Personal" isOpen={isOpen === "personalInfo"} 
        onClick={() => handleButtonClick("personalInfo")}
        handleInfoChange={handleInfoChange}
      />
      <FormType 
        type="Education" isOpen={isOpen === "educationInfo"} 
        onClick={() => handleButtonClick("educationInfo")}
        handleInfoChange={handleInfoChange}
      />
      <FormType 
        type="Experience" isOpen={isOpen === "experienceInfo"} 
        onClick={() => handleButtonClick("experienceInfo")}
        handleInfoChange={handleInfoChange}
      />
   </div>
  );
    
}

export default InfoSection;