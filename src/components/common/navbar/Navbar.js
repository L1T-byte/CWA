
import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/home" className="navbar-item">Home</a>
      <a href="/courses" className="navbar-item">Courses</a>
      <a href="/attendance" className="navbar-item">Attendance</a>
      <a href="/portofolio" className="navbar-item">Portofolio</a>
      <a href="/news" className="navbar-item">News</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;