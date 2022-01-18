import React from 'react';
import { ReactComponent as StarSvg } from '../../assets/svg/star.svg';
import { ReactComponent as UserSvg } from '../../assets/svg/user.svg';
import { ReactComponent as ClockSvg } from '../../assets/svg/clock.svg';

export const Book = () => {
  return (
    <div className="mt-4">
      <a href="#">
        <img
          src={require('../../assets/img/book.png')}
          alt=""
          className="w-full transform hover:scale-105 duration-150 hover:shadow-2xl"
        />
      </a>

      <div className="flex mt-2">
        <span className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl hover:mr-0.5">
          <StarSvg />
        </span>
        <span className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl hover:mx-0.5">
          <StarSvg />
        </span>
        <span className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl hover:mx-0.5">
          <StarSvg />
        </span>
        <span className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl hover:mx-0.5">
          <StarSvg />
        </span>
        <span className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl hover:mx-0.5">
          <StarSvg />
        </span>
      </div>

      <a href="#" className="text-lg font-bold mt-3">
        Small brave moves
      </a>

      <p className="text-sm mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim
        <a
          href="#"
          className="inline-block text-sm text-transparent font-bold bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 transform hover:scale-105 active:scale-100 duration-100"
        >
          Read more
        </a>
      </p>

      <div className="flex mt-5">
        <div className="flex w-1/2">
          <p className="font-bold">Pages:</p>
          <p className="ml-1">546</p>
        </div>
        <div className="flex w-1/2">
          <p className="font-bold">Author:</p>
          <p className="ml-1">Nicole Bianchi da Silva</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <a href="#" className="flex items-center hover:underline">
          <span className="mr-2 w-5 h-5">
            <UserSvg />
          </span>
          ilavreniuk2.testnet
        </a>
        <p className="flex items-center">
          <span className="mr-2 w-5 h-5">
            <ClockSvg />
          </span>
          22.05.2021
        </p>
      </div>
    </div>
  );
};
