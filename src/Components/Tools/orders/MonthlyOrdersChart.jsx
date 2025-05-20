import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip,
  Filler
} from 'chart.js';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Filler
);

const MonthlyOrdersChart = ({ orders }) => {
  // Enhanced month grouping with year consideration
  const monthlyData = orders.reduce((acc, order) => {
    const date = new Date(order.orderDate);
    const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
    acc[monthYear] = (acc[monthYear] || 0) + 1;
    return acc;
  }, {});

  // Gradient function for bars
  const getGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(74, 118, 222, 0.8)');
    gradient.addColorStop(1, 'rgba(74, 118, 222, 0.2)');
    return gradient;
  };

  const data = {
    labels: Object.keys(monthlyData),
    datasets: [
      {
        label: 'Orders',
        data: Object.values(monthlyData),
        backgroundColor: (context) => getGradient(context.chart.ctx),
        borderColor: 'rgba(74, 118, 222, 1)',
        borderWidth: 1,
        borderRadius: 12,
        hoverBackgroundColor: 'rgba(74, 118, 222, 1)',
        fill: true
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} orders`,
          title: (context) => context[0].label
        },
        displayColors: false,
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        bodyFont: { 
          family: 'Inter, sans-serif',
          size: 14,
          weight: '600'
        },
        padding: 12,
        cornerRadius: 8,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(229, 231, 235, 0.5)',
          drawTicks: false
        },
        ticks: {
          color: '#6B7280',
          font: {
            family: 'Inter, sans-serif'
          }
        }
      },
      x: {
        grid: { display: false },
        ticks: {
          color: '#6B7280',
          font: {
            family: 'Inter, sans-serif',
            weight: '500'
          }
        }
      }
    },
    animation: {
      delay: (context) => context.dataIndex * 50
    }
  };

  // Calculate percentage change
  const calculateTrend = () => {
    const months = Object.keys(monthlyData);
    if (months.length < 2) return 0;
    const current = monthlyData[months[months.length-1]];
    const previous = monthlyData[months[months.length-2]];
    return ((current - previous) / previous * 100).toFixed(1);
  };

  const trend = calculateTrend();
  const isPositive = trend >= 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Monthly Order Volume</h3>
          <p className="text-sm text-gray-500 mt-1">
            {Object.values(monthlyData).reduce((a, b) => a + b, 0)} total orders
          </p>
        </div>
        {!isNaN(trend) && (
          <div className={`flex items-center px-3 py-1 rounded-full ${isPositive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            <span className="text-sm font-medium">
              {isPositive ? '+' : ''}{trend}%
            </span>
            <svg 
              className={`w-4 h-4 ml-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isPositive ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
              />
            </svg>
          </div>
        )}
      </div>

      <div className="flex-1 min-h-[250px]">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Peak: {Math.max(...Object.values(monthlyData))} orders</span>
          <span>Avg: {Math.round(Object.values(monthlyData).reduce((a, b) => a + b, 0) / Object.keys(monthlyData).length)} orders/mo</span>
        </div>
      </div>
    </motion.div>
  );
};

export default MonthlyOrdersChart;