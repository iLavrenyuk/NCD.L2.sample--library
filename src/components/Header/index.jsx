import React from 'react';
import { useStore } from '../../store';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';
import { signIn, signOut } from '../../services/near';

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
    <nav className="absolute w-full z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M2.97874 1.78723C2.2737 1.78723 1.70215 2.35878 1.70215 3.06383V10.7234C1.70215 11.4284 2.2737 12 2.97874 12H7.44683C8.15187 12 8.72342 11.4284 8.72342 10.7234V10.2979C8.72342 10.0629 8.53291 9.87234 8.29789 9.87234C8.06288 9.87234 7.87236 10.0629 7.87236 10.2979V10.7234C7.87236 10.9584 7.68184 11.1489 7.44683 11.1489H2.97874C2.74373 11.1489 2.55321 10.9584 2.55321 10.7234V3.06383C2.55321 2.82881 2.74373 2.6383 2.97874 2.6383H7.44683C7.68184 2.6383 7.87236 2.82881 7.87236 3.06383V3.48936C7.87236 3.72437 8.06288 3.91489 8.29789 3.91489C8.53291 3.91489 8.72342 3.72437 8.72342 3.48936V3.06383C8.72342 2.35878 8.15187 1.78723 7.44683 1.78723H2.97874Z"
                      fill="url(#paint0_linear_7:1818)"
                    />
                    <path
                      d="M6.24018 5.50954C6.41583 5.3534 6.43165 5.08444 6.27552 4.90878C6.11938 4.73313 5.85042 4.71731 5.67476 4.87345L3.40207 6.89362L5.67476 8.91379C5.85042 9.06993 6.11938 9.05411 6.27552 8.87846C6.43165 8.7028 6.41583 8.43384 6.24018 8.2777L5.16181 7.31915H10.6383C10.8733 7.31915 11.0639 7.12863 11.0639 6.89362C11.0639 6.6586 10.8733 6.46809 10.6383 6.46809H5.16181L6.24018 5.50954Z"
                      fill="url(#paint1_linear_7:1818)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7:1818"
                        x1="10.5422"
                        y1="10.9787"
                        x2="3.14219"
                        y2="10.6139"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FE7B02" />
                        <stop offset="1" stopColor="#FF9533" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_7:1818"
                        x1="10.5422"
                        y1="10.9787"
                        x2="3.14219"
                        y2="10.6139"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FE7B02" />
                        <stop offset="1" stopColor="#FF9533" />
                      </linearGradient>
                    </defs>
                  </svg>
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
