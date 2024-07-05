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

const AuthorModal = ({ isOpen, closeRequest }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [bio, setBio] = useState('');

  // Handle add author button.
  const handleAddAuthor = async (e) => {
    e.preventDefault();
    const newAuthor = { firstname, lastname, bio };
    const response = await axios.post('/api/authors', newAuthor);
    setFirstname('');
    setLastname('');
    setBio('');
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel='Add Author Details'>
      <div>
        <button onClick={closeRequest}>Close</button>
        <h1>Add New Author</h1>
        <form onSubmit={handleAddAuthor}>
          <div>
            <label>Fisrt Name: </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label>Bio: </label>
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <button type="submit">Add Author</button>
        </form>
      </div>
    </Modal>
  );
};

export default AuthorModal;
