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
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Members.jpg')" }}>
      <div className="bg-cyan-100 p-6 rounded-md shadow-md w-[85%] h-[85%]">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-cyan-600">Members</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-cyan-200">
                <th className="px-6 py-3 text-left text-cyan-600">First Name</th>
                <th className="px-6 py-3 text-left text-cyan-600">Last Name</th>
                <th className="px-6 py-3 text-left text-cyan-600">Email</th>
                <th className="px-6 py-3 text-left text-cyan-600">Phone</th>
                <th className="px-6 py-3 text-left text-cyan-600">Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center">Loading.....</td>
                </tr>
              ) : (
                members.map((member) => (
                  <tr key={member.member_id}>
                    <td className="px-6 py-4">{member.first_name}</td>
                    <td className="px-6 py-4">{member.last_name}</td>
                    <td className="px-6 py-4">{member.email}</td>
                    <td className="px-6 py-4">{member.phone}</td>
                    <td className="px-6 py-4">{member.join_date}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button type='button' onClick={handleBack} className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Back
          </button>
          <button type='button' onClick={handleNewMember} className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            New Member
          </button>
        </div>
        <MembersModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')} />
      </div>
    </div>
  );
};

export default Members;
