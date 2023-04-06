/* eslint-disable object-curly-spacing */
// @ts-nocheck
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth-context';

function Review({description, name, rate}) {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex gap-y-6 w-[360px] justify-center">
      <div className=" w-full lg:max-w-full lg:flex group ">
        <div className=" shadow-lg bg-white rounded-b w-full p-4 flex flex-col justify-between leading-normal transition-all duration-200 ease-in">
          <div className="mb-8 ">
            { user === null && (
            <Link to="/login">
              <p className="text-sm text-gray-500 flex items-center font-semibold cursor-pointer mb-2 ">
                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p>
            </Link>
            )}
            <p className="text-gray-500 text-base">
              {description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="text-sm flex space-x-3 items-center">
              <p className="text-gray-600 leading-none capitalize">{name}</p>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-gray-500 font-semibold leading-none capitalize">{rate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
