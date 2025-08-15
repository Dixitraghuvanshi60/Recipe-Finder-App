import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div id='logo'>
        <img src="/diet.png" alt="logo" width={50} />
      <h2>Recipe Finder App</h2>
      </div>
      <Link id='home' to={"/"}>

        Home</Link>
    </nav>
  )
}

export default Navbar