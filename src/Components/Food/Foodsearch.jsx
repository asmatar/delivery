/* eslint-disable spaced-comment */
/* eslint-disable quote-props */
/* eslint-disable max-len */
// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filteredByName, sortFoodByAsc, sortFoodByDsc, sortFoodByDscPrice, sortFoodByAscPrice, filterByCategory, ResetFilter,
} from '../../app/productReducer';

function Foodsearch() {
  const [inputField, setInputField] = useState('');
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const uniqueProductCategory = [...new Set(products.map((pdt) => pdt.category))];

  const handleChangeSearch = (event) => {
    setInputField(() => event.target.value);
    dispatch(filteredByName(event.target.value));
  };

  const handleSort = (event) => {
    const sortOptions = {
      'asc': sortFoodByAsc,
      'dsc': sortFoodByDsc,
      'price asc': sortFoodByAscPrice,
      'price dsc': sortFoodByDscPrice,
    };
    const option = event.target.value;
    const selectedSortOption = sortOptions[option];
    dispatch(selectedSortOption());
  };

  const handleCategoryFilter = (event) => {
    dispatch(filterByCategory(event.target.textContent.toLowerCase()));
  };

  const handleResetFilter = () => {
    dispatch(ResetFilter());
  };

  const clearFilterByNameinput = () => {
    setInputField('');
  };

  const displaycategories = uniqueProductCategory.map((category) => <button type="button" value="okok" className="h-12 w-28 btn-category log-active ease-in-out drop-shadow-lg" onClick={(event) => { handleCategoryFilter(event); clearFilterByNameinput(event); }} key={category}>{category}</button>);

  return (
    <div className="flex sm:flex-col flex-col gap-y-6 justify-between w-full my-16 px-4 gap-x-6 sm:mt-16 mt-24">
      <div className="flex flex-col sm:flex-row justify-between gap-y-4">
        <div className="sm:max-w-[370px] bp:pr-0 sm:w-1/2">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden min-w-[250px]">
            <div className="grid place-items-center h-full lg:w-20 w-32 2xl:w-52 text-gray-300 ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 inputs"
              type="text"
              id="search"
              value={inputField}
              placeholder="Search something.."
              onChange={(event) => handleChangeSearch(event)}
            />
          </div>
        </div>
        <div className=" flex justify-between sm:justify-end gap-x-2 sm:w-1/2">
          <button type="button" className="btn-all h-12 w-28 transition font-bold ease-in-out duration-300 drop-shadow-lg" onClick={(event) => { handleResetFilter(); clearFilterByNameinput(event); }}>All</button>
          <select name="cars" id="cars" className="h-12 bg-green text-white font-bold hover:text-blackGray hover:bg-yellow self-start w-[112px] rounded transition ease-in-out duration-300 drop-shadow-lg cursor-pointer outline-none" onChange={(event) => handleSort(event)}>
            <option value="">Sort by</option>
            <option value="asc">A-Z</option>
            <option value="dsc">Z-A</option>
            <option value="price asc">Price asc</option>
            <option value="price dsc">Price dsc</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row justify-between lg:justify-center gap-x-2 flex-wrap gap-y-2 order-3 w-full">
        { displaycategories}
      </div>
    </div>
  );
}

export default Foodsearch;
