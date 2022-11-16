import React from 'react';
import '../styles/button.css';

const ButtonSubmit = (props) => {
  return (
    <div className='container-btn container-btn-submit'>
      <button type='submit' className='button button-submit animated'>
        {props.children}
      </button>
    </div>
  );
};

export default ButtonSubmit;
