/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
// @ts-nocheck
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import createCheckoutSession from '../../utils/createCheckoutSession';
import AuthContext from '../../context/auth-context';
import { showNotification } from '../../app/iuReducer';

function SubTotalCart() {
  const subTotal = useSelector((state) => state.baskets.subTotal);
  const pdtToBuy = useSelector((state) => state.baskets.basketProducts);
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();

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
    <div className="max-w-7xl m-auto flex flex-col gap-y-4 mb-16">
      <p className="font-semibold text-xl">
        Subtotal : $
        <span className=" text-2xl sm:text-3xl">
          {' '}
          {subTotal.toFixed(2)}
        </span>
      </p>
      <p className="">Taxes and shipping will calculate at checkout</p>
      <div className="flex flex-row gap-x-4">
        <Link to="/foods" className="btn-continue-shopping">
          Continue-Shopping
        </Link>
        <button onClick={handleCheckout} className={`btn-checkout ${subTotal === 0 ? 'cursor-not-allowed' : ''}`} disabled={subTotal === 0}>
          checkout
        </button>
      </div>
    </div>
  );
}

export default SubTotalCart;
