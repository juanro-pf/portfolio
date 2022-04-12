import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate= useNavigate();

  return (
    <div className='navbar'>
      <div className='navbar__section navbar__section--left'>
        <p className='navbar__item hide' onClick={() => navigate('/')}><i className='navbar__item fas fa-bars'/>Portfolio</p>
        <p className='navbar__item navbar__item--hidden' onClick={() => navigate('/')}><i className='navbar__item fas fa-bars'/></p>
        {/* <i className='navbar__item fas fa-bars' onClick={() => navigate('/')}/> */}
        {/* <Link to="/about">Portfolio</Link> */}
        {/* <p className='navbar__item' onClick={() => navigate('/')}>Portfolio</p> */}
      </div>
      <div className='navbar__section navbar__section--right'>
        {/* <p className='navbar__item' onClick={() => navigate('/about-me')}>About me</p> */}
        <p className='navbar__item navbar__item--right' onClick={() => navigate('/resume')}>Resume</p>
        <p className='navbar__item navbar__item--right' onClick={() => navigate('/projects')}>Projects</p>
        {/* <p className='navbar__item' onClick={() => navigate('/contact')}>Contact</p> */}
        {/* <Link to="/about-me">About me</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> */}
      </div>
    </div>
  )
}

export default Navbar