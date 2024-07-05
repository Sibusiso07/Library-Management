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

const MembersModal = ({ isOpen, closeRequest }) => {
  // States.
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [membershipDate, setMembershipDate] = useState('');

  // Handle add author button.
  const handleAddMember = async (e) => {
    e.preventDefault();
    const newMember = { firstName, lastName, email, phone, address, membershipDate };
    const response = await axios.post('/api/members', newMember);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setMembershipDate('');
  };

  return (
    <Modal isOpen={isOpen} closeRequest={closeRequest} style={customStyles} contentLabel='Add Member Details'>
      <div>
        <button onClick={closeRequest}>Close</button>
        <h2>Members</h2>
      <form onSubmit={handleAddMember}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Membership Date:</label>
          <input
            type="date"
            value={membershipDate}
            onChange={(e) => setMembershipDate(e.target.value)}
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
      </div>
    </Modal>
  );
};

export default MembersModal;
