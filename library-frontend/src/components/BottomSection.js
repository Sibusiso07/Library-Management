import React from 'react';
import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

const BottomSection = () => {
  const weeklyLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeklyData = [12, 19, 3, 5, 2, 3, 7];

  const pieLabels = ['Borrowed', 'Overdue', 'Available'];
  const pieData = [300, 50, 100];

  return (
    <div className="h-3/4 flex">
      <div className="w-4/5 p-4">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Graphs</h2>
          <div className="flex flex-row gap-4">
            <div className="h-[50%] w-[60%]">
              <LineChart labels={weeklyLabels} data={weeklyData} />
            </div>
            <div className="h-[50%] w-[30%]">
              <PieChart labels={pieLabels} data={pieData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
