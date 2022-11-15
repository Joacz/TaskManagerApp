import React from 'react';
import '../styles/button.css';

const Button = (props) => {
  return (
    <div className='container-btn'>
      <button onClick={props.onClick} className='button animated'>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
