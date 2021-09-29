import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const { data } = await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdCsYxn8PE/books',
    payload,
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  );
  if (data === 'book added') {
    dispatch({ type: ADD_BOOK, payload });
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const { data } = await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdCsYxn8PE/books/${payload}`,
  );
  if (data === 'book deleted') {
    dispatch({ type: REMOVE_BOOK, payload });
  }
};

export const getBooks = () => async (dispatch) => {
  const { data } = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GdCsYxn8PE/books',
  );
  const fBooks = [];
  Object.keys(data).forEach((key) => {
    if (key) {
      fBooks.push({ ...data[key][0], item_id: key });
    }
  });
  dispatch({ type: GET_BOOKS, payload: fBooks });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    case GET_BOOKS:
      return payload;
    default:
      return state;
  }
};

export default reducer;
