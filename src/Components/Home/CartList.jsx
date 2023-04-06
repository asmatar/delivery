// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../app/basketReducer';

function CartList({ setToggleNotification }) {
  const basketsPdt = useSelector((state) => state.baskets.basketProducts);

  const dispatch = useDispatch();
  const handleDeleteCart = (id, event) => {
    setToggleNotification(event.target.dataset.cta);
    dispatch(removeFromCart(id));
  };
  const handleAddToCard = (pdt, event) => {
    setToggleNotification(event.target.dataset.cta);
    dispatch(addToCart({
      ...pdt,
    }));
  };
  return (
    basketsPdt.map((pdt) => (
      <div key={pdt.id} className="flex flex-row justify-between items-center text-white mx-4 pr-2 first:mt-6 mt-2 bg-gray-700 rounded">
        <div className="flex flex-row gap-x-2 items-center h-14 w-4/5">
          <img src={pdt.image} alt="" className="h-14 w-1/3 object-center object-cover" />
          <div className="flex flex-col justify-between">
            <p className="text-sm capitalize flex-1">{`${pdt.title}...`}</p>
            <p className="text-sm">
              {' '}
              {pdt.price / 100}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <button type="button" data-cta="add" onClick={(event) => handleAddToCard(pdt, event)}>+</button>
          <p className="">{pdt.quantity}</p>
          <button type="button" data-cta="delete" onClick={handleDeleteCart.bind(null, pdt.id)}>-</button>
        </div>
      </div>
    ))
  );
}

export default CartList;
