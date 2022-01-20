import React from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { signIn, signOut } from '../../services/near';
import { ReactComponent as LogoutSvg } from '../../assets/svg/logout.svg';

export const Header = () => {
  const { accountId, setAccountId } = useStore();

  const handleSignIn = () => {
    signIn(window.location.origin + routes.Home);
  };

  const handleSignOut = () => {
    signOut();
    setAccountId(null);
  };

  return (
    <nav className="absolute w-full top-0 z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <Link to={routes.Home} className="flex items-center">
            <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" />
            <span className="block w-0.5 h-12 ml-1 mr-2 rounded-full bg-black"></span>
            <p className="text-4xl font-bold pb-2">Library</p>
          </Link>

          {!accountId ? (
            <button
              onClick={handleSignIn}
              className="flex items-center font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-black to-black hover:from-orange-300 hover:to-orange-400"
            >
              <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" className="pt-3" />
              Login with
              <span className="ml-2 bg-gradient-to-r hover:from-orange-400 hover:to-orange-300 bg-clip-text">NEAR</span>
            </button>
          ) : (
            <div className="flex items-center">
              <span className="px-4 py-1 shadow-lg rounded-full">
                <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" className="pt-3" />
              </span>
              <div className="ml-4">
                <p className="font-bold text-xl">
                  oliinykk
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
                    .near
                  </span>
                </p>
                <button onClick={handleSignOut} className="flex items-center font-bold text-sm text-orange-300">
                  <span className="mr-1">
                    <LogoutSvg />
                  </span>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
