import React from 'react';

export const Header = () => {
  return (
    <nav className="absolute w-full">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <a href="#" className="flex items-center">
            <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" />
            <span className="block w-0.5 h-12 ml-1 mr-2 rounded-full bg-black"></span>
            <p className="text-4xl font-bold pb-2">Library</p>
          </a>

          <a
            href="./account.html"
            className="flex items-center font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-black to-black hover:from-orange-300 hover:to-orange-400"
          >
            <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" className="pt-3" />
            Login with
            <span className="ml-2 bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 bg-clip-text">NEAR</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
