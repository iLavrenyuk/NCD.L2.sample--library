import LoadingOverlay from 'react-loading-overlay';
import React, { useCallback, useEffect, useState } from 'react';
import { Book } from '../Book';
import { useStore } from '../../store';
import { Pagination } from '../Pagination';
import { getBooks } from '../../services/near';
import { ReactComponent as SortSvg } from '../../assets/svg/sort.svg';

export const AllBooks = () => {
  const { contractId, setApiError } = useStore();

  const [books, setBooks] = useState();
  const [displayBooks, setDisplayBooks] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const booksApiData = await getBooks();
      setBooks(booksApiData);
      setDisplayBooks(booksApiData);
      setIsLoading(false);
      setApiError(false);
    } catch (e) {
      setIsLoading(false);
      setApiError(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractId, setApiError, setIsLoading]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section>
      <div className="container mx-auto px-6 mt-20">
        <div className="flex items-baseline justify-between pt-4 lg:pt-9 pb-10 lg:pb-20">
          <div className="flex">
            <div>
              <p className="text-4xl lg:text-6xl font-bold">books</p>
              <p className="text-sm lg:text-lg mt-3">Everything what do you want!</p>
            </div>

            <img src={require('../../assets/img/exc.png')} alt="" className="ml-4" />
          </div>

          <div className="flex space-x-4">
            <a href="#" className="flex text-lg font-bold hover:text-orange-400">
              <span className="mr-2">
                <SortSvg />
              </span>
              Sort by Name
            </a>
            <a href="#" className="flex text-lg font-bold hover:text-orange-400">
              <span className="mr-2">
                <SortSvg />
              </span>
              Sort by Date
            </a>
          </div>
        </div>

        <div className="relative px-10 md:px-20 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-20 gap-y-8">
          {displayBooks?.map((book) => (
            <Book
              key={book.id}
              owner={book.owner}
              name={book.name}
              description={book.description}
              totalPages={book.numpage}
              author={book.author}
              timestamp={book.timestamp}
            />
          ))}
          <LoadingOverlay active={isLoading} spinner className="loader" />
        </div>

        <Pagination books={books} displayBooks={displayBooks} setDisplayBooks={setDisplayBooks} />
      </div>
    </section>
  );
};
