import React from 'react';
import { Eye } from 'lucide-react';

// Mock data for active shops
const activeShopsData = [
  { name: 'Billrox', id: '#1516165161', owner: 'Amit verma', status: 'Active' },
  { name: 'FreshMart', id: '#1516165162', owner: 'Priya Singh', status: 'Active' },
  { name: 'GadgetZone', id: '#1516165163', owner: 'Rohan Sharma', status: 'Deactive' },
  { name: 'StyleHub', id: '#1516165164', owner: 'Amit verma', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
  { name: 'BookHaven', id: '#1516165165', owner: 'Sneha Patel', status: 'Active' },
];

const StatusPill = ({ status }) => {
  const isActive = status === 'Active';
  const pillClasses = isActive 
    ? 'bg-[#A5CD97] text-green-900' 
    : 'bg-[#FF9FA0] text-red-800';

  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${pillClasses}`}>
      {status}
    </span>
  );
};

const ActiveShopOption = ({ shop }) => (
  <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center bg-gray-50 rounded-lg px-3 py-3 mb-2">
    <div className="flex items-center min-w-0 md:min-w-[120px]">
      <div className="w-5 h-5 bg-yellow-400 rounded-md flex-shrink-0 mr-2"></div>
      <span className="font-semibold text-[11px] text-bill-dark truncate">{shop.name}</span>
    </div>
    <div className="hidden md:flex items-center justify-center">
      <span className="text-[11px] text-gray-600 truncate">{shop.id}</span>
    </div>
    <div className="hidden md:flex items-center justify-center">
      <span className="text-[11px] text-gray-600 truncate">{shop.owner}</span>
    </div>
    <div className="flex items-center justify-center">
      <StatusPill status={shop.status} />
    </div>
    <div className="flex items-center justify-center">
      <button className="text-gray-400 hover:text-bill-dark">
        <Eye className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const ActiveShopsTable = () => {
  return (
  <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-100" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.20)' }}>
      <h3 className="text-base md:text-lg tracking-wider text-bill-dark mb-3 md:mb-4">Active Shops</h3>
      {/* Scrollable Headings + Options */}
      <div className="max-h-90 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-md">
        <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr] text-sm md:text-base text-gray-700 mb-3 px-3 py-1 bg-gray-50 rounded-lg sticky top-0 z-10">
          <div className="flex items-center">Shop Name</div>
          <div className="hidden md:flex items-center justify-center">Shop ID</div>
          <div className="hidden md:flex items-center justify-center">Owner</div>
          <div className="flex items-center justify-center">Status</div>
          <div className="flex items-center justify-center">Actions</div>
        </div>
        {activeShopsData.map((shop, index) => (
          <ActiveShopOption key={index} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default ActiveShopsTable;