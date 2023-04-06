/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import AuthContext from '../../context/auth-context';
import log from '../../Assets/Images/logo1.svg';
import cook from '../../Assets/Images/cook.svg';
import basket from '../../Assets/Images/basket.svg';
import NavMobil from '../NavMobil';

function Header({ setToggleNotification }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [navFixed, setNavFixed] = useState(true);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const totalQtt = useSelector((state) => state.baskets.totalQuantity);
  const url = useLocation();
  // custom class for navbar
  const genericHamburgerLine = 'h-8 w-8 my-1 rounded-full bg-green transition ease transform duration-300';
  // toggle navbar movil mode
  const handleNavbar = () => {
    setOpenNav(() => (!openNav));
  };

  // hearder fixed position
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? setNavFixed(false) : setNavFixed(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);
  // end header fixed position

  // logout function
  const handleLogout = () => {
    signOut((auth)).then(() => {
      authCtx.logout();
      navigate('/login');
    }).catch((error) => {
      console.log('err', error);
    });
  };
  useEffect(() => {
    // runs on location, i.e. route, change
    setIsOpen(false);
  }, [url]);
  return (
    <>
      <nav className={`sm:py-4 py-2 sm:bg-transparent bg-[length:500%] animate-bgAnimation bg-yellow-orange-gradient top-0 left-0 right-0 z-40  ${navFixed ? 'absolute ' : 'fixed animate-fadeInUp sm:bg-white'} ${url.pathname.includes('foods') || url.pathname.includes('cart') ? 'sm:bg-none' : ''}`}>
        <div className="flex flex-row relative justify-between items-center max-w-screen-2xl m-auto px-4">
          <NavLink to="/home" className="animate-downwards flex flex-row items-center gap-x-2">
            <img src={cook} alt="logo " className="w-12 hidden sm:flex" />
            <img src={log} alt="logo" className="w-16" />
          </NavLink>
          <div className="flex relative">
            <button
              className="flex flex-col h-9 w-[55px] rounded justify-center items-center group sm:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? 'rotate-45 translate-y-[12px] opacity-100 group-hover:opacity-100'
                    : 'opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? 'opacity-0' : 'opacity-100 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? '-rotate-45 -translate-y-[12px] opacity-100 group-hover:opacity-100'
                    : 'opacity-100 group-hover:opacity-100'
                }`}
              />
            </button>
            <div className="relative sm:hidden flex " onClick={handleNavbar}>
              <img src={basket} alt="logo" className="w-8 cursor-pointer" />
              <div className="absolute -top-1 -right-2 p-0.5 w-5 text-center rounded-full bg-white text-xs text-gray-600">{totalQtt}</div>
            </div>
          </div>
          <ul className={`flex sm:flex-row overflow-hidden flex-col pr-8 rounded gap-x-6 md:gap-x-10 items-center text-white absolute top-14 right-0 sm:relative sm:top-0 gap-y-6 bg-white sm:bg-transparent ${!isOpen ? 'hidden sm:flex' : 'flex'}`}>
            <NavLink to="/home" className={`home-links uppercase block hover:rotate-x-90 py-2 animate-upwards relative link-effect ${(navFixed === false || (url.pathname.includes('contact')) || url.pathname.includes('')) ? ' ' : ''}`} data-text="bef">Home</NavLink>
            <NavLink to="/foods" className={`home-links uppercase animate-downwards ${(navFixed === false || url.pathname.includes('contact') || url.pathname.includes('')) ? '' : ''}`} data-text="Foods">Foods</NavLink>
            <NavLink to="/cart" className={`home-links uppercase animate-upwards ${(navFixed === false || (url.pathname.includes('contact') || url.pathname.includes(''))) ? '' : ''}`} data-text="Cart">Cart</NavLink>
            <NavLink to="/contact" data-text="Contact" className={`animate-downwards home-links uppercase ${(navFixed === false || (url.pathname.includes('contact') || url.pathname.includes(''))) ? '' : ''}`}>Contact</NavLink>
            <div className="relative hidden sm:flex animate-upwards" onClick={handleNavbar}>
              <img src={basket} alt="logo" className="w-[30px] cursor-pointer" />
              <div className="absolute -top-1 -right-2 p-0.5 w-5 text-center rounded-full bg-white text-xs text-gray-600">{totalQtt}</div>
            </div>
            <div className="relative group animate-downwards">
              {
                authCtx.user === null
                  ? (
                    <Link to="/login">
                      <button className="log-btn log-active">Login</button>
                    </Link>
                  )
                  : <button className="log-btn " onClick={handleLogout}>Logout</button>
              }
            </div>
          </ul>
        </div>
      </nav>
      {/*  </div> */}
      <NavMobil openNav={openNav} closeNav={handleNavbar} setToggleNotification={setToggleNotification} />
    </>
  );
}

export default Header;
