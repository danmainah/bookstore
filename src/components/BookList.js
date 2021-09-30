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
    <ul className="Link-group bg-light m-3 p-3">
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <hr />
      <Addbook />
    </ul>
  );
};

export default BookList;
