import React from 'react'
import './main.css'

const Nav = () => {
  return (
    <div className='container'>
      <nav className='header'>
        <div className='pics'>
            <img src='./images/degenius.png' alt=''/>
        </div>
        <div className='first'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Programming</li>
                <li>Services</li>
                <li>contact</li>

            </ul>

        </div>
      </nav>
    </div>
  )
}

export default Nav
