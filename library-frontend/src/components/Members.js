import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import MembersModal from './MembersModal';

const Members = () => {
  // Hook Navigate.
  const navigate = useNavigate();

  // States.
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Use Effect to display Authors.
  useEffect(() => {
    fetchMembers();
  }, []);

  // Fetching Authors from the DB.
  const fetchMembers = async () => {
    try {
      // Set loading state.
      setLoading(true);

      const response = await axios.get('/api/members');
      setMembers(response.data);
    } catch (err) {
      console.error('Error fetching members: ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewMember = () => {
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
        <h1>Members</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading.....</td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.member_id}>
                  <td>{member.first_name}</td>
                  <td>{member.last_name}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.join_date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button type='button' onClick={handleBack}>Back</button>
        <button type='button' onClick={handleNewMember}>New Member</button>
      </div>
      <MembersModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')}/>
    </div>
  );
};

export default Members;
