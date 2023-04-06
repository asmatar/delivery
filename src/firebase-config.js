// @ts-nocheck
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBAhw8y1mEooAR-K-ywyxsiyVpOw8WwJ-Q',
  authDomain: 'food-delivery-4510b.firebaseapp.com',
  databaseURL: 'https://food-delivery-4510b-default-rtdb.firebaseio.com',
  projectId: 'food-delivery-4510b',
  storageBucket: 'food-delivery-4510b.appspot.com',
  messagingSenderId: '250535155210',
  appId: '1:250535155210:web:e4c32c1cef0d3cd73331f3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
