import React from 'react';
import CartTable from '../Components/Cart/CartTable';
import SubTotalCart from '../Components/Cart/SubTotalCart';
import BannerFood from '../Components/UI/BannerFood';

function Cart({ setToggleNotification }) {
  return (
    <>
      <BannerFood title="Your Cart" />
      <div className="mx-4 md:mt-0 mt-16">
        <CartTable setToggleNotification={setToggleNotification} />
        <SubTotalCart />
      </div>
    </>
  );
}

export default Cart;
