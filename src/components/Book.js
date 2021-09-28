import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <div>
    <li key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </li>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
