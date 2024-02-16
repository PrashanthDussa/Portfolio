import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Intro from './Components/Intro'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ScrollToTopButton from './Components/ScrollToTop'

function App() {
  const [dark,setDark] = React.useState(false)
  const [introRendered, setIntroRendered] = React.useState(false)

  function setTheme(){
    setDark(!dark)
  }

  function introComplete(){
    setIntroRendered(true)
  }

  return (
    <div>
      <Navbar dark={dark} setTheme={setTheme}/>
      <Intro dark={dark} introComplete={introComplete}/>
      {introRendered && <About dark={dark}/>}
      {introRendered && <Skills dark={dark}/>}
      {introRendered && <Experience dark={dark}/>}
      {introRendered && <Projects dark={dark}/>}
      {introRendered && <Contact dark={dark}/>}
      {introRendered && <Footer dark={dark}/>}
      {introRendered && <ScrollToTopButton/>}
    </div>
  )
}

export default App;
