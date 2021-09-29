import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title: title || 'Things Fall Apart',
      author: author || 'Chinua Achebe',
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <div className="col-auto">
        <h3>Add Book</h3>
        <input className="add-book" placeholder="Add Title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
        <input className="add-book" placeholder="Add Author" value={author} type="text" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit"> Add Book</button>
      </div>
    </form>
  );
};

export default AddBook;
