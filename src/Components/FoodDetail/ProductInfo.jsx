/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
// @ts-nocheck
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  doc, updateDoc, arrayUnion,
} from 'firebase/firestore';
import { addToCart } from '../../app/basketReducer';
import { db } from '../../firebase-config';
import AuthContext from '../../context/auth-context';

function ProductInfo({
  title, price, category, description, image, id, quantity, setToggleNotification, nbReview, priceId,
}) {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const overlayRef = useRef();
  const name = useRef();
  const email = useRef();
  const rate = useRef();
  const descriptionForm = useRef();
  const { user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const handleAddToCard = () => {
    setToggleNotification();
    dispatch(addToCart({
      id, price, title, category, image, quantity, priceId,
    }));
  };
  const handleModal = () => {
    setModal(true);
  };
  useEffect(() => {
    const modalCl = modalRef.current.classList;
    const overlayCl = overlayRef.current.classList;
    if (modal === true) {
      document.body.classList.add('overflow-hidden');
      overlayCl.remove('hidden');
      setTimeout(() => {
        modalCl.remove('opacity-0');
        modalCl.remove('-translate-y-full');
        modalCl.remove('scale-150');
      }, 100);
    } else {
      document.body.classList.remove('overflow-hidden');

      modalCl.add('-translate-y-full');
      setTimeout(() => {
        modalCl.add('opacity-0');
        modalCl.add('scale-150');
      }, 100);
      setTimeout(() => overlayCl.add('hidden'), 300);
    }
  }, [modal]);

  const handleSubmitReview = async (event) => {
    event.preventDefault();
    const productsRef = doc(db, 'products', id);
    await updateDoc(productsRef, {
      review: arrayUnion({
        name: name.current.value,
        email: email.current.value,
        rate: rate.current.value,
        description: descriptionForm.current.value,
      }),
    });
    setModal(false);
  };
  return (
    <>

      {/* modal */}
      <div ref={overlayRef} className="hidden fixed inset-0 bg-black bg-opacity-30 flex h-screen  w-full justify-center items-center pt-10 md:pt-0 z-40">
        {/* modal */}

        <div ref={modalRef} className="opacity-0 transform -translate-y-full max-w-[700px] scale-150 relative w-5/6 md:w-4/6  bg-white rounded shadow-lg transition-all duration-300 z-30">
          {/* button close */}
          <button
            onClick={() => setModal(false)}
            className="absolute -top-3 -right-3 bg-green hover:bg-yellow tranistion duration-300 text-2xl w-10 h-10 rounded-full focus:outline-none"
          >
            &#x2717;
          </button>

          {/* header  */}
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-600">Feel free to add a review</h2>
          </div>

          <form className="flex flex-col w-full" onSubmit={handleSubmitReview}>
            <div className="flex flex-col gap-y-8 w-full">
              <div className="relative mt-6">
                <input type="text" placeholder="name" name="name" id="name" ref={name} className="border-b py-4 w-full focus:outline-none focus:border-green pl-4 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0 placeholder:pl-4" required autoComplete="off" />
                <label htmlFor="name" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-4 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-yellow transition-all pl-4"> Enter your Name</label>
              </div>
              <div className="relative">
                <input type="email" placeholder="email" name="email" id="email" ref={email} className="border-b py-4 w-full focus:outline-none focus:border-green pl-4 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0 placeholder:pl-4" required autoComplete="off" />
                <label htmlFor="email" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-4 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-yellow transition-all pl-4">Enter your Email</label>
              </div>
              <div className="relative">
                <input type="number" placeholder="Rate the product" name="rate" id="rate" ref={rate} className="border-b py-4 w-full focus:outline-none focus:border-green pl-4 focus:border-b-2 transition-colors peer focus-within:shadow-lg focus:placeholder:opacity-0 placeholder:pl-4" required autoComplete="off" />
                <label htmlFor="rate" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-4 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-yellow transition-all pl-4">Rate</label>
              </div>
              <div className="relative">
                <textarea type="text" id="description" rows="6" name="description" placeholder="Write a description..." ref={descriptionForm} className="sibling w-full py-1 pl-4 focus:outline-none focus:border-green focus:border-b-2 transition-colors border-b peer focus-within:shadow-lg resize-none focus:placeholder:opacity-0 placeholder:pl-4 " required autoComplete="off" />
                <label htmlFor="description" className="opacity-0 peer-focus:opacity-100 absolute left-0 top-4 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-yellow transition-all pl-4">Description</label>
              </div>
            </div>

            {/* footer  */}
            <div className="px-4 py-3 w-full flex justify-end items-center gap-3">
              <button type="submit" className="add-to-cart text-wite focus:outline-none">Save</button>
              <button
                onClick={() => setModal(false)}
                className="add-to-cart px-4 py-2 rounded text-white focus:outline-none"
              >Close
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* product detail */}
      <div className="flex flex-col justify-center group my-20 gap-y-10 px-4">
        <span className="flex justify-center font-bold bg-clip-text text-transparent bg-yellow-orange-gradient text-4xl self-center">Product details</span>
        <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-lg  transition-all duration-200 ease-in shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src={image} alt="product image" className="rounded-lg" />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-600 font-bold text-sm ml-1">
                  4.96
                  <span className="text-gray-500 font-normal">({nbReview} <span className="font-semibold trext-lg">reviews</span>)</span>
                </p>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">{category}</div>
            </div>
            <h3 className="font-black text-gray-800 md:text-2xl text-xl capitalize ">{title}</h3>
            <p className="md:text-lg text-gray-500 text-base">{description}</p>
            <div className="flex justify-between flex-col md:flex-row gap-y-2">
              <p className="text-xl font-black text-gray-800">$ {price / 100}</p>
              <div className="flex space-x-2">
                <button type="button" className="add-to-cart drop-shadow-lg self-start z-20" onClick={handleAddToCard}>add to cart</button>
                {user && <button type="button" className="add-to-cart transition ease-in-out drop-shadow-lg self-start z-20" onClick={handleModal}>add review</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
