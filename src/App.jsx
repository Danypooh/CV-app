import React, { useState } from 'react';
import InfoSection from './components/infoSection/InfoSection';
import CvSection from './components/cvSection/CvSection';
import './App.css'

function App() {

  const [info, setInfo] = useState(infoObj)

  const handleInfoChange = (e) => {
    const { key } = e.target.dataset;

    setInfo({...info, [key]: e.target.value });
  }

  return (
    <div id="app">
      <InfoSection handleInfoChange={handleInfoChange}/>
      <CvSection info={info}/>
    </div>
  )

}

const infoObj = {
  personal: {
    name: "Mario Bros",
    mail: "mariobrothers@gmail.com",
    tel: "2222459422",
    location: "New York",
    links: "mariobros@github.com"
  },
  education: {
    schoolName: "Harvard",
    degree: "Engineer",
    location: "Unite States",
    date: "24/07/2023"
  },
  experience: {
    companyProject: "Mindset",
    role: "developer",
    description: "Front-End dev makin the crazyiest wuupididao pages",
    location: "Mexico",
    date: "Today",
  }
}

export default App
