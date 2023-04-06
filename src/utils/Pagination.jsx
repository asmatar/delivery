/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';

function Pagination({
  postsPerPage, totalPosts, paginate, indexOfFirstPost, indexOfLastPost,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex flex-col items-center w-full mb-16">
      <ul className="flex justify-center ">
        {pageNumbers.map((number, index) => (
          <li key={number} className="mx-1">
            <button onClick={() => paginate(number)} className=" px-2 hover:bg-black hover:rounded-full hover:text-white">
              {number}
            </button>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 text-sm py-1">
        {indexOfFirstPost + 1 }
        {' '}
        -
        {' '}
        {indexOfLastPost}
        {' '}
        of
        {' '}
        {totalPosts}
        {' '}
        products
        {' '}
      </p>
    </nav>
  );
}

export default Pagination;
