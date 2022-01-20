import React from 'react';
import { Comment } from './Comment';
import { AddComment } from './AddComment';

export const Comments = () => {
  return (
    <section>
      <AddComment />
      <div className="w-full h-0.5 bg-gray-300 my-12"></div>
      <div className="relative container mx-auto px-6">
        <img
          src={require('../../assets/img/active-note.png')}
          alt=""
          className="hidden xl:block absolute -left-10 top-52"
        />

        <div className="relative px-6 xl:px-40 z-10">
          <Comment />
          <Comment isReply />
          <Comment />
          <Comment />
        </div>
      </div>
    </section>
  );
};
