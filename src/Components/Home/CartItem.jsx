/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
// @ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../app/basketReducer';

function CartItem({ name, image, category, id, quantity, description, setToggleNotification, price, priceId }) {
  const dispatch = useDispatch();

  const handleAddToCard = (event) => {
    setToggleNotification(event.target.dataset.cta);
    dispatch(addToCart({
      id, price, name, category, image, quantity, priceId,
    }));
  };

  return (
    <div className="py-4 cursor-pointer group">
      <div className="flex flex-col max-w-md bg-white shadow-lg overflow-hidden rounded">
        <div className=" overflow-hidden">
          <Link to={`/foods/${id}`}>
            <img src={image} alt="product" className="2xl:h-[11vw] xl:h-[15vw] lg:h-[20vw] w-full object-cover object-center group-hover:scale-105 transition-all duration-200 ease-in-out" />
          </Link>
        </div>
        <div className="w-full p-4">
          <h1 className="text-gray-900 font-bold text-xl capitalize">{name}</h1>
          <p className="mt-2 text-gray-600 text-sm w-full">
            {description}
            {' '}
            ...
          </p>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              <span className="">
                $
              </span>
              {' '}
              {price / 100}
            </h1>
            <button className=" add-to-cart" data-cta="add" onClick={handleAddToCard}>Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
