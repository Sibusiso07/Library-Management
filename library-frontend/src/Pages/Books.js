import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import BooksModal from '../components/Modals/BooksModal';

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
      // Fetching the authors.
      const response = await axios.get("http://localhost:3001/books");
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
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Books.jpg')" }}>
      <div className="bg-emerald-100 p-6 rounded-md shadow-md w-[85%] h-[85%]">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-emerald-600">Books</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-emerald-200">
                <th className="px-6 py-3 text-left text-emerald-600">Title</th>
                <th className="px-6 py-3 text-left text-emerald-600">Author</th>
                <th className="px-6 py-3 text-left text-emerald-600">Genre</th>
                <th className="px-6 py-3 text-left text-emerald-600">Published Year</th>
                <th className="px-6 py-3 text-left text-emerald-600">ISBN</th>
                <th className="px-6 py-3 text-left text-emerald-600">Copies</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center">Loading.....</td>
                </tr>
              ) : (
                books.map((book) => (
                  <tr key={book.book_id}>
                    <td className="px-6 py-4">{book.title}</td>
                    <td className="px-6 py-4">{book.author_id}</td>
                    <td className="px-6 py-4">{book.genre}</td>
                    <td className="px-6 py-4">{book.published_year}</td>
                    <td className="px-6 py-4">{book.isbn}</td>
                    <td className="px-6 py-4">{book.copies}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button type='button' onClick={handleBack} className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Back
          </button>
          <button type='button' onClick={handleNewBook} className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            New Book
          </button>
        </div>
        <BooksModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')} />
      </div>
    </div>
  );
};

export default Books;
