import React from 'react';

const StatCard = ({ title, value, percentage, isCurrency = false, isLoss = false }) => {
  const percentageColor = isLoss ? 'text-red-500' : 'text-green-500';

  return (
  <div className="bg-white p-4 md:px-4 md:py-6 rounded-lg" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)' }}>
      <h3 className="text-md font-mono text-gray-700">{title}</h3>
      <div className="flex items-baseline space-x-1 pt-4 md:pt-10">
        <p className="text-3xl font-bold text-bill-dark">
          {isCurrency && '₹'}{value}
        </p>
        <span className={`text-xs  ${percentageColor}`}>
          (+{percentage}%)
        </span>
      </div>
    </div>
  );
};

export default StatCard;