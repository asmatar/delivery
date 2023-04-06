/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../app/basketReducer';

function CartTable({ setToggleNotification }) {
  const productCart = useSelector((state) => state.baskets.basketProducts);
  const dispatch = useDispatch();

  const handleDeleteCart = (id, event) => {
    setToggleNotification(event.target.dataset.cta);
    dispatch(removeFromCart(id));
  };

  const displayProductcart = productCart.map((pdtCart) => (
    <tbody key={pdtCart.id} className="text-sm divide-y divide-gray-100">
      <tr>
        <td className="p-2 whitespace-nowrap w-4/12">
          <div className="">
            <div className="w-12/12 flex-shrink-0 min-w-[150px] md:min-w-0 h-[20vw] lg:h-[15vw] max-h-[200px]"><img className="rounded h-full w-full" src={pdtCart.image} alt="image product" /></div>
          </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-center">{pdtCart.title}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-center">{pdtCart.category}</div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-center font-medium">
        $
        {' '}
        {pdtCart.price / 100}
        </div>
        </td>
        <td className="p-2 whitespace-nowrap">
          <div className="text-lg text-center">{pdtCart.quantity}</div>
        </td>
        <td className="p-2 whitespace-nowrap h-full mx-auto ">
          <div className="text-lg flex justify-center cursor-pointer" data-cta="delete" onClick={handleDeleteCart.bind(null, pdtCart.id)}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.8958 8.75H5.10417M27.4648 12.3958L26.794 22.4583C26.5358 26.3287 26.4075 28.264 25.146 29.4438C23.8846 30.625 21.9435 30.625 18.0644 30.625H16.9356C13.0565 30.625 11.1154 30.625 9.85396 29.4438C8.59251 28.264 8.46271 26.3287 8.20605 22.4583L7.53521 12.3958M13.8542 16.0417L14.5833 23.3333M21.1458 16.0417L20.4167 23.3333" stroke="#01A082" strokeWidth="2.1875" strokeLinecap="round" />
          <path d="M9.47917 8.75H9.63959C10.2265 8.735 10.7952 8.54324 11.2714 8.19979C11.7475 7.85634 12.1089 7.37719 12.3083 6.825L12.3579 6.67479L12.4994 6.25042C12.6204 5.88729 12.6817 5.70646 12.7619 5.55187C12.9197 5.24911 13.1462 4.98749 13.4232 4.78794C13.7002 4.58839 14.0201 4.45646 14.3573 4.40271C14.5279 4.375 14.719 4.375 15.101 4.375H19.899C20.281 4.375 20.4721 4.375 20.6427 4.40271C20.9799 4.45646 21.2998 4.58839 21.5768 4.78794C21.8538 4.98749 22.0803 5.24911 22.2381 5.55187C22.3183 5.70646 22.3796 5.88729 22.5006 6.25042L22.6421 6.67479C22.8269 7.28915 23.2091 7.82543 23.7295 8.20059C24.25 8.57575 24.8796 8.76886 25.5208 8.75" stroke="#01A082" strokeWidth="2.1875" />
          </svg>
          </div>
        </td>
      </tr>
    </tbody>
  ));

  return (
    <>
    { displayProductcart.length > 0 ? (
      <section className="text-gray-600 sm:mt-24 mb-10 mt-32">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-2xl">Your Cart product</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Image</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Title</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">category</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Price</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Quantity</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Delete</div>
                      </th>
                    </tr>
                  </thead>
                  { displayProductcart}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
      : (<div className="text-center font-semibold text-2xl sm:text-3xl mt-32 mb-16 md:my-36">Your cart is empty</div>)}
    </>
  );
}

export default CartTable;
