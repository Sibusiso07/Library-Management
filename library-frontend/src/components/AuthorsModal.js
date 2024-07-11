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
    backgroundColor: '#E3FDFD', // Background color from the nature palette
    color: '#1a202c',
    borderRadius: '10px',
    padding: '20px',
    width: '80%', // Adjust width to your preference
    maxWidth: '600px', // Adjust maxWidth to your preference
  },
};

const AuthorModal = ({ isOpen, closeRequest }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [bio, setBio] = useState('');

  // Handle add author button.
  const handleAddAuthor = async (e) => {
    e.preventDefault();
    const newAuthor = { firstname, lastname, bio };
    await axios.post('/api/authors', newAuthor);
    closeRequest();
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel="Add Author Details">
      <div className="flex flex-col space-y-4">
        <button
          onClick={closeRequest}
          className="self-end bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
        <h1 className="text-2xl font-bold text-teal-600 text-center">Add New Author</h1>
        <form onSubmit={handleAddAuthor} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-teal-600">First Name:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-teal-600">Last Name:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-teal-600">Bio:</label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Add Author
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AuthorModal;
