import React from 'react';
import { useSelector } from 'react-redux';
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
