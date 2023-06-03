import { useState } from 'react'
import Navbar from "./Navbar"
import Info from "./info.jsx"
import './App.css'

function App() {
  const [switchState, setSwitchState] = useState();
    
  function trueOrFalse(){
      setSwitchState(prevState => !prevState)
  }


return (
    <div className="container">
        <Navbar darkMode={switchState} toggleDarkMode={trueOrFalse}/>
        <Info darkMode={switchState}/>
    </div>
)
}

export default App
