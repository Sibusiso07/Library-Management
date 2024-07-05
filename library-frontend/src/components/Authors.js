import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// Components.
import AuthorModal from './AuthorsModal';

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

      const response = await axios.get('/api/authors');
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
  }

  const handleBack = () => {
    // Go back.
    navigate('/Dashboard');
  }

  return (
    <div>
      <div>
        <h1>Authors</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td>Loading.....</td>
              </tr>
            ) : (
              authors.map((author) => (
                <tr key={author.author_id}>
                  <td>{author.first_name}</td>
                  <td>{author.last_name}</td>
                  <td>{author.bio}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div>
        <button type='button' onClick={handleBack}>Back</button>
        <button type='button' onClick={handleNewAuthor}>New Author</button>
      </div>
      <AuthorModal isOpen={isOpen} closeRequest={closeModal} appElement={document.getElementById('root')}/>
    </div>
  );
};

export default Authors;
