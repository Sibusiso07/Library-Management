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
    backgroundColor: '#1a202c',
    color: 'white',
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

  // Handle add author button.
  const handleAddBook = async (e) => {
    e.preventDefault();
    const newBook = { title, authorId, publisherId, ISBN, publicationYear, categoryId, copiesAvailable };
    const response = await axios.post('/api/books', newBook);
    setTitle('');
    setAuthorId('');
    setPublisherId('');
    setISBN('');
    setPublicationYear('');
    setCategoryId('');
    setCopiesAvailable('');
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel='Add Book Details'>
      <div>
        <button onClick={closeRequest}>Close</button>
        <h1>Add New Book</h1>
        <form onSubmit={handleAddBook}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Author ID:</label>
          <input
            type="number"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
          />
        </div>
        <div>
          <label>Publisher ID:</label>
          <input
            type="number"
            value={publisherId}
            onChange={(e) => setPublisherId(e.target.value)}
          />
        </div>
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            value={ISBN}
            onChange={(e) => setISBN(e.target.value)}
          />
        </div>
        <div>
          <label>Publication Year:</label>
          <input
            type="number"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
          />
        </div>
        <div>
          <label>Category ID:</label>
          <input
            type="number"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </div>
        <div>
          <label>Copies Available:</label>
          <input
            type="number"
            value={copiesAvailable}
            onChange={(e) => setCopiesAvailable(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
      </div>
    </Modal>
  );
};

export default BooksModal;
