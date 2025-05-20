import React, { useState } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ProductCategoryChart = ({ products }) => {
  const [activeView, setActiveView] = useState('count'); // 'count' or 'stock'
  
  // Group products by category
  const categoryData = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {
        count: 0,
        stock: 0,
        items: []
      };
    }
    
    acc[product.category].count += 1;
    acc[product.category].stock += parseInt(product.stock);
    acc[product.category].items.push(product);
    
    return acc;
  }, {});
  
  // Create dataset based on active view
  const categories = Object.keys(categoryData);
  const dataValues = activeView === 'count' 
    ? categories.map(cat => categoryData[cat].count)
    : categories.map(cat => categoryData[cat].stock);
  
  // Calculate percentages for summary
  const totalCount = Object.values(categoryData).reduce((sum, cat) => sum + cat.count, 0);
  const totalStock = Object.values(categoryData).reduce((sum, cat) => sum + cat.stock, 0);
  
  // Custom colors
  const colorPalette = [
    '#3b82f6', // blue
    '#8b5cf6', // violet
    '#10b981', // emerald
    '#f59e0b', // amber
    '#ef4444', // red
    '#6366f1', // indigo
    '#ec4899', // pink
    '#14b8a6', // teal
  ];
  
  const data = {
    labels: categories,
    datasets: [
      {
        data: dataValues,
        backgroundColor: categories.map((_, i) => colorPalette[i % colorPalette.length]),
        borderWidth: 2,
        borderColor: '#fff',
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value * 100) / total);
            
            if (activeView === 'count') {
              return `${label}: ${value} products (${percentage}%)`;
            } else {
              return `${label}: ${value} units in stock (${percentage}%)`;
            }
          }
        }
      }
    },
    cutout: '70%',
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true
    }
  };

  // Summary cards for the display
  const SummaryCard = ({ title, value, percentage, color }) => (
    <div className="bg-gray-50 rounded-lg p-3 flex items-center">
      <div 
        className="w-3 h-10 rounded-md mr-3" 
        style={{ backgroundColor: color }}
      />
      <div>
        <h4 className="text-sm text-gray-500 font-medium">{title}</h4>
        <p className="text-lg font-semibold">{value}</p>
        <p className="text-xs text-gray-500">{percentage}%</p>
      </div>
    </div>
  );

  // Get top categories by the active metric
  const topCategories = [...categories]
    .sort((a, b) => {
      return activeView === 'count'
        ? categoryData[b].count - categoryData[a].count
        : categoryData[b].stock - categoryData[a].stock;
    })
    .slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-800 text-lg">Products by Category</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveView('count')}
            className={`px-3 py-1 text-sm rounded-md ${
              activeView === 'count' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Count
          </button>
          <button 
            onClick={() => setActiveView('stock')}
            className={`px-3 py-1 text-sm rounded-md ${
              activeView === 'stock' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Inventory
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="h-64 md:w-2/3">
          <Doughnut data={data} options={options} />
        </div>
        
        <div className="md:w-1/3 space-y-3 mt-4 md:mt-0">
          <h4 className="text-sm text-gray-500 font-medium">
            {activeView === 'count' ? 'Top Categories' : 'Top Inventory'}
          </h4>
          
          {topCategories.map((category, i) => (
            <SummaryCard
              key={category}
              title={category}
              value={activeView === 'count' 
                ? `${categoryData[category].count} products` 
                : `${categoryData[category].stock} units`
              }
              percentage={Math.round(
                activeView === 'count'
                  ? (categoryData[category].count / totalCount) * 100
                  : (categoryData[category].stock / totalStock) * 100
              )}
              color={colorPalette[i % colorPalette.length]}
            />
          ))}
          
          <div className="bg-gray-50 rounded-lg p-3 mt-2">
            <p className="text-sm text-gray-500">
              <span className="font-medium">Total:</span> {activeView === 'count' 
                ? `${totalCount} products` 
                : `${totalStock} units in stock`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryChart;