import React from 'react';
import { Footer } from '../components/Footer';
import { TitleBlock } from '../components/Title';
import { TopBooks } from '../components/TopBooks';
import { AllBooks } from '../components/AllBooks';
import { ChangeContract } from '../components/ChangeContract';

export const HomePage = () => {
  return (
    <div>
      <ChangeContract />
      <TitleBlock />
      <TopBooks />
      <AllBooks />

      <section>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-center px-10">
                <img src={require('../assets/img/near_logo_stack_2.png')} alt="" />
                <p className="text-4xl lg:text-6xl font-bold">NEAR Library</p>
                <p className="text-center mt-6 ">
                  It is a Dapp where you can to create, rate, comment, store and transfer books using the NEAR protocol,
                  making a library online where you can request one book and change the owner.
                </p>
                <button className="w-72 h-14 mt-7 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full p-0.5 transform active:scale-95 duration-100">
                  <div className="w-full h-full rounded-full bg-transparent hover:bg-white">
                    <p className="flex justify-center items-center h-full text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-orange-400 hover:text-orange-300">
                      Add books +
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src={require('../assets/img/main.png')} alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
