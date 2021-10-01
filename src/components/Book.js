import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start p-3 m-3">
        <div className="ms-2">
          <small><i>{book.category}</i></small>
          <div className="fw-bold text-black m-3">
            <h3>{book.title}</h3>
          </div>
          <button type="button" className="btn btn-link  rangi ">Comments</button>
          <button onClick={() => removeBookFromStore(book.item_id)} type="button" className="btn btn-link  rangi ">
            Remove
          </button>
          <button type="button" className="btn btn-link  rangi">Edit</button>
        </div>

        <div className="flexy mt-2">
          <div className="oval" />
          <div>
            <span className="percent">64%</span>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="d-flex row justify-content-right align-content-center mt-2">
          <span className="col text-center">Current Chapter</span>
          <span className="text-center"> 176 </span>
          <div className="col text-center">
            <span className="bluish w-50 text-center"><small>Update progress</small></span>
          </div>
        </div>

      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
