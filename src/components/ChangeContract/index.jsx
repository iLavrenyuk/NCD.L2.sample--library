import React, { useState } from 'react';
import { useStore } from '../../store';
import { ReactComponent as ErrorSvg } from '../../assets/svg/error.svg';
import { ReactComponent as ArrowSvg } from '../../assets/svg/arrowUp.svg';
import { ReactComponent as NearLogoSvg } from '../../assets/svg/nearLogo.svg';

export const ChangeContract = () => {
  const { contractId, setContractId, apiError, setApiError } = useStore();
  const defaultContractId = process.env.REACT_APP_CONTRACT_ID;

  const [isOpen, setIsOpen] = useState();
  const [inputContract, setInputContract] = useState('');

  const handleChange = (e) => {
    setInputContract(e.target.value);
    setApiError(false);
  };

  const setDefaultContractId = () => {
    localStorage.setItem('CONTRACT_ID', defaultContractId);
    setContractId(defaultContractId);
  };

  return (
    <div className="fixed w-full flex flex-col items-center z-10">
      {!isOpen ? (
        <>
          <div className="absolute z-10 w-74 h-37 bg-gradient-to-r from-orange-400 to-orange-400 rounded-b-full opacity-50 pulsing"></div>
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-20 w-60 h-30 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-300 hover:from-gray-24 hover:to-gray-24 rounded-b-full"
          >
            <span className="mb-1">
              <ArrowSvg />
            </span>
          </button>

          {contractId === defaultContractId ? (
            <p className="mt-2 font-semibold">Try frontend with your deployed contract ID</p>
          ) : (
            <div className="text-center">
              <p className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300  mt-2 font-semibold">
                Current ID
              </p>
              <p className="font-semibold">{contractId}</p>
            </div>
          )}
        </>
      ) : (
        <div className="absolute z-30 w-374 flex flex-col items-center bg-white px-4 pb-10 rounded-xl shadow-xl">
          <div className="absolute z-10 w-74 h-37 bg-gradient-to-r from-orange-400 to-orange-400 rounded-b-full opacity-50 pulsing"></div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative z-20 w-60 h-30 mx-auto flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-300 hover:from-gray-24 hover:to-gray-24 rounded-b-full"
          >
            <span className="mb-2 transform rotate-180">
              <ArrowSvg />
            </span>
          </button>

          <span className="mx-auto mt-4">
            <NearLogoSvg />
          </span>

          <p className="text-2xl font-bold text-center mt-5">Contract deploy</p>

          <p className="text-gray-400 text-center mt-2 text-sm font-semibold">
            Please make sure that you put in input field correct contract id and your contract is deployed correctly.
            This is{' '}
            <a
              href="https://github.com/iLavrenyuk/NEAR-library"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text font-semibold"
            >
              contract source code
            </a>{' '}
            with setup instructions. <br />
            <span className="text-black font-semibold">
              If your input is not valid, your will see error message with description of error
            </span>
          </p>

          <div className="flex flex-col items-center mt-3">
            <p className="inline-block bg-gradient-to-r from-orange-400 to-orange-300 text-transparent bg-clip-text text-sm font-semibold">
              Current ID
            </p>
            <p className="text-center text-black text-sm font-semibold">{contractId}</p>
          </div>

          <div className="w-full">
            <div className="w-full mt-3 flex flex-col items-end">
              {apiError ? (
                <p className="mr-6 my-1 flex items-center text-sm text-red-24">
                  <span className="mr-1">
                    <ErrorSvg />
                  </span>
                  An occurred error
                </p>
              ) : null}
              <input
                onChange={handleChange}
                value={inputContract}
                type="text"
                placeholder="Set your contract ID"
                className={`w-full h-14 mt-4 rounded-3xl outline-none border ${
                  apiError ? 'border-red-24 focus:border-red-24' : 'focus:border-blue-24'
                } pl-7 pr-2 font-medium placeholder-gray-400`}
              />
            </div>

            {inputContract && inputContract !== contractId ? (
              <button
                onClick={() => setContractId(inputContract)}
                className="w-full h-16 mt-4 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full p-0.5 transform active:scale-95 duration-100"
              >
                <div className="w-full h-full rounded-full bg-transparent hover:bg-white">
                  <p className="flex justify-center items-center h-full text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white hover:from-orange-400 hover:text-orange-300">
                    Deploy contract
                  </p>
                </div>
              </button>
            ) : (
              <button className="opacity-50 cursor-not-allowed w-full h-16 mt-4 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full p-0.5">
                <div className="w-full h-full rounded-full bg-transparent">
                  <p className="flex justify-center items-center h-full text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white ">
                    Deploy contract
                  </p>
                </div>
              </button>
            )}

            <button
              onClick={setDefaultContractId}
              className="w-full h-16 flex items-center justify-center mt-4 rounded-full border border-red-24 hover:bg-red-24 font-bold text-lg text-red-24 hover:text-white transform active:scale-95 duration-100"
            >
              Reset to default
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
