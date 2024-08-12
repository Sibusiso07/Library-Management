import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

// Set the app element to your main content's root element
Modal.setAppElement('#root');

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#E6FFFA', // Emerald background color
    color: '#1a202c',
    borderRadius: '10px',
    padding: '20px',
    width: '80%', // Adjust width to your preference
    maxWidth: '600px', // Adjust maxWidth to your preference
  },
};

const BooksModal = ({ isOpen, closeRequest }) => {
  // States.
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [publisherId, setPublisherId] = useState('');
  const [ISBN, setISBN] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [copiesAvailable, setCopiesAvailable] = useState('');

  // Handle add book button.
  const handleAddBook = async (e) => {
    e.preventDefault();
    const newBook = { title, authorId, publisherId, ISBN, publicationYear, categoryId, copiesAvailable };
    await axios.post("http://localhost:3001/addBook", { book: newBook });
    closeRequest();
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel="Add Book Details">
      <div className="flex flex-col space-y-4">
        <button
          onClick={closeRequest}
          className="self-end bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
        <h1 className="text-2xl font-bold text-emerald-600 text-center">Add New Book</h1>
        <form onSubmit={handleAddBook} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-emerald-600">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">Author ID:</label>
            <input
              type="number"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">Publisher ID:</label>
            <input
              type="number"
              value={publisherId}
              onChange={(e) => setPublisherId(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">ISBN:</label>
            <input
              type="text"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">Publication Year:</label>
            <input
              type="number"
              value={publicationYear}
              onChange={(e) => setPublicationYear(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">Category ID:</label>
            <input
              type="number"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-emerald-600">Copies Available:</label>
            <input
              type="number"
              value={copiesAvailable}
              onChange={(e) => setCopiesAvailable(e.target.value)}
              className="border border-emerald-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Add Book
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default BooksModal;
