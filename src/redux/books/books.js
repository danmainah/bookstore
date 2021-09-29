import { createBook, fetchBooks, deleteBook } from '../Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (book) => async (dispatch) => {
  const result = await createBook(book);
  if (result) {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  }
};

export const removeBook = (book) => async (dispatch) => {
  const removed = await deleteBook(book);
  if (removed) {
    dispatch({
      type: REMOVE_BOOK,
      payload: book,
    });
  }
};

export const getBooks = () => async (dispatch) => {
  const entries = fetchBooks();
  const books = Object.entries(entries).map(([key, value]) => {
    const [bookEntries] = value;
    return {
      item_id: key,
      ...bookEntries,
    };
  });

  if (books) {
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.book.item_id);
    case GET_BOOKS:
      return [...state, ...action.book];
    default:
      return state;
  }
};

export default reducer;
