import InfoSection from './components/infoSection/InfoSection';
import CvSection from './components/cvSection/CvSection';
import { useState } from 'react';
import './App.css'

function App() {

  const [info, setInfo] = useState({personal: null, education: null, experience: null})

  const handleInfoChange = () => {
    setInfo({})
  }

  return (
    <div id="app">
      <InfoSection handleInfoChange={handleInfoChange}/>
      <CvSection info={info}/>
    </div>
  )

}

export default App
