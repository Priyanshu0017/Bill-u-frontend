import React from "react";
import Header from "../components/Header";

import SalesChart from "../components/SalesChart";
import PopularShops from "../components/PopularShops";
import ActiveShopsTable from "../components/ActiveShopsTable";
import RecentFeed from "../components/RecentFeed";
import { ChevronDown, Plus, ArrowRight } from "lucide-react";
import Overview from "../components/Overview";

const DashboardPage = () => {
  const stats = [
    { title: "Total Shops", value: "500", percentage: "0.00" },
    {
      title: "Total Sales",
      value: "12,22,553",
      percentage: ".00",
      isCurrency: true,
    },
    {
      title: "Total Customer",
      value: "9593",
      percentage: "0.00",
      isLoss: true,
    },
    { title: "Total orders", value: "6549", percentage: "0.00" },
    { title: "Active Campaigns", value: "42", percentage: "0.00" },
  ];

  return (
    <div className="">
      <div className="">
        <Header title="Dashboard" />
      </div>

      <div className="px-3.5 py-1 bg-gray-200">
        <section className="rounded-2xl bg-white px-4 sm:px-6 lg:px-15 py-6 md:py-8 mt-2">
          <Overview stats={stats} />
        </section>

        <section className="mt-3">
          {/* This is the single container div for all 4 components AND the buttons */}
          <div className="bg-white py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-15 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg">
                <span className="text-gray-500">This Week</span>
                <ChevronDown className="pt-0.5 align-middle text-gray-500" />
              </button>
            </div>

            {/* Responsive layout: stack on mobile, split on md+ */}
            <div className="flex flex-col pt-4 gap-4">
              {/* First row: SalesChart and PopularShops, stack on mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <SalesChart />
                </div>
                <div>
                  <PopularShops />
                </div>
              </div>
              {/* Second row: ActiveShopsTable (2/3) and RecentFeed (1/3) on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="md:col-span-2">
                  <ActiveShopsTable />
                </div>
                <div className="md:col-span-1">
                  <RecentFeed />
                </div>
              </div>
            </div>

            {/* --- CORRECTION: Buttons are now INSIDE the main white container --- */}
            <div className="flex items-center space-x-3 md:space-x-4 mt-6 pt-6 pb-16 md:pb-40 border-t border-gray-100">
              <button className="flex gap-2 px-5 py-3 text-md tracking-wider rounded-lg hover:opacity-90 transition-opacity" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.15)' }}>
                Create shop
                <Plus className="w-6 text-yellow-400 text-center h-6" />
              </button>
              <button className="flex px-5 py-3 text-md tracking-wider bg-white  rounded-lg hover:bg-gray-50 transition-colors" style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.15)' }}>
                Go to Shop
                <ArrowRight className="w-6 h-6 text-yellow-400 text-center ml-3" />
              </button>
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default DashboardPage;
