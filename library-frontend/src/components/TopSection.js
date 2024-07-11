import React from 'react';

const TopSection = () => (
  <div className="flex flex-col justify-center h-1/4 w-4/5 p-4">
    <h1 className="text-4xl font-bold mb-6 mt-10 pt-6">Dashboard</h1>
    <div className="flex gap-6 items-center">
      <div className="flex flex-col w-1/4">
        <div className="bg-green-500  h-24 flex justify-center items-center shadow-md text-white">
          Total Books Borrowed
        </div>
        <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
          More Info
        </button>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="bg-green-500  h-24 flex justify-center items-center shadow-md text-white">
          Books Borrowed Today
        </div>
        <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
          More Info
        </button>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="bg-green-500  h-24 flex justify-center items-center shadow-md text-white">
          Books Returned Today
        </div>
        <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
          More Info
        </button>
      </div>
      <div className="flex flex-col w-1/4">
        <div className="bg-green-500  h-24 flex justify-center items-center shadow-md text-white">
          Total Daily Transactions
        </div>
        <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">
          More Info
        </button>
      </div>
    </div>
  </div>
);

export default TopSection;
