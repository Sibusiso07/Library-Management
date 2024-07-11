import React, { useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');
  const [action, setAction] = useState('borrow');

  const handleTransaction = async (e) => {
    e.preventDefault();
    const transactionData = { memberId, bookId, action };
    const response = await axios.post('/api/transactions', transactionData);
    setMemberId('');
    setBookId('');
    setAction('borrow');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/Transaction.jpg')" }}>
      <div className="bg-teal-100 p-6 rounded-md shadow-md w-4/5 md:w-1/2 lg:w-1/3">
        <h1 className="text-center text-3xl font-bold text-teal-600 mb-6">Transactions</h1>
        <form onSubmit={handleTransaction} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="memberId" className="text-teal-600">Member:</label>
            <div className="flex">
              <input
                id="memberId"
                type="text"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 flex-grow"
              />
              <button type="button" className="ml-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="bookId" className="text-teal-600">Book:</label>
            <div className="flex">
              <input
                id="bookId"
                type="text"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 flex-grow"
              />
              <button type="button" className="ml-2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
                Search
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="action" className="text-teal-600">Action:</label>
            <select
              id="action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="border border-teal-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <option value="borrow">Borrow</option>
              <option value="return">Return</option>
            </select>
          </div>
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transactions;
