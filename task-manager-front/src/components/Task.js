import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Task = ({ title, category }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <div className='task'>
      <div className='task-content'>
        <span className='category'>{category}</span>
        <span className='title-task'>{title}</span>
      </div>
      <div className='checkbox'>
        <button onClick={() => handleCheck()} className='checkbox-button'>
          {check ? <XMarkIcon className='icon' width={20} /> : ''}
        </button>
      </div>
    </div>
  );
};

export default Task;
