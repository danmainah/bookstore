import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Addbook from './Addbook';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <Addbook />
    </ul>
  );
};

export default BookList;
