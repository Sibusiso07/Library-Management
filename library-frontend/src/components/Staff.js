import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import StaffModal from './StaffModal';

const Staff = () => {
  // Hook Navigate.
  const navigate = useNavigate();

  // States.
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Use Effect to display Authors.
  useEffect(() => {
    fetchStaff();
  }, []);

  // Fetching Authors from the DB.
  const fetchStaff = async () => {
    try {
      // Set loading state.
      setLoading(true);

      const response = await axios.get('/api/staff');
      setStaff(response.data);
    } catch (err) {
      console.error('Error fetching staff: ', err);
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
        <h1>Staff</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading.....</td>
              </tr>
            ) : (
              staff.map((staffmember) => (
                <tr key={staffmember.staff_id}>
                  <td>{staffmember.first_name}</td>
                  <td>{staffmember.last_name}</td>
                  <td>{staffmember.email}</td>
                  <td>{staffmember.phone}</td>
                  <td>{staffmember.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button type='button' onClick={handleBack}>Back</button>
        <button type='button' onClick={handleNewMember}>New Staff</button>
      </div>
      <StaffModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')}/>
    </div>
  );
};

export default Staff;
