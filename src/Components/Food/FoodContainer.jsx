/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../Home/CartItem';

function FoodContainer({ indexOfFirstPost, indexOfLastPost, setToggleNotification }) {
  const products = useSelector(state => state.products.products);
  const filteredFoods = useSelector((state) => state.products.filteredFood);

  const currentProducts = filteredFoods.length > 0 ? filteredFoods : products;
  const currentItems = currentProducts.slice(indexOfFirstPost, indexOfLastPost);

  const displayCartItem = currentItems.map((product) => (
    <CartItem
      key={product.id}
      priceId={product.priceId}
      name={product.name}
      image={product.images[0]}
      category={product.category}
      id={product.id}
      quantity={product.quantity}
      price={product.price.unit_amount}
      description={product.description}
      setToggleNotification={setToggleNotification}
    />
  ));

  return (

    <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-full mb-16 px-4">
      {displayCartItem}
    </div>

  );
}

export default FoodContainer;
