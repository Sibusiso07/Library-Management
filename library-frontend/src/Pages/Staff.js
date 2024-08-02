import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import StaffModal from '../components/Modals/StaffModal';

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
      // Fetching the authors.
      const response = await axios.get("http://localhost:3001/staff");
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
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Staff.jpg')" }}>
      <div className="bg-green-100 p-6 rounded-md shadow-md w-[85%] h-[85%]">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-green-600">Staff</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-200">
                <th className="px-6 py-3 text-left text-green-600">First Name</th>
                <th className="px-6 py-3 text-left text-green-600">Last Name</th>
                <th className="px-6 py-3 text-left text-green-600">Email</th>
                <th className="px-6 py-3 text-left text-green-600">Phone</th>
                <th className="px-6 py-3 text-left text-green-600">Position</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center">Loading.....</td>
                </tr>
              ) : (
                staff.map((staffmember) => (
                  <tr key={staffmember.staff_id}>
                    <td className="px-6 py-4">{staffmember.first_name}</td>
                    <td className="px-6 py-4">{staffmember.last_name}</td>
                    <td className="px-6 py-4">{staffmember.email}</td>
                    <td className="px-6 py-4">{staffmember.phone}</td>
                    <td className="px-6 py-4">{staffmember.role}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button type='button' onClick={handleBack} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            Back
          </button>
          <button type='button' onClick={handleNewMember} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">
            New Staff Member
          </button>
        </div>
        <StaffModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')} />
      </div>
    </div>
  );
};

export default Staff;
