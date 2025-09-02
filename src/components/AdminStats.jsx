import React from "react";

const AdminStats = ({stat , index}) => {
  return (
    <div
      key={index}
      className="bg-white rounded-lg px-4 sm:px-5 py-3 sm:py-4"
      style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,0.20)" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-600 text-xs sm:text-sm font-medium">
            {stat.title}
          </h3>
          <div
            className={`w-8 h-8 rounded-md ml-4 ${stat.bgColor} flex items-center justify-center`}
          >
            <img src={stat.img} alt="" />
          </div>
        </div>
        <p className="text-2xl sm:text-3xl mt-3 sm:mt-5 font-bold text-bill-dark">{stat.value}</p>
      </div>
    </div>
  );
};

export default AdminStats;
