import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Addbook from './Addbook';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
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
