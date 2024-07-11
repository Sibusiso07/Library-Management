import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ labels, data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      // Cleanup previous chart instance
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Books',
            data: data,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(75, 192, 192)',
            ],
            hoverOffset: 4,
          }]
        }
      });

      // Return cleanup function
      return () => {
        chartInstance.destroy();
      };
    }
  }, [labels, data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
