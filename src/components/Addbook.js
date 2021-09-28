import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id, // make sure it's unique
    title,
    author,
  };
  // dispatch an action and pass it the newBook object (your action's payload)
  dispatch(addBook(newBook));
};

const AddBook = (prop) => {
    const [inputBook, setInputBook] = useState({
        title: '',
        author: '',
      });

    return (
        <form className="row g-3">
           <div className="col-auto">
             <h3>Add Book</h3>
             <input className="add-book" placeholder="Add Title" />
             <button onClick={submitBookToStore} type='button'> Add Book</button>
          </div>
       </form>),
};

export default AddBook;
