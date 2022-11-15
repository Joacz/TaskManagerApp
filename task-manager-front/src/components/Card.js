import React from 'react';
import '../styles/card.css';
import Button from './Button';

const Card = ({ title, content, icon, button }) => {
  return (
    <div className='card'>
      <img src={icon} alt={`img: ${icon}`} className='card-img' />
      <div className='card-content'>
        <span className='title'>{title}</span>
        <p>{content}</p>
      </div>
      <Button>{button}</Button>
    </div>
  );
};

export default Card;
