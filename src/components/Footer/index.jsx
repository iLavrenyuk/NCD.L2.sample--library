import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-6 mt-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <a href="#" className="flex items-center">
              <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" />
              <span className="block w-0.5 h-12 ml-1 mr-2 rounded-full bg-black"></span>
              <p className="text-4xl font-bold pb-2">Library</p>
            </a>
            <a href="#" className="mt-1">
              info@nearlibrary
            </a>
            <a href="#" className="mt-1">
              1-232-3434 (Main)
            </a>
          </div>

          <div className="w-auto md:ml-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-14 lg:gap-x-28 xl:gap-x-40 gap-y-10">
            <div>
              <h5 className="text-2xl font-bold mt-2">About</h5>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="./alert-successful.html" className="hover:text-black font-medium">
                    About contract
                  </a>
                </li>
                <li>
                  <a href="./alert-failed.html" className="hover:text-black font-medium">
                    About NEAR{' '}
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-black font-medium">
                    About NEAR ecosystem
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-2xl font-bold mt-2">Community</h5>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="" className="hover:text-black font-medium">
                    Community OS Wiki
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-black font-medium">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-black font-medium">
                    Events
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-2xl font-bold mt-2">Help</h5>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>
                  <a href="" className="hover:text-black font-medium">
                    Support
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-black font-medium">
                    info@nearanalytics
                  </a>
                </li>
                <li>
                  <a href="" className="hover:text-black font-medium">
                    1-232-3434 (Main)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <p>© 2022 NEAR Ltd</p>
        </div>
      </div>
    </footer>
  );
};
