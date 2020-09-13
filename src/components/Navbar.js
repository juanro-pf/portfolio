import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../Context';

export const Navbar = () => {

  const {setShow, setOut} = useContext(Context);

  const handleClick= () => {
    setOut('sidebar animate__animated animate__fadeInLeft animate__faster');
    setShow('block');
  }

  return (
    <nav className= 'navbar'>
      <div className= 'navbar-section'>
        <i
          className= 'nav-icon fas fa-bars fa-lg'
          onClick= {handleClick}
        >
          
        </i>
        <Link
          className= 'nav-item nav-left'
          // exact
          to= '/portfolio'
        >
          Portfolio
        </Link>
      </div>
      <div className= 'navbar-section'>
        <NavLink 
          activeClassName="active"
          className="nav-item nav-right" 
          exact
          to="/aboutme"
        >
          About me
        </NavLink>
        <NavLink 
          activeClassName="active"
          className="nav-item nav-right" 
          exact
          to="/resume"
        >
          Resume
        </NavLink>
        <NavLink 
          activeClassName="active"
          className="nav-item nav-right" 
          exact
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink 
          activeClassName="active"
          className="nav-item nav-right" 
          exact
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
