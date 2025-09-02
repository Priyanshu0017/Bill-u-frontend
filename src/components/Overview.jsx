import { ChevronDown } from "lucide-react";
import React from "react";
import StatCard from '../components/StatCard';

const Overview = ({stats}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 md:mb-4">
        <div className="mb-2 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-yellow-400">Overview</span>
          </h2>
          <p className="text-sm md:text-md pt-1 text-gray-500">
            Your total numbers will be here
          </p>
        </div>
        <button className="self-end md:self-auto pt-8 flex items-center gap-2 text-xs md:text-xs px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg">
          <span className="text-gray-500">This Week</span>
          <ChevronDown className="pt-0.5 align-middle text-gray-500" />
        </button>
      </div>
      <div className="pt-6 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </>
  );
};

export default Overview;
