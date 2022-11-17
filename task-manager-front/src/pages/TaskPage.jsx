import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/tasks.css';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Task from '../components/Task';
import Button from '../components/Button';

const TaskPage = () => {
  const { user_id } = useParams('user_id');

  return (
    <main className='taskpage'>
      <div className='tasks-title'>
        <div className='row gap'>
          <Button href='/tasks/'>New Task</Button>
          <Button href='/tasks/'>Profile</Button>
        </div>

        <div className='row'>
          <UserCircleIcon width={40} height={40} />
          <div className='user-name'>
            <span className='text-md'>{user_id}'s Tasks</span>
            <span className='text-sm'>User</span>
          </div>
        </div>
      </div>
      <div className='task-manager'>
        <div className='container-tasks'>
          <Task category={'Chores'} title='Take out the trash' />
        </div>
        <div className='section'>
          <span>Total tasks: </span>
          <span>Completed: </span>
          <div className='task-details'>
            <span className='title'>Details</span>
            <ul className='details'>
              <li>Creation date:</li>
              <li>Expiry date:</li>
              <li>Description:</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskPage;
