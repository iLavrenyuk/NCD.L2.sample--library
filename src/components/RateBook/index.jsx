import React from 'react';
import { ReactComponent as StarSvg } from '../../assets/svg/star.svg';

export const RateBook = ({ rate }) => {
  return (
    <div className="flex space-x-0.5 mt-2">
      {[...Array(rate)].map((e, index) => (
        <span key={index} className="cursor-pointer transform hover:scale-125 duration-150 hover:shadow-2xl">
          <StarSvg />
        </span>
      ))}
    </div>
  );
};
