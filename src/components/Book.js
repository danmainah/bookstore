import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { BsFillArchiveFill } from 'react-icons/bs';
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
          <div className="fw-bold rangi m-3">
            <h3>{book.title}</h3>
          </div>
        </div>
        <button onClick={() => removeBookFromStore(book.item_id)} type="button" className="btn btn-link fw-bold text-danger mt-4">
          Remove
          <BsFillArchiveFill />
        </button>
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
