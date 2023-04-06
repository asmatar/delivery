/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
// @ts-nocheck
import React, { useState } from 'react';

// the context that all component have access to
const AuthContext = React.createContext({
  user: null || JSON.parse(window.localStorage.getItem('user')),
  isLoggedIn: false,
  login: (userFiresbase) => {},
  logout: () => {},
});

// function to wrap the app, to change the context
export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null || JSON.parse(window.localStorage.getItem('user')));

  // login function
  const handleLogin = (userFiresbase) => {
    setUser(userFiresbase);
    setIsLoggedIn(true);
    window.localStorage.setItem('user', JSON.stringify(userFiresbase));
  };
  // logout function
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    window.localStorage.removeItem('user');
  };

  const contextvalue = {
    isLoggedIn,
    user,
    login: handleLogin,
    logout: handleLogout,
  };
  return <AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
