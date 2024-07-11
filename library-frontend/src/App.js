import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components or Routes.
import Login from './Pages/Login';
import Authors from './Pages/Authors';
import Books from './Pages/Books';
import Members from './Pages/Members';
import Staff from './Pages/Staff';
import Transactions from './Pages/Transactions';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
