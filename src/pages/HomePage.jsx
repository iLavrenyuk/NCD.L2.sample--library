import React from 'react';
import { Pagination } from '../components/Pagination';
import { TitleBlock } from '../components/blocks/Title';
import { ChangeContract } from '../components/ChangeContract';

export const HomePage = () => {
  return (
    <div>
      <ChangeContract />

      <TitleBlock />

      <section>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between pt-4 lg:pt-9 pb-10 lg:pb-20">
            <div className="flex">
              <div>
                <p className="text-4xl lg:text-6xl font-bold">Top books</p>
                <p className="text-sm lg:text-lg mt-3">Top books of this week by NEAR readers.</p>
              </div>

              <img src={require('../assets/img/Right_arrow_curved.png')} alt="" className="w-20 md:w-auto" />
            </div>
            <img src={require('../assets/img/best-books-note.png')} alt="" className="hidden md:block" />
          </div>

          {/* <!-- Mobile note image --> */}
          <div className="flex justify-end">
            <img src={require('../assets/img/best-books-note.png')} alt="" className="-mt-10 md:hidden" />
          </div>

          <div className="px-10 md:px-20 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-20">
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-6 mt-20">
          <div className="flex items-baseline justify-between pt-4 lg:pt-9 pb-10 lg:pb-20">
            <div className="flex">
              <div>
                <p className="text-4xl lg:text-6xl font-bold">books</p>
                <p className="text-sm lg:text-lg mt-3">Everything what do you want!</p>
              </div>

              <img src={require('../assets/img/exc.png')} alt="" className="ml-4" />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="flex text-lg font-bold hover:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.4472 20.9051C13.786 20.7376 14 20.3951 14 20.0204V14.6999C14 14.4376 14.1054 14.186 14.2929 
                          14.0005L20.414 7.94576C20.789 7.57483 21 7.07135 21 6.54611V3.98915C21 3.44215 20.553 3 20 3H4C3.447 
                          3 3 3.44215 3 3.98915V6.54611C3 7.07135 3.211 7.57483 3.586 7.94576L9.70711 14.0005C9.89464 14.186 10 
                          14.4376 10 14.6999V21.0096C10 21.7449 10.7823 22.2231 11.4472 21.8943L13.4472 20.9051Z"
                    fill="currentColor"
                  />
                </svg>
                Sort by Name
              </a>
              <a href="#" className="flex text-lg font-bold hover:text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.4472 20.9051C13.786 20.7376 14 20.3951 14 20.0204V14.6999C14 14.4376 14.1054 14.186 14.2929 
                          14.0005L20.414 7.94576C20.789 7.57483 21 7.07135 21 6.54611V3.98915C21 3.44215 20.553 3 20 3H4C3.447 
                          3 3 3.44215 3 3.98915V6.54611C3 7.07135 3.211 7.57483 3.586 7.94576L9.70711 14.0005C9.89464 14.186 10 
                          14.4376 10 14.6999V21.0096C10 21.7449 10.7823 22.2231 11.4472 21.8943L13.4472 20.9051Z"
                    fill="currentColor"
                  />
                </svg>
                Sort by Date
              </a>
            </div>
          </div>

          <div className="px-10 md:px-20 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-20 gap-y-8">
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
            <div>book</div>
          </div>

          <Pagination />
        </div>
      </section>

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

      {/* <Footer /> */}
    </div>
  );
};
