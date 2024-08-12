import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import AuthorModal from '../components/Modals/AuthorsModal';

const Authors = () => {
  // Hook Navigate.
  const navigate = useNavigate();

  // States.
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Use Effect to display Authors.
  useEffect(() => {
    fetchAuthors();
  }, []);

  // Fetching Authors from the DB.
  const fetchAuthors = async () => {
    try {
      // Set loading state.
      setLoading(true);
      // Fetching the authors.
      const response = await axios.get("http://localhost:3001/authors");
      setAuthors(response.data);
    } catch (err) {
      console.error('Error fetching authors: ', err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewAuthor = () => {
    // Open Modal to add author.
    setIsOpen(true);
  };

  // Closing the modal.
  const closeModal = () => {
    setIsOpen(false);
    // Refresh the page to reflect changes.
    fetchAuthors();
  }

  const handleBack = () => {
    // Go back.
    navigate('/Dashboard');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Authors.jpg')" }}>
      <div className="bg-teal-100 p-6 rounded-md shadow-md w-[85%] h-[85%]">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-teal-600">Authors</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-teal-200">
                <th className="px-6 py-3 text-left text-teal-600">First Name</th>
                <th className="px-6 py-3 text-left text-teal-600">Last Name</th>
                <th className="px-6 py-3 text-left text-teal-600">Bio</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="px-6 py-4 text-center">Loading.....</td>
                </tr>
              ) : (
                authors.map((author) => (
                  <tr key={author.author_id}>
                    <td className="px-6 py-4">{author.first_name}</td>
                    <td className="px-6 py-4">{author.last_name}</td>
                    <td className="px-6 py-4">{author.bio}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button type='button' onClick={handleBack} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
            Back
          </button>
          <button type='button' onClick={handleNewAuthor} className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
            New Author
          </button>
        </div>
        <AuthorModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')} />
      </div>
    </div>
  );
};

export default Authors;
