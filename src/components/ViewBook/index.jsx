import React from 'react';
import { RateBook } from '../RateBook';
import { ReactComponent as UserSvg } from '../../assets/svg/user.svg';
import { ReactComponent as ClockSvg } from '../../assets/svg/clock.svg';

export const ViewBook = () => {
  return (
    <section className="relative container mx-auto px-6">
      <img src={require('../../assets/img/read-note.png')} alt="" className="hidden xl:block absolute -left-10" />
      <img
        src={require('../../assets/img/comment-note.png')}
        alt=""
        className="hidden xl:block absolute bottom-0 -left-10"
      />
      <img
        src={require('../../assets/img/rate-note.png')}
        alt=""
        className="hidden xl:block absolute -bottom-44 -right-10"
      />

      <div className="relative px-6 xl:px-40 z-10">
        <div className="flex flex-col md:flex-row mt-20 space-x-0 md:space-x-14">
          <div className="w-full md:w-1/3">
            <img src={require('../../assets/img/book.png')} alt="" className="w-full" />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mt-3">Small brave moves</h1>

            <p className="text-sm mt-5 w-full lg:w-4/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Mauris dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Mauris dignissim Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris dignissim
            </p>

            <div className="flex items-center mt-5">
              <p className="font-bold">Pages:</p>
              <p className="ml-2">545</p>
            </div>
            <div className="flex items-center mt-5">
              <p className="font-bold">Author:</p>
              <p className="ml-2">Nicole Bianchi da Silva</p>
            </div>
            <div className="flex justify-between mt-5">
              <a href="#" className="flex items-center hover:underline">
                <span className="mr-2 w-5 h-5">
                  <UserSvg />
                </span>
                oliinykkk.near
              </a>
              <p className="flex items-center">
                <span className="mr-2 w-5 h-5">
                  <ClockSvg />
                </span>
                22.05.2021
              </p>
            </div>

            <div className="flex flex-col items-center md:flex-row mt-10">
              <a
                href="#"
                className="w-1/2 h-14 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full p-0.5 transform active:scale-95 duration-100"
              >
                <div className="w-full h-full rounded-full bg-transparent hover:bg-white">
                  <p className="flex items-center justify-center w-full h-full text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white hover:from-orange-400 to-white hover:to-orange-300">
                    Get this book
                  </p>
                </div>
              </a>

              <div className="mt-4 md:mt-0 md:ml-10">
                <p className="text-xl font-bold">Rate this book</p>
                <RateBook rate={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
