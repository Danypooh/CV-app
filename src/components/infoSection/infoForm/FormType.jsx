import React from "react";
import "./../../../styles/formType.css";
import PropTypes from "prop-types";

function FormType({ type, isOpen, onClick, handleInfoChange }) {
  
  FormType.propTypes = {
    type: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    handleInfoChange: PropTypes.func.isRequired,
  };
  
  return (
    <div className="sectionType">
      <button className="sectionBtn" onClick={onClick}>{type}</button>
    { (type === "Personal" && isOpen) &&
      <>        
        <form>
          <input type="text" name="name" id="name" placeholder="Name" onChange={handleInfoChange}/>
          <input type="text" name="city" id="city" placeholder="City" onChange={handleInfoChange}/>
          <input type="text" name="state" id="state" placeholder="State" onChange={handleInfoChange}/>
          <input type="text" name="mail" id="mail" placeholder="E-mail" onChange={handleInfoChange}/>
          <input type="text" name="linkedIn" id="linkedIn" placeholder="LinkedIn link" onChange={handleInfoChange}/>
          <input type="text" name="otherLink" id="otherLink" placeholder="Any relevant links?" onChange={handleInfoChange}/>
        </form>
      </>
    }
    { (type === "Education" && isOpen) &&
      <>
        <form>
          <input type="text" name="schoolName" id="schoolName" placeholder="School Name"/>
          <input type="text" name="degree" id="degree" placeholder="Degree"/>
          <input type="text" name="location" id="location" placeholder="Location" />
          <input type="date" name="startDate" id="startDate" placeholder="Start Date"/>
          <input type="date" name="endDate" id="endDate" placeholder="End Date"/>
        </form>
      </>
    }
    { (type === "Experience" && isOpen) &&
      <>
        <form>
          <input type="text" name="companyProject" id="companyProject" placeholder="Company/Project"/>
          <input type="text" name="role" id="role" placeholder="Role"/>
          <input type="text" name="location" id="location" placeholder="Location" />
          <input type="date" name="startDate" id="startDate" placeholder="Start Date"/>
          <input type="date" name="endDate" id="endDate" placeholder="End Date"/>
          <input type="text" name="description" id="description" placeholder="Description" />
        </form>
      </>
    }
    </div>
  );
    
}

export default FormType;