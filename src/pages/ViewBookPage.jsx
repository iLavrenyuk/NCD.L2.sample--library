import React from 'react';
import { Comments } from '../components/Comments';
import { ViewBook } from '../components/ViewBook';

export const ViewBookPage = () => {
  return (
    <div className="mt-32">
      <ViewBook />
      <Comments />
    </div>
  );
};
