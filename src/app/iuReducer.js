/* eslint-disable no-trailing-spaces */
// @ts-nocheck
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  isLoading: false, 
  notification: null,
  setNotification: 'bg-yellow',
};
// reducer to manage notification
const iuSlice = createSlice({
  name: 'iu',
  initialState,
  reducers: {
    isLoad(state, action) {
      // state.isLoading = !state.isLoading;
      state.isLoading = action.payload;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { isLoad, showNotification } = iuSlice.actions;

export default iuSlice.reducer;
