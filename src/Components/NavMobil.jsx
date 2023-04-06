/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartList from './Home/CartList';
import { removeAllCart } from '../app/basketReducer';
import createCheckoutSession from '../utils/createCheckoutSession';
import AuthContext from '../context/auth-context';
import { showNotification } from '../app/iuReducer';

function NavMobil({ openNav, closeNav, setToggleNotification }) {
  const subTotal = useSelector((state) => state.baskets.subTotal);
  const authCtx = useContext(AuthContext);
  const pdtToBuy = useSelector((state) => state.baskets.basketProducts);

  const Total = subTotal;
  // open and close navbar mobile
  const openNavClass = openNav ? 'flex w-1/5 min-w-[375px]' : 'w-0';

  const dispatch = useDispatch();
  // function to reset the state, delete all product in the basket
  const handleDeleteAll = () => {
    dispatch(removeAllCart());
  };

  // function to go to stripe payment
  const handleCheckout = () => {
    if (authCtx.user) {
      dispatch(
        showNotification({
          status: 'stripe',
          title: 'Wait for Stripe...',
          message: 'Wait for Stripe...!',
        }),
      );
      createCheckoutSession(authCtx.user.uid, pdtToBuy);
    }
  };

  return (
    <div className={`fixed flex-col  justify-between z-50 top-0 right-0 h-full transition-all duration-200 ease-out ${openNavClass}`}>
      <div className="bg-white flex flex-row items-center justify-between py-9 px-4">
        <div className="cursor-pointer" onClick={closeNav}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M32.8125 17.5C32.8125 17.2099 32.6973 16.9317 32.4922 16.7266C32.287 16.5215 32.0088 16.4063 31.7188 16.4063H5.92156L12.8056 9.52438C12.9073 9.42269 12.988 9.30196 13.043 9.1691C13.0981 9.03623 13.1264 8.89382 13.1264 8.75001C13.1264 8.60619 13.0981 8.46379 13.043 8.33092C12.988 8.19805 12.9073 8.07733 12.8056 7.97563C12.7039 7.87394 12.5832 7.79327 12.4503 7.73824C12.3175 7.6832 12.1751 7.65488 12.0313 7.65488C11.8874 7.65488 11.745 7.6832 11.6122 7.73824C11.4793 7.79327 11.3586 7.87394 11.2569 7.97563L2.50688 16.7256C2.40502 16.8272 2.32421 16.9479 2.26907 17.0808C2.21393 17.2137 2.18555 17.3561 2.18555 17.5C2.18555 17.6439 2.21393 17.7863 2.26907 17.9192C2.32421 18.0521 2.40502 18.1728 2.50688 18.2744L11.2569 27.0244C11.3586 27.1261 11.4793 27.2067 11.6122 27.2618C11.745 27.3168 11.8874 27.3451 12.0313 27.3451C12.1751 27.3451 12.3175 27.3168 12.4503 27.2618C12.5832 27.2067 12.7039 27.1261 12.8056 27.0244C12.9073 26.9227 12.988 26.802 13.043 26.6691C13.0981 26.5362 13.1264 26.3938 13.1264 26.25C13.1264 26.1062 13.0981 25.9638 13.043 25.8309C12.988 25.6981 12.9073 25.5773 12.8056 25.4756L5.92156 18.5938H31.7188C32.0088 18.5938 32.287 18.4785 32.4922 18.2734C32.6973 18.0683 32.8125 17.7901 32.8125 17.5Z" fill="black" />
          </svg>
        </div>
        <p className="font-semibold text-xl text-gray-700">Cart</p>
        <button type="button" className="add-to-cart !py-2 !px-4 focus-within:shadow-lg active:scale-90 transition duration-300" onClick={handleDeleteAll}>clear</button>
      </div>
      <div className="rounded bg-gray-800 h-full overflow-y-scroll">
        <CartList setToggleNotification={setToggleNotification} />
      </div>
      <div className="bg-gray-700 rounded p-6 flex flex-col gap-y-5">
        <div className="flex flex-row justify-between text-lg">
          <p className="text-gray-400">Sub Total</p>
          <span className="text-gray-400">
            $
            {' '}
            {subTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center text-lg">
          <p className="text-gray-400">Delivery</p>
          <span className="text-gray-400">
            $ 0
          </span>
        </div>
        <div className="flex flex-row justify-between items-center text-xl font-semibold">
          <p className="text-white">Total</p>
          <span className="text-white">
            $
            {' '}
            {+Total.toFixed(2)}
          </span>
        </div>
        <button onClick={handleCheckout} className={`add-to-cart drop-shadow-lg ${subTotal === 0 ? 'cursor-not-allowed' : ''}`} disabled={subTotal === 0}>Check Out</button>
      </div>
    </div>
  );
}

export default NavMobil;
