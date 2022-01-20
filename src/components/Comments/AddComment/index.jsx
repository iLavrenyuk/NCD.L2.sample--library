import React from 'react';

export const AddComment = () => {
  return (
    <div className="container mx-auto px-6 mt-12 md:mt-16 xl:mt-20">
      <div className="px-6 xl:px-40">
        <p className="text-4xl md:text-6xl font-bold">Comments</p>
        <p className="text-lg mt-2">Top books of this week by NEAR readers.</p>

        <div className="flex items-center mt-7">
          <div className="w-full lg:w-1/2">
            <p className="text-lg font-bold pl-6">Leave a comment</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              className="mt-2 w-full px-6 py-3 border-2 outline-none border-gray-300 focus:border-orange-300 rounded-3xl"
              placeholder="Write here..."
            ></textarea>
          </div>
          <a
            href="#"
            className="text-2xl mt-4 ml-10 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 transform active:scale-95 duration-100"
          >
            Send
          </a>
        </div>
      </div>
    </div>
  );
};
