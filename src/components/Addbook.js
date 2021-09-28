import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';






const AddBook = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const submitBookToStore = (e) => {
        e.preventDefault();
        const newBook = {
          id: uuidv4(), // make sure it's unique
          title: title,
          author: author,
        };
        // dispatch an action and pass it the newBook object (your action's payload)
        dispatch(addBook(newBook));
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
      };

    return (
        <form className="row g-3 " onSubmit={submitBookToStore} >
           <div className="col-auto">
             <h3>Add Book</h3>
             <input className="add-book" placeholder="Add Title" value = {title}/>
             <input className="add-book" placeholder="Add Author" value = {author} />
             <button type='button'> Add Book</button>
          </div>
       </form>);
};

export default AddBook;
