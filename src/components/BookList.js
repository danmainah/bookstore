import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Addbook from './Addbook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
 

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <Addbook />
    </ul>
  );
};

export default Books;
