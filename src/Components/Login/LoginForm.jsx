/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Link, useLocation, useNavigate,
} from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import AuthContext from '../../context/auth-context';
import createCheckoutSession from '../../utils/createCheckoutSession';

function LoginForm() {
  const pdtToBuy = useSelector((state) => state.baskets.basketProducts);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const url = useLocation();

  const [name, setName] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [emailLoginTouch, setEmailLoginTouch] = useState(false);
  const [passwordLoginTouch, setPasswordLoginTouch] = useState(false);

  const emailLoginIsValid = emailLogin.trim() !== '';
  const passwordLoginIsValid = passwordLogin.trim() !== '';
  const emailLoginCantBeSubmit = emailLoginTouch && !emailLoginIsValid;
  const passwordLoginCantBeSubmit = passwordLoginTouch && !passwordLoginIsValid;

  const emailChangeHandler = (event) => {
    setEmailLogin(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPasswordLogin(event.target.value);
  };
  const inputHandleBlur = (value) => {
    if (value === 'email') setEmailLoginTouch(true);
    if (value === 'password') setPasswordLoginTouch(true);
  };

  // function to verify the form validation
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEmailLoginTouch(true);
    setPasswordLoginTouch(true);

    // close guard
    if (!emailLoginCantBeSubmit) return;
    if (!passwordLoginCantBeSubmit) return;

    // reset state
    setEmailLogin('');
    setPasswordLogin('');
    setEmailLoginTouch(false);
    setPasswordLoginTouch(false);
    setName('');
  };

  const handleSignUp = async () => {
    createUserWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        const { user } = userCredential;
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        const { user } = userCredential;
        authCtx.login(user);
        createCheckoutSession(user.uid, pdtToBuy);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    setEmailLogin('');
    setPasswordLogin('');
    setEmailLoginTouch(false);
    setPasswordLoginTouch(false);
  }, [url]);

  return (
    <div className="p-36 flex flex-col items-center ">
      <div className="p-4 bp:p-10">
        <form className="flex flex-col gap-y-7 pb-10" onSubmit={formSubmitHandler}>
          <div className="flex flex-col gap-y-8">
            {url.pathname.includes('register') && (
              <div className="relative">
                <input type="text" placeholder="name" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} className="border-b py-1 w-80 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg placeholder:pl-2" autoComplete="off" />
                <label htmlFor="name" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all">Full Name</label>
              </div>
            )}
            <div className="relative">
              <input type="email" placeholder="email" value={emailLogin} name="email" id="email" onBlur={inputHandleBlur.bind(null, 'email')} onChange={emailChangeHandler} className={`border-b py-1 w-80 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0 placeholder:pl-2 ${emailLoginCantBeSubmit && 'bg-red-200 border-red-500'}`} autoComplete="off" />
              <label htmlFor="email" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all">Email</label>
              { emailLoginCantBeSubmit && <p className="text-xs text-red-500">email must not be empty</p>}
            </div>
            <div className="relative">
              <input placeholder="password" type="text" value={passwordLogin} name="password" id="password" onBlur={inputHandleBlur.bind(null, 'password')} onChange={passwordChangeHandler} className={`border-b py-1 w-80 focus:outline-none focus:border-orange-600 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0 placeholder:pl-2 ${passwordLoginCantBeSubmit && 'bg-red-200 border-red-500'}`} autoComplete="off" />
              <label htmlFor="password" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-orange-600 transition-all">Password</label>

              { passwordLogin !== '' && passwordLogin.length < 7 && <p className="text-xs text-green-500">password must have at least 7 caracters</p>}
              { passwordLoginCantBeSubmit && <p className="text-xs text-red-500">password must not be empty</p>}
            </div>
          </div>
          <button type="submit" className={`${url.pathname.includes('login') ? 'block' : 'hidden'} bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300 drop-shadow-lg cursor-pointer self-center`} onClick={handleSignIn}>Sign in</button>
          <button type="submit" className={`${url.pathname.includes('register') ? 'block' : 'hidden'} bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition ease-in-out duration-300 drop-shadow-lg cursor-pointer self-center`} onClick={handleSignUp}>Sign up</button>
        </form>
        {url.pathname.includes('login')
          ? <Link to="/register" className="sign-btn">Do not have an account? Create an account</Link>
          : <Link to="/login" className="sign-btn">Already have an account? Login</Link>}
      </div>
    </div>
  );
}

export default LoginForm;
