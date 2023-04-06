/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
// @ts-nocheck
import React, {
  useEffect, useState, useContext, Suspense, lazy,
} from 'react';
import './App.css';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
/* import Home from './Pages/Home';
import Foods from './Pages/Foods';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login'; */
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
// import FoodDetail from './Pages/FoodDetail';

import Notification from './Components/UI/Notification';
import Badge from './Components/UI/Badge';
import AuthContext from './context/auth-context';
/* lazy */

const Home = lazy(() => import('./Pages/Home'));
const Foods = lazy(() => import('./Pages/Foods'));
const Contact = lazy(() => import('./Pages/Contact'));
const Cart = lazy(() => import('./Pages/Cart'));
const Login = lazy(() => import('./Pages/Login'));
const FoodDetail = lazy(() => import('./Pages/FoodDetail'));

function App() {
  const notification = useSelector((state) => state.iu.notification);
  const basketProducts = useSelector((state) => state.baskets.basketProducts);
  const totalQuantity = useSelector((state) => state.baskets.totalQuantity);
  const subTotal = useSelector((state) => state.baskets.subTotal);
  const [badgeToggle, setBadgeToggle] = useState(true);
  const toggleClass = 'opacity-0';
  let timer;
  const url = useLocation();
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    window.localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
    window.localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    window.localStorage.setItem('subTotal', JSON.stringify(subTotal));
  }, [basketProducts, totalQuantity, subTotal]);

  useEffect(() => {
    if (notification && notification.status === 'success') {
      timer = setTimeout(() => {
        const notif = document.getElementById('notif');
        notif.classList.remove('opacity-100');
        notif.classList.add(toggleClass);
      }, 500);
    }
    if (notification && notification.status === 'stripe') {
      const notif = document.getElementById('notif');
      notif.classList.add('opacity-100');
      notif.classList.add('visible');
      timer = setTimeout(() => {
        notif.classList.remove('opacity-100');
        notif.classList.add(toggleClass);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [notification, toggleClass]);

  const setToggleNotification = (dataset) => {
    const toggleBadgeColor = document.getElementById('toggleBadgeColor');
    const toggleBadge = document.getElementById('toggleBadge');
    if (dataset === 'delete') {
      setBadgeToggle(false);
      toggleBadgeColor.classList.add('bg-yellow');
      toggleBadgeColor.classList.remove('bg-green');
    } else {
      setBadgeToggle(true);
      toggleBadgeColor.classList.add('bg-green');
      toggleBadgeColor.classList.remove('bg-yellow');
    }

    toggleBadge.classList.remove('opacity-0');
    toggleBadge.classList.add('opacity-100');
    setTimeout(() => {
      toggleBadge.classList.remove('opacity-100');
      toggleBadge.classList.add('opacity-0');
    }, 1000);
  };

  return (
    <>
      <Badge badgeToggle={badgeToggle} />
      <Header setToggleNotification={setToggleNotification} />
      <Suspense fallback={<div className="z-30 flex items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!authCtx.user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!authCtx.user ? <Login /> : <Navigate to="/" />} />
          <Route path="/foods" element={<Foods setToggleNotification={setToggleNotification} />} />
          <Route path="/foods/:id" element={<FoodDetail setToggleNotification={setToggleNotification} />} />
          <Route path="/cart" element={<Cart setToggleNotification={setToggleNotification} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
        />
      )}
      { url.pathname !== '/contact' && <Footer />}
    </>
  );
}

export default App;
