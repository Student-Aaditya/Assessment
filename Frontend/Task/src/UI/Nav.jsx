import React from 'react'
import './Card.css'
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="Nav">
       <NavLink to="/">Leader</NavLink>
      <div className="Auth">
      <NavLink to="/Sign">Sign</NavLink>
      <NavLink to="/Login">Login</NavLink>
      </div>
    </nav>
    </>
  )
}

export default Nav
