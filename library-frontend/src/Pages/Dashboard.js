import React from 'react';

// Component imports.
import Navbar from '../components/Navbar';
import BottomSection from '../components/BottomSection';
import TopSection from '../components/TopSection';

const Dashboard = () => (
  <div className="flex h-screen w-full">
    <Navbar />
    <div className="flex flex-col gap-16 w-[75%]">
      <TopSection />
      <BottomSection />
    </div>
  </div>
);

export default Dashboard;
