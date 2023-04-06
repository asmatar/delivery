// @ts-nocheck
/* eslint-disable import/newline-after-import */
import React from 'react';
import ReactDOM from 'react-dom';

function Notification({ status, message }) {
  const statusClasses = {
    error: 'bg-red-500 text-white opacity-100',
    success: 'bg-green text-red opacity-100',
    pending: 'bg-yellow text-white opacity-100',
    stripe: 'bg-green text-white opacity-100',
  };

  const specialClasses = statusClasses[status] || '';
  return ReactDOM.createPortal(
    <section id="notif" className={`transition-all ease-in-out duration-300 fixed right-0 left-0 bottom-0 font-semibold h-10 flex justify-center items-center p-4 rounded opacity-100 ${specialClasses}`}>
      <p>{message}</p>
    </section>, document.getElementById('notification'),
  );
}

export default Notification;
