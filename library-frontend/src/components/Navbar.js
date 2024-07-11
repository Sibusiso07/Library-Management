import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="h-screen bg-gray-800 text-white w-1/5 p-4 flex flex-col justify-between">
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Library System</h1>
      </div>
    </div>
    <div className="flex-grow flex flex-col justify-center">
      <ul>
        <li className="mb-4"><Link to="/authors" className="hover:text-teal-400 text-2xl">Authors</Link></li>
        <li className="mb-4"><Link to="/books" className="hover:text-emerald-400 text-2xl">Books</Link></li>
        <li className="mb-4"><Link to="/members" className="hover:text-cyan-400 text-2xl">Members</Link></li>
        <li className="mb-4"><Link to="/staff" className="hover:text-green-400 text-2xl">Staff</Link></li>
        <li><Link to="/transactions" className="hover:text-indigo-400 text-2xl">Transactions</Link></li>
      </ul>
    </div>
    <div className="mb-4">
      <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
        Logout
      </button>
    </div>
  </div>
);

export default Navbar;
