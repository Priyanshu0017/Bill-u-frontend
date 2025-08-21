import React from 'react';

// Mock data for the popular shops
const popularShopsData = [
  { name: 'Shop Name', customers: 626, revenue: 27874.00 },
  { name: 'Another Shop', customers: 512, revenue: 25130.50 },
  { name: 'Top Retailer', customers: 489, revenue: 22450.00 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
  { name: 'Best Buys', customers: 450, revenue: 21800.75 },
];

const PopularShops = () => {
  const formatCurrency = (amount) => {
    return `₹ ${new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
  };

  return (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100 col-span-1" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)' }}>
      <h3 className="text-base md:text-lg tracking-wider mb-4 md:mb-8">Popular Shops</h3>
    <div className="space-y-3 md:space-y-4 mb-1.5 max-h-76 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-md">
        {popularShopsData.map((shop, index) => (
          <div key={index} className="flex px-4 md:px-5 items-center justify-between p-2.5 md:p-3 bg-gray-50/70 rounded-lg">
            <div className="flex items-center space-x-2.5 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-lg"></div>
              <div>
                <p className="text-sm md:text-md">{shop.name}</p>
                <p className="text-[10px] md:text-xs text-gray-500">{shop.customers} customers</p>
              </div>
            </div>
            <p className="font-semibold text-xs md:text-sm text-bill-dark">{formatCurrency(shop.revenue)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularShops;