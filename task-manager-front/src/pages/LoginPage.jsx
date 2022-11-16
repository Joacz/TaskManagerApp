import { Container } from '@mui/system';
import React from 'react';
import '../styles/login.css';
import ButtonSubmit from '../components/ButtonSubmit';
import Title from '../components/Title';
const LoginPage = () => {
  return (
    <main className='login-main'>
      <div className='vertical-center'>
        <Title>LOGIN</Title>
        <div className='form-login-container'>
          <form className='form-login' action='/'>
            <div className='input-container'>
              <span>Username</span>
              <input type='text' className='input' id='username' />
            </div>
            <div className='input-container'>
              <span>Password</span>
              <input type='text' className='input' id='password' />
            </div>
            <div className='button-login-container'>
              <ButtonSubmit>Login</ButtonSubmit>
            </div>
            <p className='register-link-text'>
              Don't have an account?{' '}
              <a className='register-link' href='/register'>
                create one.
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
