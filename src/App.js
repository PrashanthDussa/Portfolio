import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'

function App() {
  const [dark,setDark] = React.useState(false)

  function setTheme(){
    setDark(!dark)
  }
  return (
    <div>
      <Navbar dark={dark} setTheme={setTheme}/>
      <Intro dark={dark}/>
    </div>
  )
}

export default App;
