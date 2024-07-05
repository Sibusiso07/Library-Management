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

const StaffModal = ({ isOpen, closeRequest }) => {
  // States.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [password, setPassword] = useState('');

  // Handle add author button.
  const handleAddStaff = async (e) => {
    e.preventDefault();
    const newStaff = { firstName, lastName, email, phone, position, password };
    const response = await axios.post('/api/staff', newStaff);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setPosition('');
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel='Add Staff Details'>
      <div>
        <button onClick={closeRequest}>Close</button>
        <h1>Staff</h1>
        <form onSubmit={handleAddStaff}>
          <div>
            <label>First Name:</label>
            <input
              id='first-name'
              name='first-name'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              id='last-name'
              name='last-name'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              id='email'
              name='email'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              id='phone'
              name='phone'
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Position:</label>
            <input
              id='position'
              name='position'
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              id='password'
              name='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Add Staff</button>
        </form>
      </div>
    </Modal>
  );
};

export default StaffModal;
