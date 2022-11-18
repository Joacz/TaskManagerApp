import React, { useState, useEffect } from 'react';
import '../styles/nav.css';
import Button from './Button';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Nav = () => {
  const [responsiveNav, setResponsiveNav] = useState(false);

  const getUserId = async () => {
    const response = await fetch(
      'http://localhost:8080/tasks/user/getsession',
      { method: 'GET' }
    );
    console.log(response.id);
    return response;
  };

  let id = getUserId();

  const handleNav = () => {
    const nav = document.getElementById('nav');

    if (responsiveNav) {
      nav.style = 'height:auto; width:100%;';
    } else {
      nav.style = 'height:100%; width:80%';
    }
    setResponsiveNav(!responsiveNav);
  };

  return (
    <nav className='nav' id='nav'>
      <button onClick={() => handleNav()} className='nav-btn'>
        <Bars3Icon width={40} className='nav-icon' />
      </button>
      <div className='def-nav'>
        <ul className='nav-ul'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href={`/tasks/${id}`}>Tasks</a>
          </li>
        </ul>
        <div className='nav-buttons'>
          <Button href='/login'>Login</Button>
          <Button href='/register'>Register</Button>
        </div>
      </div>
      {responsiveNav ? (
        <div className='responsive-nav'>
          <ul className='nav-ul responsive-ul'>
            <li>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li>
              <a className='nav-link' href='/about'>
                About
              </a>
            </li>
            <li>
              <a className='nav-link' href='/tasks/1'>
                Tasks
              </a>
            </li>
          </ul>
          <div className='nav-buttons'>
            <Button href='/login'>Login</Button>
            <Button href='/register'>Register</Button>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Nav;
