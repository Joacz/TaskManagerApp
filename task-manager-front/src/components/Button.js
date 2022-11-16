import React from 'react';
import '../styles/button.css';

const Button = (props) => {
  return (
    <div className='container-btn'>
      <a href={props.href} className='button animated'>
        {props.children}
      </a>
    </div>
  );
};

export default Button;
