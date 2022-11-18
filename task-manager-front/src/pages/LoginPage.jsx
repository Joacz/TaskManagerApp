import React from 'react';
import '../styles/login.css';
import ButtonSubmit from '../components/ButtonSubmit';
import Title from '../components/Title';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   const formData = new FormData();
  //   formData.append('username', data.username);
  //   formData.append('password', data.password);

  //   fetch('http://localhost:8080/login', {
  //     method: 'POST',
  //     mode:'no-cors',
  //     body: formData,
  //   });

  // };

  return (
    <main className='login-main'>
      <div className='vertical-center'>
        <Title>LOGIN</Title>
        <div className='form-login-container'>
          <form
            className='form-login'
            method='post'
            action='http://localhost:8080/login'
          >
            <div className='input-container'>
              <span>Username</span>
              <input
                name='username'
                type='text'
                className='input'
                id='username'
              />
            </div>
            <div className='input-container'>
              <span>Password</span>
              <input
                name='password'
                type='text'
                className='input'
                id='password'
              />
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
