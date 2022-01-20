import React from 'react';
import { ReactComponent as LikeSvg } from '../../../assets/svg/like.svg';
import { ReactComponent as ReplySvg } from '../../../assets/svg/reply.svg';
import { ReactComponent as DislikeSvg } from '../../../assets/svg/dislike.svg';

export const Comment = ({ isReply }) => {
  return (
    <div className={`mt-10 ${isReply ? 'pl-20 border-l-4 border-dashed  border-gray-300' : ''}`}>
      <div className="flex justify-between">
        <span className="text-xl font-bold">ilavreniuk.testnet</span>
        <p className="text-gray-400">22.05.2021 14:23</p>
      </div>

      <p className="mt-4 text-xl">
        That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing
        feedback.That's a fantastic new app feature. You and your team did an excellent job of incorporating user
        testing feedback.
      </p>

      <div className="flex items-center mt-4">
        <p className="text-gray-400 font-bold"> 2 Likes</p>
        <p className="text-gray-400 font-bold ml-4"> 2 Dislikes</p>
        <button className="ml-10 flex items-center text-gray-400 hover:text-orange-300 font-bold">
          <span className="mr-2">
            <ReplySvg />
          </span>
          Reply
        </button>
        <button className="ml-auto text-gray-400 hover:text-orange-300">
          <LikeSvg />
        </button>
        <button className="ml-4 text-gray-400 hover:text-orange-300">
          <DislikeSvg />
        </button>
      </div>
    </div>
  );
};
