import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ labels, data }) => {
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
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Weekly Transactions',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          scales: {
            x: {
              type: 'category',
              labels: labels,
            },
            y: {
              beginAtZero: true,
            },
          },
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

export default LineChart;
