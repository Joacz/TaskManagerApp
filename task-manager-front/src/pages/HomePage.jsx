import React from 'react';
import Title from '../components/Title';
import Card from '../components/Card';
import ContainerBetween from '../components/ContainerBetween';
import manageImg from '../imgs/manage.svg';
import progressImg from '../imgs/progress.svg';
import aboutMeImg from '../imgs/aboutme.svg';
import notificationImg from '../imgs/notification.svg';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <main>
      <Nav />

      <div className='title-container'>
        <div className='text-container'>
          <Title>Taski</Title>
          <span>Make your tasks clearer</span>
        </div>
      </div>
      <ContainerBetween>
        <Card
          icon={manageImg}
          title='Manage'
          button='Create a task'
          content='Manage your tasks, add new ones, delete old ones, check them and receive notifications when they have expired!'
        />
        <div>
          <div className='divider' />
          <Card
            icon={progressImg}
            title='Track your progress'
            button='See your stats'
            content='Track how many tasks you have done, how many you did not, and your points! every task you do adds 5 points.'
          />
        </div>
        <Card
          icon={notificationImg}
          title='Get notified'
          button='Learn more'
          content='Get a notification if your task is not checked after some hours, and if the task was not done in the expiry period.'
        />
        <div>
          <div className='divider' />
          <Card
            icon={aboutMeImg}
            title='About me'
            button='Go to portfolio'
            content='I am a web developer from Argentina, currently working from home. I am self-taught and really interested in working on a team.'
          />
        </div>
      </ContainerBetween>
    </main>
  );
};

export default HomePage;
