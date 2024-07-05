import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import BooksModal from './BooksModal';

const Books = () => {
  // Hook Navigate.
  const navigate = useNavigate();

  // States.
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Use Effect to display Authors.
  useEffect(() => {
    fetchBooks();
  }, []);

  // Fetching Authors from the DB.
  const fetchBooks = async () => {
    try {
      // Set loading state.
      setLoading(true);

      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (err) {
      console.error('Error fetching books: ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewBook = () => {
    // Open Modal to add author.
    setIsOpen(true);
  };

  // Closing the modal.
  const closeModal = () => {
    setIsOpen(false);
  }

  const handleBack = () => {
    // Go back.
    navigate('/Dashboard');
  }

  return (
    <div>
      <div>
        <h1>Books</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Published Year</th>
              <th>ISBN</th>
              <th>Copies</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading.....</td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.book_id}>
                  <td>{book.title}</td>
                  <td>{book.author_id}</td>
                  <td>{book.genre}</td>
                  <td>{book.published_year}</td>
                  <td>{book.isbn}</td>
                  <td>{book.copies}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button type='button' onClick={handleBack}>Back</button>
        <button type='button' onClick={handleNewBook}>New Book</button>
      </div>
      <BooksModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')}/>
    </div>
  );
};

export default Books;
