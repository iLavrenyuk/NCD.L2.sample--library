import React from 'react';
import { Book } from '../Book';

export const TopBooks = () => {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between pt-4 lg:pt-9 pb-10 lg:pb-20">
          <div className="flex">
            <div>
              <p className="text-4xl lg:text-6xl font-bold">Top books</p>
              <p className="text-sm lg:text-lg mt-3">Top books of this week by NEAR readers.</p>
            </div>

            <img src={require('../../assets/img/Right_arrow_curved.png')} alt="" className="w-20 md:w-auto" />
          </div>
          <img src={require('../../assets/img/best-books-note.png')} alt="" className="hidden md:block" />
        </div>

        <div className="flex justify-end">
          <img src={require('../../assets/img/best-books-note.png')} alt="" className="-mt-10 md:hidden" />
        </div>

        <div className="px-10 md:px-20 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-20">
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </div>
    </section>
  );
};
