import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { TitleDecoration } from './TitleDecoration';

export const TitleBlock = () => {
  return (
    <div className="relative overflow-hidden w-full h-auto lg:h-screen">
      <TitleDecoration />

      <div className="flex flex-col items-center px-6 mt-16">
        <img src={require('../../assets/img/near_logo_stack_2.png')} alt="" className="near-logo-img lg:mt-12" />

        <h1 className="text-4xl lg:text-6xl font-bold">NEAR Library</h1>

        <p className="mt-4 text-sm text-center w-full  md:w-1/2 lg:w-1/3 xl:w-1/4">
          It is a Dapp where you can to create, rate, comment, store and transfer books using the NEAR protocol, making
          a library online where you can request one book and change the owner.
        </p>

        <div className="flex flex-col md:flex-row items-center mt-6">
          <button className="w-72 h-14 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full p-0.5 transform active:scale-95 duration-100">
            <div className="w-full h-full rounded-full bg-transparent hover:bg-white">
              <p className="flex justify-center items-center h-full text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-orange-400 hover:text-orange-300">
                Read books
              </p>
            </div>
          </button>

          <Link
            to={routes.AddBook}
            className="flex items-center justify-center w-72 h-14 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 hover:from-gray-300 hover:to-gray-300 transform active:scale-95 duration-100"
          >
            Add book +
          </Link>
        </div>

        <div className="lg:hidden relative z-10 flex justify-center">
          <img src={require('../../assets/img/main.png')} alt="" />
        </div>
      </div>
    </div>
  );
};
