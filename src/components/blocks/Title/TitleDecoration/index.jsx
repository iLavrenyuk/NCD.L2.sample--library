import React from 'react';

export const TitleDecoration = () => {
  return (
    <>
      <img
        src={require('../../../../assets/img/comment-note.png')}
        alt=""
        className="hidden lg:block absolute top-32 left-32"
      />
      <img
        src={require('../../../../assets/img/add-note.png')}
        alt=""
        className="hidden lg:block absolute right-32 top-52"
      />
      <img
        src={require('../../../../assets/img/rate-note.png')}
        alt=""
        className="hidden lg:block absolute left-32 bottom-24 z-20"
      />

      <img
        src={require('../../../../assets/img/books-bg-r.png')}
        alt=""
        className="hidden lg:block absolute bottom-0 -left-4"
      />
      <img
        src={require('../../../../assets/img/books-bg-r.png')}
        alt=""
        className="hidden lg:block absolute bottom-0 right-0"
      />
      <div className="flex justify-center">
        <img
          src={require('../../../../assets/img/main.png')}
          alt=""
          className="hidden lg:block absolute main-book -bottom-20 xl:-bottom-44 2xl:-bottom-52 lg:-ml-32"
        />
      </div>
    </>
  );
};
