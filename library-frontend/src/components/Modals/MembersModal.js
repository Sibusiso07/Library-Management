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
    backgroundColor: '#E0F7FA', // Cyan background color
    color: '#1a202c',
    borderRadius: '10px',
    padding: '20px',
    width: '80%', // Adjust width to your preference
    maxWidth: '600px', // Adjust maxWidth to your preference
  },
};

const MembersModal = ({ isOpen, closeRequest }) => {
  // States.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');

  // Handle add member button.
  const handleAddMember = async (e) => {
    e.preventDefault();
    const newMember = { firstName, lastName, email, phone};
    await axios.post("http://localhost:3001/addMember", { member: newMember });
    closeRequest();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeRequest} style={customStyles} contentLabel="Add Member Details">
      <div className="flex flex-col space-y-4">
        <button
          onClick={closeRequest}
          className="self-end bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Close
        </button>
        <h1 className="text-2xl font-bold text-cyan-600 text-center">Add New Member</h1>
        <form onSubmit={handleAddMember} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-cyan-600">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-cyan-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-cyan-600">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-cyan-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-cyan-600">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-cyan-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-cyan-600">Phone Number:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-cyan-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          {/* <div className="flex flex-col">
            <label className="text-cyan-600">Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-cyan-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div> */}
          <button
            type="submit"
            className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Add Member
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default MembersModal;
