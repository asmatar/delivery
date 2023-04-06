/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
// @ts-nocheck
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import delivery from '../../Assets/Images/delivery.svg';
import createCheckoutSession from '../../utils/createCheckoutSession';
import AuthContext from '../../context/auth-context';

function Intro() {
  const pdtToBuy = useSelector((state) => state.baskets.basketProducts);
  const authCtx = useContext(AuthContext);
  // function to go to stripe payment
  const handleCheckout = () => {
    if (authCtx.user) {
      createCheckoutSession(authCtx.user.uid, pdtToBuy);
    }
  };

  return (
    <div className="flex flex-row  items-start justify-between max-w-screen-2xl m-auto my-20 gap-x-5 lg:gap-x-20 px-4">
      <div className="flex flex-col gap-y-6">
        <p className="font-semibold text-xl">Easy way to make an order</p>
        <h2 className="text-3xl sm:text-4xl lg:5xl">
          The fastest Delivery in
          <span className=" font-bold bg-clip-text text-transparent bg-yellow-gradient"> Your City</span>
        </h2>
        <p className="text-stone-500 leading-8">Take time to browse our interactive online menu and place the order when ready. It takes us about a minute to confirm your order and give an individual time.</p>
        <div className="flex items-center gap-x-8">
          <button onClick={handleCheckout} className="btn-order-now bg-green text-center text-white w-[130px] font-bold py-2 px-4 rounded ease-in-out drop-shadow-lg">
            Order now
          </button>
          <Link to="/foods" className="btn-see-all-food text-green font-semibold py-2 px-4 drop-shadow-lg border border-green rounded ease-in-out">
            See all foods
          </Link>
        </div>
        <div className="flex items-center gap-x-8 mt-4">
          <p className="flex items-center gap-x-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#01A082" />
              <path d="M11.8931 6.32084C12.0788 6.21774 12.2876 6.16364 12.5 6.16364C12.7124 6.16364 12.9212 6.21774 13.1069 6.32084L17.8038 8.92959C17.9011 8.98374 17.9823 9.06294 18.0387 9.15898C18.0952 9.25502 18.125 9.36442 18.125 9.47584V14.6227C18.1249 14.8456 18.0653 15.0645 17.9522 15.2565C17.8391 15.4486 17.6767 15.607 17.4819 15.7152L13.1069 18.1465C12.9212 18.2496 12.7124 18.3037 12.5 18.3037C12.2876 18.3037 12.0788 18.2496 11.8931 18.1465L7.51812 15.7152C7.32335 15.607 7.16102 15.4488 7.04795 15.2568C6.93487 15.0648 6.87516 14.8461 6.875 14.6233V9.47584C6.875 9.36442 6.90478 9.25502 6.96126 9.15898C7.01774 9.06294 7.09887 8.98374 7.19625 8.92959L11.8937 6.32084H11.8931Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.875 9.10834L12.5 12.2333M12.5 12.2333L18.125 9.10834M12.5 12.2333V18.1708" stroke="white" strokeWidth="1.25" strokeLinejoin="round" />
              <path d="M9.6875 10.6708L15.3125 7.54584M8.75 12.4383L10.625 13.4833" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Low shipping charge
          </p>
          <p className="flex items-center gap-x-2">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#01A082" />
              <path d="M12.6868 17.9358C12.6868 17.9358 17.3735 16.3735 17.3735 12.4679" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.3735 12.4679V7.78113C17.3735 7.78113 15.8113 7 12.6868 7" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12.6868 17.9358C12.6868 17.9358 8 16.3735 8 12.4679" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12.4679V7.78113C8 7.78113 9.56226 7 12.6868 7" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.8113 9.34338C12.6868 11.6868 11.9056 14.8113 11.9056 14.8113C11.9056 14.8113 11.1245 13.8789 10.3434 13.249" stroke="white" strokeWidth="0.9375" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            100% secure checkout
          </p>
        </div>
      </div>
      <div className="hidden sm:flex">
        <img src={delivery} alt="hero" className="aspect-auto w-[150vw] xmd:w-[90vw] xl:!w-[700px]" />
      </div>
    </div>
  );
}

export default Intro;
