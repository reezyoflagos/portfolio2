import React from 'react'
import Nav from './components/nav/Nav'
import Body from './components/body/Body'
import About from './components/About/About'
import Programming from './components/programming/Programming'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <div>
      <Nav/>
      <Body/>
      <About/>
      <Programming/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
