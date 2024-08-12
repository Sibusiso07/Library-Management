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
    backgroundColor: '#E6FFFA', // Green background color
    color: '#1a202c',
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

  // Handle add staff button.
  const handleAddStaff = async (e) => {
    e.preventDefault();
    const newStaff = { firstName, lastName, email, phone, position, password };
    await axios.post("http://localhost:3001/addStaff", { staff: newStaff });
    closeRequest();
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel="Add Staff Details">
      <div className="flex flex-col space-y-4">
        <button
          onClick={closeRequest}
          className="self-end bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
        <h1 className="text-2xl font-bold text-green-600 text-center">Add New Staff</h1>
        <form onSubmit={handleAddStaff} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-green-600">First Name:</label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-600">Last Name:</label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-600">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-600">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-600">Position:</label>
            <input
              id="position"
              name="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-green-600">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-green-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Add Staff
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default StaffModal;
