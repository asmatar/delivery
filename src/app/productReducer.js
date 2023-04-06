/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// @ts-nocheck
import { createSlice } from '@reduxjs/toolkit';
import {
  getDocs, collection, query, where,
} from 'firebase/firestore';
import { db } from '../firebase-config';
import { showNotification, isLoad } from './iuReducer';

const initialState = {
  products: [],
  filteredFood: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProduct(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.products = action.payload;
    },
    filteredByName(state, action) {
      return {
        ...state,
        filteredFood: [...state.products].filter((pdt) => pdt.name.toLowerCase().startsWith(action.payload.toLowerCase())),
      };
    },
    sortFoodByAsc(state) {
      return {
        ...state,
        filteredFood: [...state.products].sort((a, b) => ((a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0))),
      };
    },
    sortFoodByDsc(state) {
      return {
        ...state,
        filteredFood: [...state.products].sort((a, b) => ((a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0))),
      };
    },
    sortFoodByDscPrice(state) {
      return {
        ...state,
        filteredFood: [...state.products].sort((a, b) => (((a.price.unit_amount) > b.price.unit_amount) ? 1 : ((b.price.unit_amount > (a.price.unit_amount)) ? -1 : 0))),
      };
    },
    sortFoodByAscPrice(state) {
      return {
        ...state,
        filteredFood: [...state.products].sort((a, b) => (((a.price.unit_amount) < b.price.unit_amount) ? 1 : ((b.price.unit_amount < (a.price.unit_amount)) ? -1 : 0))),
      };
    },
    filterByCategory(state, action) {
      return {
        ...state,
        filteredFood: [...state.products].filter((pdt) => pdt.category.toLowerCase() === action.payload),
      };
    },
    ResetFilter(state) {
      return {
        ...state,
        filteredFood: [],
      };
    },
  },
});
// thunk to get the data from firebase
export const getProductFromFirebase = () => async (dispatch) => {
  const productCollectionRef = collection(db, 'products');
  // take all the product that are active
  const activeFilter = query(productCollectionRef, where('active', '==', true));
  // we get all the products
  dispatch(
    // async function, so when we wait for the response, we call dispatch un action: show notification, in the ui reducer
    showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }),
  );
  const fetchProducts = async () => {
    // we catch the data and teh price from stripe
    const data = await getDocs(activeFilter);
    // const products = await (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    const products = await Promise.all(
      data.docs.map(async (doc) => {
        const precioSnaps = await getDocs(collection(doc.ref, 'prices'));
        const price = await precioSnaps.docs[0].data();
        const priceId = precioSnaps.docs[0].id;
        return ({
          price, priceId, ...doc.data(), id: doc.id,
        });
      }),
    );
    return products;
  };
  try {
    // in try catch block we call fetchProducts, and when it's success we dispatch show notification to send a notification to the client side
    const allProducts = await fetchProducts();
    // we call get product with all the product
    dispatch(
      showNotification({
        status: 'success',
        title: 'Success',
        message: 'Fetching cart data succeeded!',
      }),
    );
    dispatch(getProduct(allProducts));
    dispatch(isLoad(true));
    // change isLad to true because now we get the data
  } catch (error) {
    // if we can't fetch, we send an action show notification with the errror case
    dispatch(
      showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }),
    );
  }
};
export const {
  /* addReviewToRedux, */ getProduct, filteredByName, sortFoodByAsc, sortFoodByDsc, sortFoodByDscPrice, sortFoodByAscPrice, filterByCategory, ResetFilter,
} = productSlice.actions;
export default productSlice.reducer;
