import React from 'react';
import '../styles/about.css';
import myselfImg from '../imgs/me.jpeg';
import Nav from '../components/Nav';

const AboutPage = () => {

  const getUserTasks = async() =>{
    const response = await fetch();
  }

  const spanStyle = {
    'font-size': '.8em',
    'padding-bottom': '1em',
    color: 'var(--primary-text-secondary)',
  };

  const aStyle = {
    color: '#fff',
  };

  const aClassic = {
    color: '#7f7fff',
  };

  const projectListStyle = {
    'font-size': '.8em',
  };

  return (
    <main className='about-container'>
      <div className='back-container'>
        <a href='/'>{'<- back'}</a>
      </div>{' '}
      <div className='title-img-container'>
        <img className='myself-img' src={myselfImg} alt='' />
        <span className='title-about title'>Joaquín Gómez</span>
      </div>{' '}
      <div className='meta'>
        <div className='img-container'>
          <div className='about-data'>
            {' '}
            <p>
              <strong>Phone: </strong>+54 342 4680 690
            </p>
            <p>
              <strong>Email:</strong> joagomez2007@gmail.com
            </p>
            <p>
              <strong>Birth date:</strong> 09/23/2007
            </p>
            <p>
              <strong>City</strong> Coronda, Santa Fe, Argentina
            </p>
            <p>
              <strong>Postal code: </strong>2240
            </p>
          </div>
          <div className='projects'>
            <p>Projects:</p>
            <ul style={projectListStyle}>
              <li>
                Web design #1:{' '}
                <a
                  style={aClassic}
                  href='https://joagomez-webdesign-1.netlify.app//'
                >
                  https://joagomez-webdesign-1.netlify.app//
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='about-text'>
          <span style={spanStyle}>
            A bit of a presentation, you can find more information about me in
            my{' '}
            <a href='/' style={aStyle}>
              portfolio
            </a>
          </span>
          <article className='article'>
            <section className='presentation'>
              <span className='title'>About Me</span>
              <p>
                I reside in Argentina, Santa Fe, in a small city called Coronda.
              </p>
              <p>
                My name is Joaquín Gómez, I started developing in 2021. I'm
                self-taught. I'm currently in high school and planning to study
                in the{' '}
                <a href='https://www.unl.edu.ar/'>
                  <i>Universidad Nacional del Litoral</i>
                </a>
              </p>
              <h2 className='title'>Abilities</h2>
              <p>
                My knowledge is in the Web Development branch. Currently I'm
                studying these technologies:
                <ul>
                  <li>Java, Spring Framework</li>
                  <li>MySQL</li>
                  <li>Javascript, React</li>
                  <li>CSS, HTML, TailwindCSS</li>
                  <li>Github</li>
                </ul>
              </p>
              <p>
                Currently, I can create full web applications, deploy them on
                platforms like <i>Netlify</i>.
              </p>
              <p>
                Per example: this application was made with ReactJS, using
                Spring Boot in the back-end with a REST API.
              </p>
              <h2 className='title'>Languages</h2>
              <p>
                My native language is Spanish, but a have a advanced level of
                english to read and write, and a medium level of english to
                speak and comprehend.
              </p>
              <strong>Contact information:</strong>
              <p>
                You can contact me via Discord: <mark>Joaquin#6427</mark>
              </p>
              <p>
                Or with my personal email: <mark>joagomez2007@gmail.com</mark>
              </p>
              <div className='projects-responsive'>
                <p>Projects:</p>
                <ul style={projectListStyle}>
                  <li>
                    Web design #1:{' '}
                    <a
                      style={aClassic}
                      href='https://joagomez-webdesign-1.netlify.app//'
                    >
                      https://joagomez-webdesign-1.netlify.app//
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
