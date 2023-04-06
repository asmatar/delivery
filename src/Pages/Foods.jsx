/* eslint-disable max-len */
/* eslint-disable no-confusing-arrow */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BannerFood from '../Components/UI/BannerFood';
import FoodContainer from '../Components/Food/FoodContainer';
import Foodsearch from '../Components/Food/Foodsearch';
import Pagination from '../utils/Pagination';
import { getProductFromFirebase } from '../app/productReducer';
import Spinner from '../Components/UI/Spinner';

function Foods({ setToggleNotification }) {
  const dispatch = useDispatch();
  const load = useSelector((state) => state.iu.isLoading);
  const productAmount = useSelector((state) => state.products.filteredFood.length > 0 ? state.products.filteredFood : state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(13);
  const indexOfLastPost = productAmount.length < 10 ? 13 : currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber) => { setCurrentPage(pageNumber); };

  useEffect(() => {
    // function to call the product when the page load and dispatch change
    dispatch(getProductFromFirebase());
  }, [dispatch]);
  return (
    <>
      <BannerFood title="All food" />
      { load === false
        ? <Spinner />
        : (
          <div className="flex flex-col items-start justify-between max-w-screen-2xl m-auto">
            <Foodsearch />
            <FoodContainer
              indexOfFirstPost={indexOfFirstPost}
              indexOfLastPost={indexOfLastPost}
              setToggleNotification={setToggleNotification}
            />
            <Pagination
              indexOfLastPost={indexOfLastPost}
              indexOfFirstPost={indexOfFirstPost}
              postsPerPage={postsPerPage}
              totalPosts={productAmount.length}
              paginate={paginate}
            />
          </div>
        )}
    </>
  );
}

export default Foods;
