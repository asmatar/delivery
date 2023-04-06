// @ts-nocheck
import React from 'react';
import CartItem from '../Home/CartItem';

function SameProduct({ matchCategory, setToggleNotification }) {
  const displaySameCategoryProducts = matchCategory.map((product) => (
    <CartItem
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price.unit_amount}
      priceId={product.priceId}
      image={product.images[0]}
      category={product.category}
      description={product.description}
      setToggleNotification={setToggleNotification}
    />
  ));

  return (
    <div className="flex flex-col mx-4 flex-wrap gap-y-10 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 mx-auto">
        {displaySameCategoryProducts}
      </div>
    </div>
  );
}

export default SameProduct;
