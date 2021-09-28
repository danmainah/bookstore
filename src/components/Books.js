import React from 'react';
import Addbook from './Addbook';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';

const content = [
    {
        id: uuidv4(),
        title: 'THe Flying Bus',
        author: 'Njamba nene',
      },
      {
        id: uuidv4(),
        title: 'Life in Crime',
        author: 'Kiriamiti',
      },
      {
        id: uuidv4(),
        title: 'River between',
        author: 'Ngugi wa thiongo',
      },
]

const Books = () => (  
  <ul>
    {content.map((book) => (
      <Book key={book.id} title={book.title}  author={book.author} />
    ))}
    <Addbook />
  </ul>
);

export default Books;