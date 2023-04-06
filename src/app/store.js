/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
// @ts-ignore
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from './productReducer';
import basketReducer/* , { localStorageMiddleware } */ from './basketReducer';
import iuReducer from './iuReducer';
// import localStorageMiddleware from './middleware/localStorage';

export const store = configureStore({
  reducer: {
    products: productReducer,
    baskets: basketReducer,
    iu: iuReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(localStorageMiddleware),
});
