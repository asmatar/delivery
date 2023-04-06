/* eslint-disable object-curly-newline */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
// @ts-nocheck
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BannerFood from '../Components/UI/BannerFood';
import ProductInfo from '../Components/FoodDetail/ProductInfo';
import SameProduct from '../Components/FoodDetail/SameProduct';
import Review from '../Components/FoodDetail/Review';

function FoodDetail({ setToggleNotification }) {
  const [isReviewTabActive, setIsReviewTabActive] = useState(false);
  const products = useSelector((state) => state.products.products);
  const { id: productId } = useParams();
  const matchProduct = products.find((pdt) => pdt.id === productId);
  const { review = [] } = matchProduct;
  const matchCategory = products.filter((pdts) => pdts.category === matchProduct.category && pdts.id !== matchProduct.id);
  const displayReview = review.map(({ email, name, description, rate }) => (
    <Review
      key={email}
      name={name}
      description={description}
      rate={rate}
    />
  ));

  const reviewTabClassName = 'scale-105 text-lg bg-green !text-white';
  const handleTab = (event) => {
    const isReviewTabClicked = event.target.dataset.tab === 'review';
    setIsReviewTabActive(isReviewTabClicked);
  };

  return (
    <>
      <BannerFood />
      <div className="max-w-screen-2xl m-auto mt-16 sm:mt-0 flex flex-col items-center">
        <ProductInfo
          key={matchProduct.id}
          id={matchProduct.id}
          image={matchProduct.images[0]}
          title={matchProduct.name}
          price={matchProduct.price.unit_amount}
          priceId={matchProduct.priceId}
          category={matchProduct.category}
          description={matchProduct.description}
          quantity={matchProduct.quantity}
          setToggleNotification={setToggleNotification}
          nbReview={review.length}
        />
        <div className="flex flex-row w-max items-center sm:self-start space-x-4 h-12 px-2 my-6 mx-4">
          <button className={`btn-see-all-food px-4 py-2 bg-green text-white ${!isReviewTabActive ? reviewTabClassName : ''}`} data-tab="like" onClick={handleTab}>Same category</button>
          <button className={`btn-order-now px-4 py-2 bg-green text-white ${isReviewTabActive ? reviewTabClassName : ''}`} data-tab="review" onClick={handleTab}>See reviews</button>
        </div>
        {
          !isReviewTabActive
            ? (
              <SameProduct
                matchCategory={matchCategory}
                setToggleNotification={setToggleNotification}
                products={products}
                handleTab={handleTab}
              />
            )
            : <div className="flex flex-row flex-wrap justify-center sm:justify-start mx-4 gap-4 mb-16">{displayReview}</div>
        }
      </div>
    </>
  );
}

export default FoodDetail;
