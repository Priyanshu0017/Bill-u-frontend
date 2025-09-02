import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { useAuth } from './AuthContext';

const Header = ({ title = "Dashboard" }) => {
  const { user } = useAuth();
  return (
    <header className="flex justify-between items-center pt-5 pb-2 px-4 md:py-5 md:px-6">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="flex items-center px-2 py-1 md:px-5 md:py-2 text-gray-500 text-[10px] md:text-sm border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
          <RefreshCcw className="w-3.5 text-black h-3.5 mr-2" />
          <span className="hidden sm:inline">Refresh</span>
        </button>
        <div className="flex items-center space-x-2">
          <div className='text-right'>
            <div className="font-semibold text-[10px] md:text-xs pl-3 md:pl-5.5">
              {user?.role || user?.user?.role || 'Role'}
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Hi, {user?.name || user?.user?.name || 'User'}
            </div>
          </div>
          <img
            src={`https://i.pravatar.cc/40?u=${user?.name || user?.user?.name || 'user'}`}
            alt={user?.name || user?.user?.name || 'User'}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;