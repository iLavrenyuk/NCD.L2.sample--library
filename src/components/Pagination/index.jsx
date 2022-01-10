import React from 'react';

export const Pagination = () => {
  return (
    <div className="flex justify-center items-center my-32">
      <ul className="flex text-lg font-bold">
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            Previous
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            1
          </a>
        </li>
        {/* <!-- Active element (just need to add class - border-b-2 ) --> */}
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400 border-b-2">
            2
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            3
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            4
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            5
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            6
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            7
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            8
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            9
          </a>
        </li>
        <li>
          <a href="#" className="pb-2 px-1 md:px-3 hover:border-b-2 border-orange-400">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
