import React from 'react';
import Header from '../components/Header';

const SettingsPage = () => {
  return (
    <div className="">
      <div className="">
        <Header title="Settings" />
      </div>
      <div className="px-3.5 py-1 h-full bg-gray-200">
        <div className="bg-white rounded-lg p-8 shadow-sm m-4">
          <h2 className="text-2xl font-semibold text-bill-dark mb-4">Settings</h2>
          <p className="text-gray-600">Settings functionality will be implemented here.</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;


