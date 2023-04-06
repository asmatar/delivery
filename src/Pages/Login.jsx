// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import BannerFood from '../Components/UI/BannerFood';
import LoginForm from '../Components/Login/LoginForm';

function Login() {
  const url = useLocation();
  return (
    <div className="">
      <BannerFood title={`${url.pathname.includes('login') ? 'Login' : 'Register'}`} />
      <LoginForm />
    </div>
  );
}

export default Login;
