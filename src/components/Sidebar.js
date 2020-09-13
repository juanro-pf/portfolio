import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

export const Sidebar = () => {

  const {show, setShow, out} = useContext(Context);

  const handleClick= () => {
    setShow('none');
  };

  return (
    <div
      className= {`${out}`}
      style= {{ display: `${show}` }}
    >
      <Link
        className='side-item'
        onClick= {handleClick}
        to= '/portfolio'
      >
        <p className= 'side-first'>Portfolio</p>
      </Link>
      <Link
        className='side-item'
        onClick= {handleClick}
        to= '/aboutme'
      >
        <p>About Me</p>
      </Link>
      <Link
        className='side-item'
        onClick= {handleClick}
        to= '/resume'
      >
        <p>Resume</p>
      </Link>
      <Link
        className='side-item'
        onClick= {handleClick}
        to= '/projects'
      >
        <p>Projects</p>
      </Link>
      <Link
        className='side-item'
        onClick= {handleClick}
        to= '/contact'
      >
        <p>Contact</p>
      </Link>
    </div>
  );
};
