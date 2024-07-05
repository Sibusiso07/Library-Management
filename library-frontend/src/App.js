import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components or Routes.
import Login from './components/Login';
import Authors from './components/Authors';
import Books from './components/Books';
import Members from './components/Members';
import Staff from './components/Staff';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Authors" element={<Authors />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
