import { useState } from "react";
import FormType from "./infoForm/FormType";
import "./../../styles/infoSection.css"

function InfoSection() {
  
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
      />
      <FormType 
        type="Education" isOpen={isOpen === "educationInfo"} 
        onClick={() => handleButtonClick("educationInfo")}
      />
      <FormType 
        type="Experience" isOpen={isOpen === "experienceInfo"} 
        onClick={() => handleButtonClick("experienceInfo")}
      />
   </div>
  );
    
}

export default InfoSection;