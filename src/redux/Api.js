const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/34NNN1uJAaAaYnbaqZwF/books';

const createBook = async (book) => {
  const result = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      author: book.author,
    }),
  });

  return result.status === 201;
};

const fetchBooks = async () => {
  const request = await fetch(url);
  const books = await request.json();
  return books;
};

const deleteBook = async (bookId) => {
  const result = await fetch(`${url}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });

  return result === 'Book deleted!';
};

export { createBook, fetchBooks, deleteBook };
