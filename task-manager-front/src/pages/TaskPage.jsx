import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/tasks.css';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Task from '../components/Task';

const TaskPage = () => {
  const { user_id } = useParams('user_id');

  return (
    <main className='taskpage'>
      <div className='tasks-title'>
        <UserCircleIcon width={40} height={40} />
        <div className='user-name'>
          <span className='text-md'>{user_id} Tasks</span>
          <span className='text-sm'>User</span>
        </div>
      </div>
      <div className='container-tasks'>
        <Task category={"Chores"} title='Take out the trash' />
      </div>
    </main>
  );
};

export default TaskPage;
