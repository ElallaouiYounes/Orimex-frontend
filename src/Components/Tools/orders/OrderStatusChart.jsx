import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { 
  FaCogs, 
  FaCheckCircle, 
  FaBoxOpen, 
  FaTimesCircle, 
  FaClock,
  FaTruck
} from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatusChart = ({ orders }) => {
  // Count orders by status
  const statusCounts = orders.reduce((acc, order) => {
    acc[order.status.name] = (acc[order.status.name] || 0) + 1;
    return acc;
  }, {});

  const statusIcons = {
    'In Production': <FaCogs className="text-purple-500" />,
    'Shipped': <FaTruck className="text-green-500" />,
    'Pending': <FaClock className="text-amber-500" />,
    'Confirmed': <FaCheckCircle className="text-blue-500" />,
    'Delivered': <FaBoxOpen className="text-teal-500" />,
    'Cancelled': <FaTimesCircle className="text-red-500" />
  };

  const data = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(139, 92, 246, 0.7)',  // purple
          'rgba(16, 185, 129, 0.7)',  // green
          'rgba(245, 158, 11, 0.7)', // amber
          'rgba(59, 130, 246, 0.7)',  // blue
          'rgba(20, 184, 166, 0.7)',  // teal
          'rgba(239, 68, 68, 0.7)'    // red
        ],
        borderColor: [
          'rgba(139, 92, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(20, 184, 166, 1)',
          'rgba(239, 68, 68, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: 'Inter, sans-serif'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '70%',
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Order Status Distribution</h3>
        <div className="text-sm text-gray-500">
          {orders.length} total orders
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 h-64">
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="space-y-4">
            {Object.entries(statusCounts).map(([status, count]) => (
              <div key={status} className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  {statusIcons[status]}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{status}</span>
                    <span className="font-semibold">{count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        width: `${(count / orders.length) * 100}%`,
                        backgroundColor: data.datasets[0].backgroundColor[
                          data.labels.indexOf(status)
                        ]
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusChart;