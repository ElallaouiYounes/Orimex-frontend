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

const ProductStockChart = ({ products }) => {
  // Sort products by stock and take top 8
  const topProducts = [...products]
    .sort((a, b) => b.stock - a.stock)
    .slice(0, 8);

  // Premium color gradient function
  const getGradient = (ctx) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)');
    return gradient;
  };

  const data = {
    labels: topProducts.map(p => p.productId),
    datasets: [{
      label: 'Stock Quantity',
      data: topProducts.map(p => p.stock),
      backgroundColor: (context) => getGradient(context.chart.ctx),
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
      borderRadius: 6,
      hoverBackgroundColor: 'rgba(59, 130, 246, 1)',
      fill: true
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} units`,
          afterLabel: (context) => {
            const product = topProducts[context.dataIndex];
            return `${product.name}\n${product.category} • ${product.status}`;
          }
        },
        displayColors: false,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        bodyFont: { size: 14 },
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { 
          color: 'rgba(203, 213, 225, 0.3)',
          drawTicks: false
        },
        ticks: {
          color: '#64748b',
          callback: (value) => `${value}`
        }
      },
      x: {
        grid: { display: false },
        ticks: { 
          color: '#64748b',
          font: { weight: '500' }
        }
      }
    },
    animation: {
      delay: (context) => context.dataIndex * 100
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Top Products by Stock</h3>
          <p className="text-sm text-gray-500 mt-1">
            Showing {topProducts.length} of {products.length} products
          </p>
        </div>
        <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
          Total: {topProducts.reduce((sum, p) => sum + p.stock, 0)} units
        </div>
      </div>

      <div className="h-72">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.productId}
            whileHover={{ y: -2 }}
            className="px-3 py-2 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
                {product.productId}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {product.stock} units
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductStockChart;