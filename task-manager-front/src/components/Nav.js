import React from 'react';
import '../styles/nav.css';
import Button from './Button'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/tasks/1'>Tasks</a>
        </li>
      </ul>
      <div className='nav-buttons'>
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </nav>
  );
};

export default Nav;
